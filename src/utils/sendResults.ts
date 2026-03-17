import type {Question, QuestionnaireValue} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

const RECIPIENT = 'mail@heyfreeda.com';

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
 * Build a plain-text representation of all answers.
 */
export function buildStructuredOutput(
    groups: Question[],
    answers: Map<string, QuestionnaireValue[]>,
    language: string
): string {
    const timestamp = new Date().toISOString();
    const lines: string[] = [
        'HEY FREEDA \u2014 NEEDS ASSESSMENT',
        `Date: ${timestamp}`,
        `Language: ${language}`,
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
 * Send questionnaire results via Formsubmit.co (no account needed).
 * Sends in the background — the user always sees the thank-you page.
 */
export function sendResultsEmail(
    groups: Question[],
    answers: Map<string, QuestionnaireValue[]>,
    language: string
): void {
    const body = buildStructuredOutput(groups, answers, language);

    const formData = new FormData();
    formData.append('email', RECIPIENT);
    formData.append('_subject', `Hey Freeda \u2014 Needs Assessment [${new Date().toLocaleDateString()}]`);
    formData.append('message', body);
    formData.append('_captcha', 'false');
    formData.append('_template', 'box');

    fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
        method: 'POST',
        body: formData
    }).catch(err => console.error('Form submission failed:', err));
}
