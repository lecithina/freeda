import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';
import {NeedsAssessmentEN} from './NeedsAssessment.en.js';
import {NeedsAssessmentDE} from './NeedsAssessment.de.js';
import {NeedsAssessmentNE} from './NeedsAssessment.ne.js';
import {InternalAssessmentDE} from './InternalAssessment.de.js';

export {NeedsAssessmentEN, NeedsAssessmentDE, NeedsAssessmentNE, InternalAssessmentDE};

export const allQuestionnaires: Questionnaire[] = [
    NeedsAssessmentEN,
    NeedsAssessmentDE,
    NeedsAssessmentNE,
    InternalAssessmentDE
];
