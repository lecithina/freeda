import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export const InternalAssessmentEN: Questionnaire = {
    resourceType: 'Questionnaire',
    language: 'en',
    url: 'http://heyfreeda.com/questionnaire/internal-assessment/en',
    name: 'InternalAssessment',
    title: 'Internal Assessment \u2013 Stage 2',
    status: 'active',
    item: [
        // ══════════════════════════════════════════════
        // Group 1: Basic Data
        // ══════════════════════════════════════════════
        {
            linkId: 'grunddaten',
            text: 'Basic Data',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'participantName',
                    text: 'Name of the participant',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'householdCode',
                    text: 'Household code no.',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'stufe1Reference',
                    text: 'Reference to Stage 1 questionnaire (date or identifier)',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'wardNumber',
                    text: 'Ward no.',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'toleSiedlung',
                    text: 'Tole / Settlement',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'palikaKommune',
                    text: 'Palika / Municipality',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'distrikt',
                    text: 'District',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'householdHead',
                    text: 'Name of the head of household',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'contactNumber',
                    text: 'Contact no.',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'assessmentDate',
                    text: 'Date of assessment',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'assessorName',
                    text: 'Name of the assessor',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'membersChildren',
                    text: 'Children (0\u201317 years)',
                    type: 'integer',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'membersYouth',
                    text: 'Youth (18\u201324 years)',
                    type: 'integer',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'membersAdults',
                    text: 'Adults (25\u201359 years)',
                    type: 'integer',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'membersElderly',
                    text: 'Elderly (60+)',
                    type: 'integer',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Group 2: Economic Situation
        // ══════════════════════════════════════════════
        {
            linkId: 'wirtschaftlicheLage',
            text: 'Economic Situation',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'incomeSource',
                    text: 'Main source of income',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '1', display: 'Agriculture'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '2', display: 'Daily wage labour'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '3', display: 'Foreign employment'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '4', display: 'Trade'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '5', display: 'Services'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: 'other', display: 'Other'}}
                    ]
                },
                {
                    linkId: 'monthlyIncome',
                    text: 'Average income per month/year (Rs.)',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'landOwnership',
                    text: 'Land ownership',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/land-ownership', version: '1.0', code: '1', display: 'Owned'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/land-ownership', version: '1.0', code: '2', display: 'Rented or leased'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/land-ownership', version: '1.0', code: '3', display: 'No land ownership'}}
                    ]
                },
                {
                    linkId: 'foodSecurity',
                    text: 'Food security',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/food-security', version: '1.0', code: '1', display: 'Sufficient for the whole year'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/food-security', version: '1.0', code: '2', display: '6\u20139 months'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/food-security', version: '1.0', code: '3', display: 'Less than 6 months'}}
                    ]
                },
                {
                    linkId: 'socialBenefits',
                    text: 'Social benefits / Social assistance',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-benefits', version: '1.0', code: '1', display: 'Receives benefits'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-benefits', version: '1.0', code: '2', display: 'Does not receive benefits'}}
                    ]
                },
                {
                    linkId: 'mainExpenses',
                    text: 'Main household expenses (food, education, health, rent, etc.)',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'monthlyExpenses',
                    text: 'Average expenses per month/year (Rs.)',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'riskWirtschaft',
                    text: 'Economic risk level',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'low'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'medium'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'high'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Group 3: Social Situation
        // ══════════════════════════════════════════════
        {
            linkId: 'sozialeLage',
            text: 'Social Situation',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'casteEthnicity',
                    text: 'Caste / Ethnicity',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'educationStatus',
                    text: 'Education status (children/youth)',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/education-status', version: '1.0', code: '1', display: 'Attending school or training'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/education-status', version: '1.0', code: '2', display: 'Out of school or training'}}
                    ]
                },
                {
                    linkId: 'schoolDropout',
                    text: 'School dropout',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/school-dropout', version: '1.0', code: 'yes', display: 'Yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/school-dropout', version: '1.0', code: 'no', display: 'No'}}
                    ]
                },
                {
                    linkId: 'schoolDropoutReason',
                    text: 'If yes: Why?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'schoolDropout', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/school-dropout', code: 'yes'}}]
                },
                {
                    linkId: 'disability',
                    text: 'Disability',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability', version: '1.0', code: 'yes', display: 'Yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability', version: '1.0', code: 'no', display: 'No'}}
                    ]
                },
                {
                    linkId: 'disabilityType',
                    text: 'If yes: What type of disability?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'disability', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability', code: 'yes'}}]
                },
                {
                    linkId: 'disabilityCard',
                    text: 'Disability card',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'disability', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability', code: 'yes'}}],
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability-card', version: '1.0', code: '1', display: 'Available'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability-card', version: '1.0', code: '2', display: 'Not available'}}
                    ]
                },
                {
                    linkId: 'childMarriageRisk',
                    text: 'Risk of child marriage',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/child-marriage-risk', version: '1.0', code: 'hoch', display: 'High'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/child-marriage-risk', version: '1.0', code: 'mittel', display: 'Medium'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/child-marriage-risk', version: '1.0', code: 'niedrig', display: 'Low'}}
                    ]
                },
                {
                    linkId: 'genderViolenceRisk',
                    text: 'Risk of gender-based violence',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/gender-violence-risk', version: '1.0', code: 'yes', display: 'Yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/gender-violence-risk', version: '1.0', code: 'no', display: 'No'}}
                    ]
                },
                {
                    linkId: 'genderViolenceForm',
                    text: 'If yes: What form?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'genderViolenceRisk', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/gender-violence-risk', code: 'yes'}}]
                },
                {
                    linkId: 'socialParticipation',
                    text: 'Social participation',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-participation', version: '1.0', code: '1', display: 'Active participation'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-participation', version: '1.0', code: '2', display: 'Limited'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-participation', version: '1.0', code: '3', display: 'Excluded'}}
                    ]
                },
                {
                    linkId: 'riskSozial',
                    text: 'Social risk level',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'low'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'medium'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'high'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Group 4: Political / Administrative Situation
        // ══════════════════════════════════════════════
        {
            linkId: 'politischeLage',
            text: 'Political / Administrative Situation',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'voterRegistration',
                    text: 'Voter registration',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/voter-registration', version: '1.0', code: 'yes', display: 'Yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/voter-registration', version: '1.0', code: 'no', display: 'No'}}
                    ]
                },
                {
                    linkId: 'voterNoReason',
                    text: 'If no: Why?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'voterRegistration', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/voter-registration', code: 'no'}}]
                },
                {
                    linkId: 'citizenshipStatus',
                    text: 'Citizenship / Birth registration',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/citizenship-status', version: '1.0', code: '1', display: 'Available for all'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/citizenship-status', version: '1.0', code: '2', display: 'Not available for some'}}
                    ]
                },
                {
                    linkId: 'accessStateServices',
                    text: 'Access to government services',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/access-state-services', version: '1.0', code: '1', display: 'Easy'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/access-state-services', version: '1.0', code: '2', display: 'Difficult'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/access-state-services', version: '1.0', code: '3', display: 'No access'}}
                    ]
                },
                {
                    linkId: 'riskPolitisch',
                    text: 'Political risk level',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'low'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'medium'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'high'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Group 5: Family Situation
        // ══════════════════════════════════════════════
        {
            linkId: 'familiaereSituation',
            text: 'Family Situation',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'familyStructure',
                    text: 'Family structure',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-structure', version: '1.0', code: '1', display: 'Extended family or joint household'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-structure', version: '1.0', code: '2', display: 'Nuclear family'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-structure', version: '1.0', code: '3', display: 'Single parent'}}
                    ]
                },
                {
                    linkId: 'familyRelationships',
                    text: 'Family relationships',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-relationships', version: '1.0', code: '1', display: 'Harmonious'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-relationships', version: '1.0', code: '2', display: 'Normal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-relationships', version: '1.0', code: '3', display: 'Conflict-ridden'}}
                    ]
                },
                {
                    linkId: 'domesticViolenceNote',
                    text: 'Note: The following questions concern sensitive topics. Please observe the safeguarding guidelines.',
                    type: 'display',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'domesticViolence',
                    text: 'Domestic violence',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/domestic-violence', version: '1.0', code: 'none', display: 'No indication'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/domestic-violence', version: '1.0', code: 'suspicion', display: 'Suspicion'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/domestic-violence', version: '1.0', code: 'confirmed', display: 'Confirmed'}}
                    ]
                },
                {
                    linkId: 'domesticViolenceForm',
                    text: 'If present: What form?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'domesticViolence', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/domestic-violence', code: 'suspicion'}},
                        {question: 'domesticViolence', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/domestic-violence', code: 'confirmed'}}
                    ],
                    enableBehavior: 'any'
                },
                {
                    linkId: 'parentalCare',
                    text: 'Parental care',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/parental-care', version: '1.0', code: '1', display: 'Good'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/parental-care', version: '1.0', code: '2', display: 'Medium'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/parental-care', version: '1.0', code: '3', display: 'Weak'}}
                    ]
                },
                {
                    linkId: 'laborMigration',
                    text: 'Foreign employment / Labour migration',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/labor-migration', version: '1.0', code: 'yes', display: 'Yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/labor-migration', version: '1.0', code: 'no', display: 'No'}}
                    ]
                },
                {
                    linkId: 'laborMigrationWhere',
                    text: 'If yes: Where?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'laborMigration', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/labor-migration', code: 'yes'}}]
                },
                {
                    linkId: 'riskFamilie',
                    text: 'Family risk level',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'low'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'medium'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'high'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Group 6: Psychosocial Situation
        // ══════════════════════════════════════════════
        {
            linkId: 'psychosozialeSituation',
            text: 'Psychosocial Situation',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'selfConfidenceChildren',
                    text: 'Self-confidence \u2013 Children',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gut', display: 'Good'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gering', display: 'Low'}}
                    ]
                },
                {
                    linkId: 'selfConfidenceYouth',
                    text: 'Self-confidence \u2013 Youth',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gut', display: 'Good'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gering', display: 'Low'}}
                    ]
                },
                {
                    linkId: 'selfConfidenceCaregivers',
                    text: 'Self-confidence \u2013 Caregivers',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gut', display: 'Good'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gering', display: 'Low'}}
                    ]
                },
                {
                    linkId: 'stressChildren',
                    text: 'Stress / Worries \u2013 Children',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'keine', display: 'None'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'mittel', display: 'Medium'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'hoch', display: 'High'}}
                    ]
                },
                {
                    linkId: 'stressYouth',
                    text: 'Stress / Worries \u2013 Youth',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'keine', display: 'None'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'mittel', display: 'Medium'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'hoch', display: 'High'}}
                    ]
                },
                {
                    linkId: 'stressCaregivers',
                    text: 'Stress / Worries \u2013 Caregivers',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'keine', display: 'None'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'mittel', display: 'Medium'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'hoch', display: 'High'}}
                    ]
                },
                {
                    linkId: 'socialBehaviorChildren',
                    text: 'Social behaviour \u2013 Children',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'positiv', display: 'Positive'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'negativ', display: 'Negative'}}
                    ]
                },
                {
                    linkId: 'socialBehaviorYouth',
                    text: 'Social behaviour \u2013 Youth',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'positiv', display: 'Positive'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'negativ', display: 'Negative'}}
                    ]
                },
                {
                    linkId: 'socialBehaviorCaregivers',
                    text: 'Social behaviour \u2013 Caregivers',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'positiv', display: 'Positive'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'negativ', display: 'Negative'}}
                    ]
                },
                {
                    linkId: 'counselingChildren',
                    text: 'Counselling need \u2013 Children',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'yes', display: 'Yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'no', display: 'No'}}
                    ]
                },
                {
                    linkId: 'counselingYouth',
                    text: 'Counselling need \u2013 Youth',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'yes', display: 'Yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'no', display: 'No'}}
                    ]
                },
                {
                    linkId: 'counselingCaregivers',
                    text: 'Counselling need \u2013 Caregivers',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'yes', display: 'Yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'no', display: 'No'}}
                    ]
                },
                {
                    linkId: 'riskPsychosozial',
                    text: 'Psychosocial risk level',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'low'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'medium'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'high'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Group 7: Overall Risk Classification
        // ══════════════════════════════════════════════
        {
            linkId: 'gesamtklassifikation',
            text: 'Overall Risk Classification',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'riskDescriptionDisplay',
                    text: 'Low risk: Basic needs met, good social participation. Medium risk: Partial lack of access to services, economic or social pressure. High risk: Multidimensional deprivation, violence, child marriage, or severe economic crisis.',
                    type: 'display',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'overallRisk',
                    text: 'Final classification',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/overall-risk', version: '1.0', code: 'niedrig', display: 'Low risk'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/overall-risk', version: '1.0', code: 'mittel', display: 'Medium risk'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/overall-risk', version: '1.0', code: 'hoch', display: 'High risk'}}
                    ]
                },
                {
                    linkId: 'overallRiskNotes',
                    text: 'Justification',
                    type: 'string',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Group 8: Conclusion
        // ══════════════════════════════════════════════
        {
            linkId: 'schlussfolgerung',
            text: 'Conclusion',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'conclusionText',
                    text: 'Summary assessment',
                    type: 'string',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Group 9: Recommendations and Action Plan
        // ══════════════════════════════════════════════
        {
            linkId: 'empfehlungen',
            text: 'Recommendations and Action Plan',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'immediateSupport',
                    text: 'Immediate support required',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'longTermSupport',
                    text: 'Long-term support',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'recommendedOrg',
                    text: 'Recommended organisation / service',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'followUpDate',
                    text: 'Follow-up date',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'assessorSignature',
                    text: 'Name of the recommending person',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'assessorRole',
                    text: 'Role',
                    type: 'string',
                    disabledDisplay: 'protected'
                }
            ]
        }
    ]
};
