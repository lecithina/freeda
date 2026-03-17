import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export const NeedsAssessmentEN: Questionnaire = {
    resourceType: 'Questionnaire',
    language: 'en',
    url: 'http://heyfreeda.com/questionnaire/needs-assessment/en',
    name: 'NeedsAssessment',
    title: 'Questionnaire for Nepal \u2013 Stage 1',
    status: 'active',
    item: [
        // ══════════════════════════════════════════════
        // Disclaimer
        // ══════════════════════════════════════════════
        {
            linkId: 'disclaimer',
            text: 'Before you start',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'disclaimerText',
                    text: 'This questionnaire helps us better understand your situation and see what kind of support might be right for you at the moment. You decide which questions you want to answer. Everything is voluntary and will be treated confidentially. You only need to provide contact details if you want to; we will ask for them at the end. Questions you do not want to answer right now can simply be skipped. \uD83C\uDF38',
                    type: 'display',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Section 1: Current Situation
        // ══════════════════════════════════════════════
        {
            linkId: 'currentSituation',
            text: 'Current Situation',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'age',
                    text: 'How old are you?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '1', display: 'under 16'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '2', display: '16\u201318'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '3', display: '19\u201321'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '4', display: '22\u201325'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '5', display: '26\u201330'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '6', display: '31 or older'}}
                    ]
                },
                {
                    linkId: 'situation',
                    text: 'What best describes your current situation right now?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '1', display: 'I am going to school'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '2', display: 'I am in college'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '3', display: 'I am doing a course or vocational training'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '4', display: 'I am working'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '5', display: 'I am at home and unsure what comes next'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '6', display: 'I live in a care home'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '7', display: 'I live in a hostel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '8', display: 'I live in a shared flat'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: 'other', display: 'Other'}}
                    ]
                },
                {
                    linkId: 'livingSituation',
                    text: 'Where do you live right now?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '1', display: 'with my family'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '2', display: 'with relatives'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '3', display: 'in a care home'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '4', display: 'in a hostel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '5', display: 'in a shared flat'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '6', display: 'alone'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '7', display: 'my housing situation is unstable'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '8', display: 'I would rather say later'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: 'other', display: 'Other'}}
                    ]
                },
                {
                    linkId: 'orgSupport',
                    text: 'Are you currently being supported by an organisation, school, group, or counselling centre?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support', version: '1.0', code: 'yes', display: 'yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support', version: '1.0', code: 'no', display: 'no'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support', version: '1.0', code: 'unsure', display: 'I am not sure'}}
                    ]
                },
                {
                    linkId: 'orgName',
                    text: 'If yes: Which organisation or service?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'orgSupport', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support', code: 'yes'}}]
                },
                {
                    linkId: 'futureOutlook',
                    text: 'How do you feel right now about your future?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook', version: '1.0', code: '1', display: 'I have a clear plan'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook', version: '1.0', code: '2', display: 'I have some ideas but I am unsure'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook', version: '1.0', code: '3', display: 'I do not know what is possible for me'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook', version: '1.0', code: '4', display: 'I see hardly any prospects right now'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Section 2: Basic Needs and Stability
        // ══════════════════════════════════════════════
        {
            linkId: 'basicNeeds',
            text: 'Basic Needs and Stability',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'missingItems',
                    text: 'Are you currently missing anything you urgently need for your daily life?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '1', display: 'safe housing'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '2', display: 'enough food'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '3', display: 'clean drinking water'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '4', display: 'money for medical visits or medication'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '5', display: 'clothing or shoes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '6', display: 'hygiene products'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '7', display: 'money for transport'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: 'none', display: 'none of these'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: 'other', display: 'Other'}}
                    ]
                },
                {
                    linkId: 'housingSafe',
                    text: 'Is your housing currently safe?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '1', display: 'yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '2', display: 'mostly yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '3', display: 'mostly no'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '4', display: 'no'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '5', display: 'I am not sure'}}
                    ]
                },
                {
                    linkId: 'medicalAccess',
                    text: 'Do you have access to medical help when you need it?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access', version: '1.0', code: '1', display: 'yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access', version: '1.0', code: '2', display: 'partially'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access', version: '1.0', code: '3', display: 'no'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access', version: '1.0', code: '4', display: 'I do not know'}}
                    ]
                },
                {
                    linkId: 'needsResolutionFirst',
                    text: 'Is there something that needs to be resolved first before you can think about school, learning, or the future?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first', version: '1.0', code: 'yes', display: 'yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first', version: '1.0', code: 'maybe', display: 'maybe'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first', version: '1.0', code: 'no', display: 'no'}}
                    ]
                },
                {
                    linkId: 'urgentIssue',
                    text: 'If yes or maybe: What is the most important thing right now?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'needsResolutionFirst', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first', code: 'yes'}},
                        {question: 'needsResolutionFirst', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first', code: 'maybe'}}
                    ],
                    enableBehavior: 'any'
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Section 3: Education
        // ══════════════════════════════════════════════
        {
            linkId: 'education',
            text: 'Education',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'currentlyStudying',
                    text: 'Are you currently in school, college, a course, or vocational training?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', version: '1.0', code: 'yes', display: 'yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', version: '1.0', code: 'no', display: 'no'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', version: '1.0', code: 'want-to', display: 'not right now, but I would like to continue'}}
                    ]
                },
                {
                    linkId: 'educationConcern',
                    text: 'Are you worried that you might not be able to continue your education or training?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'currentlyStudying', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', code: 'yes'}},
                        {question: 'currentlyStudying', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', code: 'want-to'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', version: '1.0', code: 'yes', display: 'yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', version: '1.0', code: 'maybe', display: 'maybe'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', version: '1.0', code: 'no', display: 'no'}}
                    ]
                },
                {
                    linkId: 'educationBarriers',
                    text: 'What makes school, college, a course, or vocational training difficult for you right now?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'currentlyStudying', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', code: 'yes'}},
                        {question: 'educationConcern', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', code: 'yes'}},
                        {question: 'educationConcern', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', code: 'maybe'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '1', display: 'fees or costs'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '2', display: 'learning materials'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '3', display: 'clothing or uniform'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '4', display: 'transport'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '5', display: 'housing'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '6', display: 'family obligations'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '7', display: 'health'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '8', display: 'exhaustion or feeling overwhelmed'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '9', display: 'lack of information'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: 'none', display: 'none of these'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: 'other', display: 'Other'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Section 4: Direction and Opportunities
        // ══════════════════════════════════════════════
        {
            linkId: 'direction',
            text: 'Direction and Opportunities',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'generalDirection',
                    text: 'Where would you rather look for opportunities right now?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', version: '1.0', code: 'germany', display: 'rather in Germany'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', version: '1.0', code: 'nepal', display: 'rather in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', version: '1.0', code: 'both', display: 'in both directions'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', version: '1.0', code: 'unsure', display: 'I do not know yet'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Section 5: Language and Learning
        // ══════════════════════════════════════════════
        {
            linkId: 'language',
            text: 'Language and Learning',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'wantsLanguage',
                    text: 'Would you like to learn or improve a language right now?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', version: '1.0', code: 'yes', display: 'yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', version: '1.0', code: 'maybe', display: 'maybe'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', version: '1.0', code: 'no', display: 'no'}}
                    ]
                },
                {
                    linkId: 'whichLanguage',
                    text: 'Which language is most important to you right now?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'yes'}},
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'maybe'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'german', display: 'German'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'english', display: 'English'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'both', display: 'both'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'other', display: 'another language'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'unsure', display: 'I do not know yet'}}
                    ]
                },
                {
                    linkId: 'languageMotivation',
                    text: 'Why would that be important for you right now?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'yes'}},
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'maybe'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '1', display: 'vocational training in Germany'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '2', display: 'work in Germany'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '3', display: 'studies'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '4', display: 'work in tourism in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '5', display: 'better opportunities in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '6', display: 'personal development'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '7', display: 'I want to keep my options open'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '8', display: 'I do not know exactly yet'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: 'other-open', display: 'Other'}}
                    ]
                },
                {
                    linkId: 'germanLevel',
                    text: 'What is your current level of German?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'whichLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', code: 'german'}},
                        {question: 'whichLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', code: 'both'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '1', display: 'no knowledge'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '2', display: 'first words and sentences'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '3', display: 'A1'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '4', display: 'A2'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '5', display: 'B1'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '6', display: 'B2 or higher'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '7', display: 'I do not know'}}
                    ]
                },
                {
                    linkId: 'englishLevel',
                    text: 'What is your current level of English?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'whichLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', code: 'english'}},
                        {question: 'whichLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', code: 'both'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '1', display: 'I understand and speak only a little English'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '2', display: 'I can have simple conversations in English'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '3', display: 'I can usually communicate well in English in everyday life'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '4', display: 'I can also talk about school, work, or plans in English'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '5', display: 'I am not sure'}}
                    ]
                },
                {
                    linkId: 'hasSmartphone',
                    text: 'Do you have a smartphone or another device you could use regularly for learning?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'yes'}},
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'maybe'}},
                        {question: 'currentlyStudying', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', code: 'yes'}},
                        {question: 'currentlyStudying', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', code: 'want-to'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/has-smartphone', version: '1.0', code: '1', display: 'yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/has-smartphone', version: '1.0', code: '2', display: 'partially'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/has-smartphone', version: '1.0', code: '3', display: 'no'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Section 6: Future and Next Steps
        // ══════════════════════════════════════════════
        {
            linkId: 'future',
            text: 'Future and Next Steps',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'interestPath',
                    text: 'Which path interests you the most right now?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'training-de', display: 'vocational training in Germany'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'work-de', display: 'work in Germany'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'study', display: 'studies'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'tourism-nepal', display: 'work in tourism in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'training-nepal', display: 'vocational training in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'other-nepal', display: 'another work opportunity in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'orientation', display: 'I would like to better understand my options first'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'unsure', display: 'I do not know at all which direction I want to go right now'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'other', display: 'Other'}}
                    ]
                },
                {
                    linkId: 'nepalInterests',
                    text: 'If you are thinking more about opportunities in Nepal: What interests you most there?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'generalDirection', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', code: 'nepal'}},
                        {question: 'generalDirection', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', code: 'both'}},
                        {question: 'interestPath', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', code: 'tourism-nepal'}},
                        {question: 'interestPath', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', code: 'training-nepal'}},
                        {question: 'interestPath', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', code: 'other-nepal'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '1', display: 'continue school or college'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '2', display: 'vocational training in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '3', display: 'work in tourism'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '4', display: 'learn English'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '5', display: 'learn digital skills'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '6', display: 'support with applications or career guidance'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '7', display: 'build a small income of my own'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '8', display: 'I do not know yet'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: 'other-open', display: 'Other'}}
                    ]
                },
                {
                    linkId: 'generalInterests',
                    text: 'What can you generally imagine doing?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    maxLength: 3,
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '1', display: 'working with people'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '2', display: 'working in tourism or service'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '3', display: 'studying and getting a qualification'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '4', display: 'hands-on work'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '5', display: 'organised or office work'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '6', display: 'something creative'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '7', display: 'learning something digital'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '8', display: 'I am still unsure'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Section 7: Stress and Support
        // ══════════════════════════════════════════════
        {
            linkId: 'supportSection',
            text: 'Stress and Support',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'personalBurden',
                    text: 'Is there something that is weighing heavily on you right now and that you would like to talk to someone about?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden', version: '1.0', code: 'yes', display: 'yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden', version: '1.0', code: 'maybe', display: 'maybe later'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden', version: '1.0', code: 'no', display: 'no'}}
                    ]
                },
                {
                    linkId: 'helpfulSupport',
                    text: 'What kind of support would be most helpful for you right now?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    maxLength: 3,
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '1', display: 'orientation counselling'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '2', display: 'help with learning German'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '3', display: 'help with learning English'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '4', display: 'a learning plan'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '5', display: 'support with documents'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '6', display: 'motivation and mentoring'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '7', display: 'information for my family or caregivers'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '8', display: 'help with education costs'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '9', display: 'help with housing or basic needs'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '10', display: 'support for training or work in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: 'other-open', display: 'Other'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Section 8: Safe Contact
        // ══════════════════════════════════════════════
        {
            linkId: 'contact',
            text: 'Safe Contact',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'contactSafe',
                    text: 'Is it safe for you if we contact you directly?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', version: '1.0', code: 'yes', display: 'yes'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', version: '1.0', code: 'org', display: 'only through an organisation or trusted person'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', version: '1.0', code: 'no', display: 'I would rather not right now'}}
                    ]
                },
                {
                    linkId: 'contactMethod',
                    text: 'How would you prefer to be contacted?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'contactSafe', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', code: 'yes'}},
                        {question: 'contactSafe', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', code: 'org'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: '1', display: 'WhatsApp'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: '2', display: 'phone'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: '3', display: 'email'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: '4', display: 'through an organisation'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: '5', display: 'decide later'}}
                    ]
                },
                {
                    linkId: 'contactDetails',
                    text: 'Your contact details',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'contactSafe', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', code: 'yes'}},
                        {question: 'contactSafe', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', code: 'org'}}
                    ],
                    enableBehavior: 'any'
                }
            ]
        }
    ]
};
