import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export const NeedsAssessmentEN: Questionnaire = {
    resourceType: 'Questionnaire',
    language: 'en',
    url: 'http://heyfreeda.com/questionnaire/needs-assessment/en',
    name: 'NeedsAssessment',
    title: 'Needs Assessment',
    status: 'active',
    item: [
        // ─── Disclaimer ──────────────────────────────────────────────────
        {
            linkId: 'disclaimer',
            text: 'Before you start',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'disclaimerText',
                    text: 'Your answers help us better understand what you need right now and how Hey Freeda can support you. Everything you share with us is treated confidentially and will not be passed on to third parties. You don\u2019t have to answer every question if something feels too personal. We will only ask for your contact details at the end.\n\nThank you for taking the time. \uD83D\uDE4F',
                    type: 'display',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ─── Group 1: Personal Situation ───────────────────────────────────
        {
            linkId: 'personalInfo',
            text: 'Personal Situation',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'age',
                    text: 'How old are you?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '1',
                                display: 'Under 16'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '2',
                                display: '16\u201318'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '3',
                                display: '19\u201321'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '4',
                                display: '22\u201325'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '5',
                                display: '26\u201330'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '6',
                                display: 'older than 31'
                            }
                        }
                    ]
                },
                {
                    linkId: 'currentSituation',
                    text: 'What best describes your current situation?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '1',
                                display: 'School'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '2',
                                display: 'College'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '3',
                                display: 'Course/Training'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '4',
                                display: 'Working'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '5',
                                display: 'At home/uncertain'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '6',
                                display: 'Shelter/Hostel/Shared housing'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '7',
                                display: 'Other'
                            }
                        }
                    ]
                },
                {
                    linkId: 'livingSituation',
                    text: 'Where do you currently live?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '1',
                                display: 'Family'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '2',
                                display: 'Relatives'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '3',
                                display: 'Shelter'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '4',
                                display: 'Hostel'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '5',
                                display: 'Shared housing'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '6',
                                display: 'Alone'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '7',
                                display: 'Housing uncertain'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '8',
                                display: 'Prefer to say later'
                            }
                        }
                    ]
                },
                {
                    linkId: 'futureOutlook',
                    text: 'How do you feel about your future right now?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureOutlook',
                                version: '1.0',
                                code: '1',
                                display: 'Clear plan'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureOutlook',
                                version: '1.0',
                                code: '2',
                                display: 'Some ideas/uncertain'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureOutlook',
                                version: '1.0',
                                code: '3',
                                display: "Don't know what's possible"
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureOutlook',
                                version: '1.0',
                                code: '4',
                                display: 'Hardly any prospects'
                            }
                        }
                    ]
                }
            ]
        },

        // ─── Group 2: Basic Needs ──────────────────────────────────────────
        {
            linkId: 'basicNeeds',
            text: 'Basic Needs',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'mainConcern',
                    text: 'What concerns you the most right now?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '1',
                                display: 'School/College'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '2',
                                display: 'Money'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '3',
                                display: 'Housing'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '4',
                                display: 'Health'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '5',
                                display: 'German language'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '6',
                                display: 'Work/Training'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '7',
                                display: 'Supporting family'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '8',
                                display: "Don't know where to start"
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '9',
                                display: 'Other'
                            }
                        }
                    ]
                },
                {
                    linkId: 'missingItems',
                    text: 'Are you currently lacking anything you urgently need for daily life?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '1',
                                display: 'Hygiene products'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '2',
                                display: 'Clothing'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '3',
                                display: 'Weatherproof shoes/rain gear'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '4',
                                display: 'Food'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '5',
                                display: 'Medication'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '6',
                                display: 'Doctor visits/checkups'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '7',
                                display: 'Safe shelter'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '8',
                                display: 'Transportation costs'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '9',
                                display: 'None of these'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '10',
                                display: 'Other'
                            }
                        }
                    ]
                },
                {
                    linkId: 'missedOpportunity',
                    text: 'In the last 3 months, have you missed school, college, work, or a course because you lacked something important?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missedOpportunity',
                                version: '1.0',
                                code: '1',
                                display: 'Yes'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missedOpportunity',
                                version: '1.0',
                                code: '2',
                                display: 'Maybe'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missedOpportunity',
                                version: '1.0',
                                code: '3',
                                display: 'No'
                            }
                        }
                    ]
                }
            ]
        },

        // ─── Group 3: Safety & Housing ─────────────────────────────────────
        {
            linkId: 'safety',
            text: 'Safety & Housing',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'housingSafe',
                    text: 'Is your housing currently safe?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingSafe',
                                version: '1.0',
                                code: '1',
                                display: 'Yes'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingSafe',
                                version: '1.0',
                                code: '2',
                                display: 'Mostly yes'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingSafe',
                                version: '1.0',
                                code: '3',
                                display: 'Mostly no'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingSafe',
                                version: '1.0',
                                code: '4',
                                display: 'No'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingSafe',
                                version: '1.0',
                                code: '5',
                                display: 'Uncertain'
                            }
                        }
                    ]
                },
                {
                    linkId: 'housingRisk',
                    text: 'Are you worried you could lose your current housing?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingRisk',
                                version: '1.0',
                                code: '1',
                                display: 'Yes'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingRisk',
                                version: '1.0',
                                code: '2',
                                display: 'Maybe'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingRisk',
                                version: '1.0',
                                code: '3',
                                display: 'No'
                            }
                        }
                    ]
                },
                {
                    linkId: 'medicalAccess',
                    text: 'Do you have access to medical help when you need it?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medicalAccess',
                                version: '1.0',
                                code: '1',
                                display: 'Yes'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medicalAccess',
                                version: '1.0',
                                code: '2',
                                display: 'Partially'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medicalAccess',
                                version: '1.0',
                                code: '3',
                                display: 'No'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medicalAccess',
                                version: '1.0',
                                code: '4',
                                display: "I don't know"
                            }
                        }
                    ]
                },
                {
                    linkId: 'urgentNeed',
                    text: 'What is most urgent right now?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '1',
                                display: 'Hygiene/menstruation'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '2',
                                display: 'Health/medical costs'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '3',
                                display: 'Safe housing'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '4',
                                display: 'Clothing/shoes'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '5',
                                display: 'Food'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '6',
                                display: 'Safety'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '7',
                                display: 'Other'
                            }
                        }
                    ]
                }
            ]
        },

        // ─── Group 4: Education ────────────────────────────────────────────
        {
            linkId: 'education',
            text: 'Education',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'currentlyStudying',
                    text: 'Are you currently attending school or college?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentlyStudying',
                                version: '1.0',
                                code: '1',
                                display: 'Yes, school'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentlyStudying',
                                version: '1.0',
                                code: '2',
                                display: 'Yes, college'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentlyStudying',
                                version: '1.0',
                                code: '3',
                                display: 'No'
                            }
                        }
                    ]
                },
                {
                    linkId: 'educationLevel',
                    text: 'What is your current education level?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '1',
                                display: 'Still in school'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '2',
                                display: 'School completed'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '3',
                                display: 'Started college'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '4',
                                display: 'College completed'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '5',
                                display: 'Vocational training'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '6',
                                display: 'University'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '7',
                                display: 'Other'
                            }
                        }
                    ]
                },
                {
                    linkId: 'educationGoal',
                    text: 'What would you like to do next in education?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationGoal',
                                version: '1.0',
                                code: '1',
                                display: 'Complete school'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationGoal',
                                version: '1.0',
                                code: '2',
                                display: 'Attend college'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationGoal',
                                version: '1.0',
                                code: '3',
                                display: 'Do vocational training'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationGoal',
                                version: '1.0',
                                code: '4',
                                display: 'Study at university'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationGoal',
                                version: '1.0',
                                code: '5',
                                display: 'Take a course/training'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationGoal',
                                version: '1.0',
                                code: '6',
                                display: "I don't know yet"
                            }
                        }
                    ]
                },
                {
                    linkId: 'educationSupport',
                    text: 'What support would help you most to stay in or return to education?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '1',
                                display: 'Tuition fees'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '2',
                                display: 'Learning materials'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '3',
                                display: 'Uniform/clothing'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '4',
                                display: 'Transportation'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '5',
                                display: 'Safe housing'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '6',
                                display: 'Mentoring'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '7',
                                display: 'Study structure'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '8',
                                display: 'Career guidance'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '9',
                                display: 'Other'
                            }
                        }
                    ]
                }
            ]
        },

        // ─── Group 5: Learning German ──────────────────────────────────────
        {
            linkId: 'german',
            text: 'Learning German',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'germanLevel',
                    text: 'What is your current German level?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanLevel',
                                version: '1.0',
                                code: '1',
                                display: 'No knowledge'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanLevel',
                                version: '1.0',
                                code: '2',
                                display: 'First words and sentences'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanLevel',
                                version: '1.0',
                                code: '3',
                                display: 'A1'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanLevel',
                                version: '1.0',
                                code: '4',
                                display: 'A2'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanLevel',
                                version: '1.0',
                                code: '5',
                                display: 'B1'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanLevel',
                                version: '1.0',
                                code: '6',
                                display: 'B2 or higher'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanLevel',
                                version: '1.0',
                                code: '7',
                                display: "I don't know"
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanMotivation',
                    text: 'Why do you want to learn German?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '1',
                                display: 'Training in Germany'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '2',
                                display: 'Work in Germany'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '3',
                                display: 'Studies/semester abroad'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '4',
                                display: 'Tourism job in Nepal'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '5',
                                display: 'Personal development'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '6',
                                display: 'Keep options open'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '7',
                                display: "I don't know yet"
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanMethod',
                    text: 'How would you prefer to learn German?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '1',
                                display: 'Zoom lessons'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '2',
                                display: 'Study group'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '3',
                                display: 'Duolingo'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '4',
                                display: 'Flashcards/Apps'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '5',
                                display: 'Goethe Institute'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '6',
                                display: 'Language school'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '7',
                                display: 'Self-study'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '8',
                                display: 'I need advice'
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanBarriers',
                    text: 'What makes learning German difficult for you right now?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '1',
                                display: 'Costs'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '2',
                                display: 'Time'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '3',
                                display: 'No internet/no device'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '4',
                                display: 'No quiet study place'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '5',
                                display: 'Family/daily life'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '6',
                                display: "Don't know how to start"
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '7',
                                display: "Fear it's too hard"
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '8',
                                display: 'None of these'
                            }
                        }
                    ]
                }
            ]
        },

        // ─── Group 6: Career & Future ──────────────────────────────────────
        {
            linkId: 'career',
            text: 'Career & Future',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'futureWish',
                    text: 'What do you wish for the next 1\u20133 years?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '1',
                                display: 'Complete school/college'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '2',
                                display: 'Learn a profession'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '3',
                                display: 'Earn own money'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '4',
                                display: 'Become more independent'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '5',
                                display: 'Learn German'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '6',
                                display: 'Work in Nepal'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '7',
                                display: 'Study/work in Germany'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '8',
                                display: "I'm still unsure"
                            }
                        }
                    ]
                },
                {
                    linkId: 'interestPath',
                    text: 'Which path interests you most right now?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '1',
                                display: 'Training in Germany'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '2',
                                display: 'Work in Germany'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '3',
                                display: 'Studies/semester abroad'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '4',
                                display: 'Tourism job in Nepal'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '5',
                                display: 'Vocational training in Nepal'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '6',
                                display: 'Orientation first'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '7',
                                display: "I don't know yet"
                            }
                        }
                    ]
                },
                {
                    linkId: 'interestAreas',
                    text: 'Which areas interest you?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '1',
                                display: 'Hospitality/Hotel'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '2',
                                display: 'Tourism'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '3',
                                display: 'Care/Support'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '4',
                                display: 'Office/Organization'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '5',
                                display: 'Sales'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '6',
                                display: 'Beauty/Cosmetics'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '7',
                                display: 'Tailoring/Handicraft'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '8',
                                display: 'Childcare'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '9',
                                display: 'IT/Computer'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '10',
                                display: 'Other'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '11',
                                display: "I'm open"
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanyInterest',
                    text: 'Could you imagine going to Germany for training or work later?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanyInterest',
                                version: '1.0',
                                code: '1',
                                display: 'Yes'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanyInterest',
                                version: '1.0',
                                code: '2',
                                display: 'Maybe'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanyInterest',
                                version: '1.0',
                                code: '3',
                                display: 'Rather not'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanyInterest',
                                version: '1.0',
                                code: '4',
                                display: "I don't know enough about it yet"
                            }
                        }
                    ]
                }
            ]
        },

        // ─── Group 7: Support & Contact ────────────────────────────────────
        {
            linkId: 'support',
            text: 'Support & Contact',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'readiness',
                    text: 'How ready do you feel for a next step?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/readiness',
                                version: '1.0',
                                code: '1',
                                display: 'Very ready'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/readiness',
                                version: '1.0',
                                code: '2',
                                display: 'Somewhat ready'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/readiness',
                                version: '1.0',
                                code: '3',
                                display: 'Uncertain'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/readiness',
                                version: '1.0',
                                code: '4',
                                display: 'Not ready yet'
                            }
                        }
                    ]
                },
                {
                    linkId: 'helpfulSupport',
                    text: 'What support would be most helpful for you right now?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    maxLength: 3,
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '1',
                                display: 'Orientation talk'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '2',
                                display: 'Help with learning German'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '3',
                                display: 'Study plan'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '4',
                                display: 'Support with documents'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '5',
                                display: 'Motivation and guidance'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '6',
                                display: 'Information for my family'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '7',
                                display: 'Help with education costs'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '8',
                                display: 'Help with housing or basic needs'
                            }
                        }
                    ]
                },
                {
                    linkId: 'contactWish',
                    text: 'Would you like Hey Freeda to contact you after this questionnaire?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactWish',
                                version: '1.0',
                                code: '1',
                                display: 'Yes'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactWish',
                                version: '1.0',
                                code: '2',
                                display: 'Maybe later'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactWish',
                                version: '1.0',
                                code: '3',
                                display: 'No'
                            }
                        }
                    ]
                },
                {
                    linkId: 'contactMethod',
                    text: 'How can we best reach you?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {
                            question: 'contactWish',
                            operator: '=',
                            answerCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactWish',
                                code: '1'
                            }
                        }
                    ],
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactMethod',
                                version: '1.0',
                                code: '1',
                                display: 'WhatsApp'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactMethod',
                                version: '1.0',
                                code: '2',
                                display: 'Phone'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactMethod',
                                version: '1.0',
                                code: '3',
                                display: 'Email'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactMethod',
                                version: '1.0',
                                code: '4',
                                display: 'Through a contact person'
                            }
                        }
                    ]
                },
                {
                    linkId: 'contactDetails',
                    text: 'Your contact details',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {
                            question: 'contactWish',
                            operator: '=',
                            answerCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactWish',
                                code: '1'
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
