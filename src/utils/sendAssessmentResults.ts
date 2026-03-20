import type {Question, QuestionnaireValue} from '@refinio/one.models/lib/models/QuestionnaireModel.js';
import {extractSectionRisks, computeSuggestedOverallRisk} from './riskClassification.js';

const RECIPIENT = 'mail@heyfreeda.com';

function formatValue(answer: QuestionnaireValue[]): string {
    if (answer.length === 0) return '\u2014';

    return answer
        .map(v => {
            if (v.valueCoding?.display) return v.valueCoding.display;
            if (v.valueString) return v.valueString;
            if (v.valueInteger) return v.valueInteger;
            if (v.valueDate) return v.valueDate;
            if (v.valueBoolean !== undefined) return v.valueBoolean ? 'Ja' : 'Nein';
            if (v.valueDecimal) return v.valueDecimal;
            return '';
        })
        .filter(Boolean)
        .join(', ');
}

const RISK_LABELS: Record<string, string> = {
    riskWirtschaft: 'Wirtschaftlich',
    riskSozial: 'Sozial',
    riskPolitisch: 'Politisch',
    riskFamilie: 'Familie',
    riskPsychosozial: 'Psychosozial'
};

function buildRiskSummary(answers: Map<string, QuestionnaireValue[]>): string {
    const sectionRisks = extractSectionRisks(answers);
    const overall = computeSuggestedOverallRisk(sectionRisks);

    const lines: string[] = [
        'RISIKOBEWERTUNG',
        `Gesamtrisiko (Vorschlag): ${overall.toUpperCase()}`,
        ''
    ];

    for (const [linkId, level] of sectionRisks) {
        const label = RISK_LABELS[linkId] ?? linkId;
        lines.push(`  ${label}: ${level}`);
    }

    lines.push('');
    return lines.join('\n');
}

/**
 * Build a plain-text representation of all assessment answers with risk summary.
 */
export function buildStructuredOutput(
    groups: Question[],
    answers: Map<string, QuestionnaireValue[]>
): string {
    const timestamp = new Date().toISOString();
    const lines: string[] = [
        'HEY FREEDA \u2014 INTERNE BEWERTUNG (Stufe 2)',
        `Datum: ${timestamp}`,
        '',
        buildRiskSummary(answers),
        '\u2500'.repeat(40),
        ''
    ];

    for (const group of groups) {
        lines.push(`${(group.text ?? group.linkId).toUpperCase()}`);

        if (group.item) {
            for (const question of group.item) {
                if (question.type === 'display') continue;
                const answer = answers.get(question.linkId) ?? [];
                const value = formatValue(answer);
                const label = question.text ?? question.linkId;
                lines.push(`${label}`);
                lines.push(`\u2192 ${value}`);
                lines.push('');
            }
        }
    }

    return lines.join('\n');
}

/**
 * Send internal assessment results via Formsubmit.co.
 * Sends in the background — the user always sees the thank-you page.
 */
export function sendAssessmentResults(
    groups: Question[],
    answers: Map<string, QuestionnaireValue[]>
): void {
    const body = buildStructuredOutput(groups, answers);

    // Extract participant name from answers
    const nameAnswer = answers.get('participantName');
    const participantName = nameAnswer?.[0]?.valueString ?? 'Unbekannt';
    const date = new Date().toLocaleDateString('de-DE');

    const formData = new FormData();
    formData.append('email', RECIPIENT);
    formData.append(
        '_subject',
        `[Stufe 2] Interne Bewertung \u2014 ${participantName} [${date}]`
    );
    formData.append('message', body);
    formData.append('_captcha', 'false');
    formData.append('_template', 'box');

    fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
        method: 'POST',
        body: formData
    }).catch(err => console.error('Assessment submission failed:', err));
}
