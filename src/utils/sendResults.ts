import type {Question, QuestionnaireValue} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

const RECIPIENT = 'redkeinunsinn@gmail.com';

function formatValue(answer: QuestionnaireValue[]): string {
    if (answer.length === 0) return '—';

    return answer
        .map(v => {
            if (v.valueCoding?.display) return v.valueCoding.display;
            if (v.valueString) return v.valueString;
            if (v.valueInteger) return v.valueInteger;
            if (v.valueDate) return v.valueDate;
            if (v.valueBoolean !== undefined) return v.valueBoolean ? 'Yes' : 'No';
            if (v.valueDecimal) return v.valueDecimal;
            return '';
        })
        .filter(Boolean)
        .join(', ');
}

/**
 * Build a structured plain-text representation of all answers.
 */
export function buildStructuredOutput(
    groups: Question[],
    answers: Map<string, QuestionnaireValue[]>,
    language: string
): string {
    const timestamp = new Date().toISOString();
    const lines: string[] = [
        '═══════════════════════════════════════',
        'HEY FREEDA — NEEDS ASSESSMENT',
        `Date: ${timestamp}`,
        `Language: ${language}`,
        '═══════════════════════════════════════',
        ''
    ];

    for (const group of groups) {
        lines.push(`── ${(group.text ?? group.linkId).toUpperCase()} ──`);
        lines.push('');

        if (group.item) {
            for (const question of group.item) {
                if (question.type === 'display') continue;
                const answer = answers.get(question.linkId) ?? [];
                const label = question.text ?? question.linkId;
                const value = formatValue(answer);
                lines.push(`${label}`);
                lines.push(`→ ${value}`);
                lines.push('');
            }
        }
    }

    lines.push('═══════════════════════════════════════');
    lines.push('Sent from Hey Freeda Questionnaire App');
    lines.push('═══════════════════════════════════════');

    return lines.join('\n');
}

/**
 * Send questionnaire results via mailto: link.
 * Opens the user's email client with pre-filled recipient, subject, and body.
 */
export function sendResultsEmail(
    groups: Question[],
    answers: Map<string, QuestionnaireValue[]>,
    language: string
): void {
    const body = buildStructuredOutput(groups, answers, language);
    const subject = `Hey Freeda — Needs Assessment [${new Date().toLocaleDateString()}]`;

    const mailto =
        `mailto:${RECIPIENT}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    window.open(mailto, '_blank');
}
