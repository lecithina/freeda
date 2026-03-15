import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';
import {NeedsAssessmentEN} from './NeedsAssessment.en.js';
import {NeedsAssessmentDE} from './NeedsAssessment.de.js';
import {NeedsAssessmentNE} from './NeedsAssessment.ne.js';

export {NeedsAssessmentEN, NeedsAssessmentDE, NeedsAssessmentNE};

export const allQuestionnaires: Questionnaire[] = [
    NeedsAssessmentEN,
    NeedsAssessmentDE,
    NeedsAssessmentNE
];
