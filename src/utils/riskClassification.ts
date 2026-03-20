import type {QuestionnaireValue} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export type RiskLevel = 'niedrig' | 'mittel' | 'hoch';

const RISK_LINK_IDS = [
    'riskWirtschaft',
    'riskSozial',
    'riskPolitisch',
    'riskFamilie',
    'riskPsychosozial'
];

const VALID_LEVELS: Set<string> = new Set(['niedrig', 'mittel', 'hoch']);

/**
 * Extract the risk level from each risk-question answer.
 * Each risk question is expected to produce a single valueCoding whose code
 * is one of 'niedrig' | 'mittel' | 'hoch'.
 */
export function extractSectionRisks(
    answers: Map<string, QuestionnaireValue[]>
): Map<string, RiskLevel> {
    const risks = new Map<string, RiskLevel>();

    for (const linkId of RISK_LINK_IDS) {
        const answer = answers.get(linkId);
        if (!answer || answer.length === 0) continue;

        const code = answer[0].valueCoding?.code;
        if (code && VALID_LEVELS.has(code)) {
            risks.set(linkId, code as RiskLevel);
        }
    }

    return risks;
}

/**
 * Compute a suggested overall risk level from the individual section risks.
 * If any section is "hoch", the overall risk is "hoch".
 * If any section is "mittel", the overall risk is "mittel".
 * Otherwise "niedrig".
 */
export function computeSuggestedOverallRisk(
    sectionRisks: Map<string, RiskLevel>
): RiskLevel {
    const levels = Array.from(sectionRisks.values());

    if (levels.includes('hoch')) return 'hoch';
    if (levels.includes('mittel')) return 'mittel';
    return 'niedrig';
}
