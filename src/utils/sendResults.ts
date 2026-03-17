import type {Question, QuestionnaireValue} from '@refinio/one.models/lib/models/QuestionnaireModel.js';
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_heyfreeda';
const EMAILJS_TEMPLATE_ID = 'template_heyfreeda';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

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
 * Send questionnaire results via EmailJS (background, reliable).
 * Falls back silently — the user always sees the thank-you page.
 */
export function sendResultsEmail(
    groups: Question[],
    answers: Map<string, QuestionnaireValue[]>,
    language: string
): void {
    const body = buildStructuredOutput(groups, answers, language);

    emailjs
        .send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                to_email: 'mail@heyfreeda.com',
                subject: `Hey Freeda \u2014 Needs Assessment [${new Date().toLocaleDateString()}]`,
                message: body
            },
            EMAILJS_PUBLIC_KEY
        )
        .catch(err => console.error('EmailJS failed:', err));
}
