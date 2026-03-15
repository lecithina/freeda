import type {Question, QuestionnaireValue} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

const WHATSAPP_NUMBER = '4915141472058';

function formatValue(answer: QuestionnaireValue[]): string {
    if (answer.length === 0) return '\u2014';

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
 * Build a compact plain-text representation of all answers for WhatsApp.
 */
export function buildStructuredOutput(
    groups: Question[],
    answers: Map<string, QuestionnaireValue[]>,
    language: string
): string {
    const timestamp = new Date().toISOString();
    const lines: string[] = [
        '*HEY FREEDA \u2014 NEEDS ASSESSMENT*',
        `Date: ${timestamp}`,
        `Language: ${language}`,
        ''
    ];

    for (const group of groups) {
        lines.push(`*${(group.text ?? group.linkId).toUpperCase()}*`);

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
 * Send questionnaire results via WhatsApp (wa.me link).
 * Opens WhatsApp with pre-filled message to the Hey Freeda number.
 */
export function sendResultsEmail(
    groups: Question[],
    answers: Map<string, QuestionnaireValue[]>,
    language: string
): void {
    const body = buildStructuredOutput(groups, answers, language);

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;

    window.open(waUrl, '_blank');
}
