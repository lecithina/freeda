import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export const NeedsAssessmentDE: Questionnaire = {
    resourceType: 'Questionnaire',
    language: 'de',
    url: 'http://heyfreeda.com/questionnaire/needs-assessment/de',
    name: 'NeedsAssessment',
    title: 'Bedarfserhebung',
    status: 'active',
    item: [
        // ──────────────────────────────────────────────
        // Group 1: Persoenliche Situation
        // ──────────────────────────────────────────────
        {
            linkId: 'personalInfo',
            text: 'Persoenliche Situation',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'age',
                    text: 'Wie alt bist du?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '1',
                                display: 'unter 16'
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
                                display: '\u00e4lter als 31'
                            }
                        }
                    ]
                },
                {
                    linkId: 'currentSituation',
                    text: 'Was beschreibt deine aktuelle Situation am besten?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/current-situation',
                                version: '1.0',
                                code: '1',
                                display: 'Schule'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/current-situation',
                                version: '1.0',
                                code: '2',
                                display: 'College'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/current-situation',
                                version: '1.0',
                                code: '3',
                                display: 'Kurs/Ausbildung'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/current-situation',
                                version: '1.0',
                                code: '4',
                                display: 'arbeite'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/current-situation',
                                version: '1.0',
                                code: '5',
                                display: 'zu Hause/unsicher'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/current-situation',
                                version: '1.0',
                                code: '6',
                                display: 'Heim/Hostel/WG'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/current-situation',
                                version: '1.0',
                                code: '7',
                                display: 'anderes'
                            }
                        }
                    ]
                },
                {
                    linkId: 'livingSituation',
                    text: 'Wo lebst du gerade?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '1',
                                display: 'Familie'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '2',
                                display: 'Verwandte'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '3',
                                display: 'Heim'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '4',
                                display: 'Hostel'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '5',
                                display: 'WG'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '6',
                                display: 'allein'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '7',
                                display: 'Wohnen unsicher'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '8',
                                display: 'sp\u00e4ter sagen'
                            }
                        }
                    ]
                },
                {
                    linkId: 'futureOutlook',
                    text: 'Wie f\u00fchlst du dich gerade in Bezug auf deine Zukunft?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook',
                                version: '1.0',
                                code: '1',
                                display: 'klarer Plan'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook',
                                version: '1.0',
                                code: '2',
                                display: 'ein paar Ideen/unsicher'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook',
                                version: '1.0',
                                code: '3',
                                display: 'wei\u00df nicht, was m\u00f6glich ist'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook',
                                version: '1.0',
                                code: '4',
                                display: 'kaum Perspektiven'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 2: Grundbed\u00fcrfnisse
        // ──────────────────────────────────────────────
        {
            linkId: 'basicNeeds',
            text: 'Grundbed\u00fcrfnisse',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'mainConcern',
                    text: 'Was besch\u00e4ftigt dich im Moment am meisten?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/main-concern',
                                version: '1.0',
                                code: '1',
                                display: 'Schule/College'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/main-concern',
                                version: '1.0',
                                code: '2',
                                display: 'Geld'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/main-concern',
                                version: '1.0',
                                code: '3',
                                display: 'Wohnen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/main-concern',
                                version: '1.0',
                                code: '4',
                                display: 'Gesundheit'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/main-concern',
                                version: '1.0',
                                code: '5',
                                display: 'Deutsch'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/main-concern',
                                version: '1.0',
                                code: '6',
                                display: 'Arbeit/Ausbildung'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/main-concern',
                                version: '1.0',
                                code: '7',
                                display: 'Familie unterst\u00fctzen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/main-concern',
                                version: '1.0',
                                code: '8',
                                display: 'wei\u00df nicht, wo ich anfangen soll'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/main-concern',
                                version: '1.0',
                                code: '9',
                                display: 'anderes'
                            }
                        }
                    ]
                },
                {
                    linkId: 'missingItems',
                    text: 'Fehlt dir im Moment etwas, das du dringend f\u00fcr deinen Alltag brauchst?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '1',
                                display: 'Hygieneprodukte'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '2',
                                display: 'Kleidung'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '3',
                                display: 'wetterfeste Schuhe/Regenkleidung'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '4',
                                display: 'Essen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '5',
                                display: 'Medikamente'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '6',
                                display: 'Arztbesuche/Untersuchungen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '7',
                                display: 'sichere Unterkunft'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '8',
                                display: 'Transportkosten'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '9',
                                display: 'nichts davon'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '10',
                                display: 'anderes'
                            }
                        }
                    ]
                },
                {
                    linkId: 'missedOpportunity',
                    text: 'Hast du in den letzten 3 Monaten Schule, College, Arbeit oder einen Kurs verpasst, weil dir etwas Wichtiges gefehlt hat?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missed-opportunity',
                                version: '1.0',
                                code: '1',
                                display: 'ja'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missed-opportunity',
                                version: '1.0',
                                code: '2',
                                display: 'vielleicht'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missed-opportunity',
                                version: '1.0',
                                code: '3',
                                display: 'nein'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 3: Sicherheit & Wohnen
        // ──────────────────────────────────────────────
        {
            linkId: 'safety',
            text: 'Sicherheit & Wohnen',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'housingSafe',
                    text: 'Ist dein Wohnen im Moment sicher?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe',
                                version: '1.0',
                                code: '1',
                                display: 'ja'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe',
                                version: '1.0',
                                code: '2',
                                display: 'eher ja'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe',
                                version: '1.0',
                                code: '3',
                                display: 'eher nein'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe',
                                version: '1.0',
                                code: '4',
                                display: 'nein'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe',
                                version: '1.0',
                                code: '5',
                                display: 'unsicher'
                            }
                        }
                    ]
                },
                {
                    linkId: 'housingRisk',
                    text: 'Machst du dir Sorgen, dass du deinen aktuellen Wohnplatz verlieren k\u00f6nntest?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-risk',
                                version: '1.0',
                                code: '1',
                                display: 'ja'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-risk',
                                version: '1.0',
                                code: '2',
                                display: 'vielleicht'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-risk',
                                version: '1.0',
                                code: '3',
                                display: 'nein'
                            }
                        }
                    ]
                },
                {
                    linkId: 'medicalAccess',
                    text: 'Hast du Zugang zu medizinischer Hilfe, wenn du sie brauchst?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access',
                                version: '1.0',
                                code: '1',
                                display: 'ja'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access',
                                version: '1.0',
                                code: '2',
                                display: 'teilweise'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access',
                                version: '1.0',
                                code: '3',
                                display: 'nein'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access',
                                version: '1.0',
                                code: '4',
                                display: 'ich wei\u00df nicht'
                            }
                        }
                    ]
                },
                {
                    linkId: 'urgentNeed',
                    text: 'Was ist gerade am dringendsten?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgent-need',
                                version: '1.0',
                                code: '1',
                                display: 'Hygiene/Periode'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgent-need',
                                version: '1.0',
                                code: '2',
                                display: 'Gesundheit/Arztkosten'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgent-need',
                                version: '1.0',
                                code: '3',
                                display: 'sicheres Wohnen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgent-need',
                                version: '1.0',
                                code: '4',
                                display: 'Kleidung/Schuhe'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgent-need',
                                version: '1.0',
                                code: '5',
                                display: 'Essen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgent-need',
                                version: '1.0',
                                code: '6',
                                display: 'Sicherheit'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgent-need',
                                version: '1.0',
                                code: '7',
                                display: 'anderes'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 4: Bildung
        // ──────────────────────────────────────────────
        {
            linkId: 'education',
            text: 'Bildung',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'currentlyStudying',
                    text: 'Gehst du aktuell zur Schule oder ins College?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying',
                                version: '1.0',
                                code: '1',
                                display: 'ja, Schule'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying',
                                version: '1.0',
                                code: '2',
                                display: 'ja, College'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying',
                                version: '1.0',
                                code: '3',
                                display: 'nein'
                            }
                        }
                    ]
                },
                {
                    linkId: 'educationLevel',
                    text: 'Was ist dein aktueller Bildungsstand?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-level',
                                version: '1.0',
                                code: '1',
                                display: 'noch in der Schule'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-level',
                                version: '1.0',
                                code: '2',
                                display: 'Schule abgeschlossen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-level',
                                version: '1.0',
                                code: '3',
                                display: 'College angefangen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-level',
                                version: '1.0',
                                code: '4',
                                display: 'College abgeschlossen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-level',
                                version: '1.0',
                                code: '5',
                                display: 'Ausbildung/Training'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-level',
                                version: '1.0',
                                code: '6',
                                display: 'Studium'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-level',
                                version: '1.0',
                                code: '7',
                                display: 'anderes'
                            }
                        }
                    ]
                },
                {
                    linkId: 'educationGoal',
                    text: 'Was m\u00f6chtest du im Bildungsbereich als N\u00e4chstes?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-goal',
                                version: '1.0',
                                code: '1',
                                display: 'Schule abschlie\u00dfen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-goal',
                                version: '1.0',
                                code: '2',
                                display: 'College besuchen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-goal',
                                version: '1.0',
                                code: '3',
                                display: 'Ausbildung machen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-goal',
                                version: '1.0',
                                code: '4',
                                display: 'studieren'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-goal',
                                version: '1.0',
                                code: '5',
                                display: 'Kurs/Training machen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-goal',
                                version: '1.0',
                                code: '6',
                                display: 'ich wei\u00df es noch nicht'
                            }
                        }
                    ]
                },
                {
                    linkId: 'educationSupport',
                    text: 'Welche Unterst\u00fctzung w\u00fcrde dir am meisten helfen, in Bildung zu bleiben oder wieder einzusteigen?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-support',
                                version: '1.0',
                                code: '1',
                                display: 'Geb\u00fchren'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-support',
                                version: '1.0',
                                code: '2',
                                display: 'Lernmaterialien'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-support',
                                version: '1.0',
                                code: '3',
                                display: 'Uniform/Kleidung'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-support',
                                version: '1.0',
                                code: '4',
                                display: 'Transport'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-support',
                                version: '1.0',
                                code: '5',
                                display: 'sicheres Wohnen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-support',
                                version: '1.0',
                                code: '6',
                                display: 'Mentoring'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-support',
                                version: '1.0',
                                code: '7',
                                display: 'Lernstruktur'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-support',
                                version: '1.0',
                                code: '8',
                                display: 'Berufsorientierung'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-support',
                                version: '1.0',
                                code: '9',
                                display: 'anderes'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 5: Deutschlernen
        // ──────────────────────────────────────────────
        {
            linkId: 'german',
            text: 'Deutschlernen',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'germanLevel',
                    text: 'Wie ist dein aktuelles Deutschniveau?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level',
                                version: '1.0',
                                code: '1',
                                display: 'keine Kenntnisse'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level',
                                version: '1.0',
                                code: '2',
                                display: 'erste W\u00f6rter und S\u00e4tze'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level',
                                version: '1.0',
                                code: '3',
                                display: 'A1'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level',
                                version: '1.0',
                                code: '4',
                                display: 'A2'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level',
                                version: '1.0',
                                code: '5',
                                display: 'B1'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level',
                                version: '1.0',
                                code: '6',
                                display: 'B2 oder h\u00f6her'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level',
                                version: '1.0',
                                code: '7',
                                display: 'ich wei\u00df es nicht'
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanMotivation',
                    text: 'Warum m\u00f6chtest du Deutsch lernen?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-motivation',
                                version: '1.0',
                                code: '1',
                                display: 'Ausbildung in Deutschland'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-motivation',
                                version: '1.0',
                                code: '2',
                                display: 'Arbeit in Deutschland'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-motivation',
                                version: '1.0',
                                code: '3',
                                display: 'Studium/Auslandssemester'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-motivation',
                                version: '1.0',
                                code: '4',
                                display: 'Job im Tourismus in Nepal'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-motivation',
                                version: '1.0',
                                code: '5',
                                display: 'pers\u00f6nliche Weiterentwicklung'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-motivation',
                                version: '1.0',
                                code: '6',
                                display: 'Optionen offenhalten'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-motivation',
                                version: '1.0',
                                code: '7',
                                display: 'ich wei\u00df es noch nicht'
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanMethod',
                    text: 'Wie w\u00fcrdest du am liebsten Deutsch lernen?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-method',
                                version: '1.0',
                                code: '1',
                                display: 'Zoom-Unterricht'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-method',
                                version: '1.0',
                                code: '2',
                                display: 'Lerngruppe'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-method',
                                version: '1.0',
                                code: '3',
                                display: 'Duolingo'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-method',
                                version: '1.0',
                                code: '4',
                                display: 'Lernkarten/Apps'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-method',
                                version: '1.0',
                                code: '5',
                                display: 'Goethe-Institut'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-method',
                                version: '1.0',
                                code: '6',
                                display: 'Sprachschule'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-method',
                                version: '1.0',
                                code: '7',
                                display: 'selbstst\u00e4ndig'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-method',
                                version: '1.0',
                                code: '8',
                                display: 'ich brauche Beratung'
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanBarriers',
                    text: 'Was macht Deutschlernen f\u00fcr dich gerade schwierig?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-barriers',
                                version: '1.0',
                                code: '1',
                                display: 'Kosten'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-barriers',
                                version: '1.0',
                                code: '2',
                                display: 'Zeit'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-barriers',
                                version: '1.0',
                                code: '3',
                                display: 'kein Internet/kein Ger\u00e4t'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-barriers',
                                version: '1.0',
                                code: '4',
                                display: 'kein ruhiger Lernort'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-barriers',
                                version: '1.0',
                                code: '5',
                                display: 'Familie/Alltag'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-barriers',
                                version: '1.0',
                                code: '6',
                                display: 'ich wei\u00df nicht, wie ich anfangen soll'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-barriers',
                                version: '1.0',
                                code: '7',
                                display: 'Angst, dass es zu schwer ist'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-barriers',
                                version: '1.0',
                                code: '8',
                                display: 'nichts davon'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 6: Beruf & Zukunft
        // ──────────────────────────────────────────────
        {
            linkId: 'career',
            text: 'Beruf & Zukunft',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'futureWish',
                    text: 'Was w\u00fcnschst du dir f\u00fcr die n\u00e4chsten 1\u20133 Jahre?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-wish',
                                version: '1.0',
                                code: '1',
                                display: 'Schule/College abschlie\u00dfen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-wish',
                                version: '1.0',
                                code: '2',
                                display: 'einen Beruf lernen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-wish',
                                version: '1.0',
                                code: '3',
                                display: 'eigenes Geld verdienen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-wish',
                                version: '1.0',
                                code: '4',
                                display: 'unabh\u00e4ngiger werden'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-wish',
                                version: '1.0',
                                code: '5',
                                display: 'Deutsch lernen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-wish',
                                version: '1.0',
                                code: '6',
                                display: 'in Nepal arbeiten'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-wish',
                                version: '1.0',
                                code: '7',
                                display: 'in Deutschland lernen/arbeiten'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-wish',
                                version: '1.0',
                                code: '8',
                                display: 'ich bin noch unsicher'
                            }
                        }
                    ]
                },
                {
                    linkId: 'interestPath',
                    text: 'Welcher Weg interessiert dich im Moment am meisten?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path',
                                version: '1.0',
                                code: '1',
                                display: 'Ausbildung in Deutschland'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path',
                                version: '1.0',
                                code: '2',
                                display: 'Arbeit in Deutschland'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path',
                                version: '1.0',
                                code: '3',
                                display: 'Studium/Auslandssemester'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path',
                                version: '1.0',
                                code: '4',
                                display: 'Job im Tourismus in Nepal'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path',
                                version: '1.0',
                                code: '5',
                                display: 'Berufsausbildung in Nepal'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path',
                                version: '1.0',
                                code: '6',
                                display: 'erst Orientierung'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path',
                                version: '1.0',
                                code: '7',
                                display: 'ich wei\u00df es noch nicht'
                            }
                        }
                    ]
                },
                {
                    linkId: 'interestAreas',
                    text: 'In welchen Bereichen hast du Interesse?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-areas',
                                version: '1.0',
                                code: '1',
                                display: 'Gastronomie/Hotel'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-areas',
                                version: '1.0',
                                code: '2',
                                display: 'Tourismus'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-areas',
                                version: '1.0',
                                code: '3',
                                display: 'Pflege/Betreuung'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-areas',
                                version: '1.0',
                                code: '4',
                                display: 'B\u00fcro/Organisation'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-areas',
                                version: '1.0',
                                code: '5',
                                display: 'Verkauf'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-areas',
                                version: '1.0',
                                code: '6',
                                display: 'Beauty/Kosmetik'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-areas',
                                version: '1.0',
                                code: '7',
                                display: 'Schneiderei/Handarbeit'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-areas',
                                version: '1.0',
                                code: '8',
                                display: 'Kinderbetreuung'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-areas',
                                version: '1.0',
                                code: '9',
                                display: 'IT/Computer'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-areas',
                                version: '1.0',
                                code: '10',
                                display: 'anderes'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-areas',
                                version: '1.0',
                                code: '11',
                                display: 'ich bin offen'
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanyInterest',
                    text: 'K\u00f6nntest du dir grunds\u00e4tzlich vorstellen, sp\u00e4ter f\u00fcr Ausbildung oder Arbeit nach Deutschland zu gehen?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germany-interest',
                                version: '1.0',
                                code: '1',
                                display: 'ja'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germany-interest',
                                version: '1.0',
                                code: '2',
                                display: 'vielleicht'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germany-interest',
                                version: '1.0',
                                code: '3',
                                display: 'eher nein'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germany-interest',
                                version: '1.0',
                                code: '4',
                                display: 'ich wei\u00df noch zu wenig dar\u00fcber'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 7: Unterst\u00fctzung & Kontakt
        // ──────────────────────────────────────────────
        {
            linkId: 'support',
            text: 'Unterst\u00fctzung & Kontakt',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'readiness',
                    text: 'Wie bereit f\u00fchlst du dich gerade f\u00fcr einen n\u00e4chsten Schritt?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/readiness',
                                version: '1.0',
                                code: '1',
                                display: 'sehr bereit'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/readiness',
                                version: '1.0',
                                code: '2',
                                display: 'eher bereit'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/readiness',
                                version: '1.0',
                                code: '3',
                                display: 'unsicher'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/readiness',
                                version: '1.0',
                                code: '4',
                                display: 'gerade noch nicht bereit'
                            }
                        }
                    ]
                },
                {
                    linkId: 'helpfulSupport',
                    text: 'Welche Unterst\u00fctzung w\u00e4re f\u00fcr dich im Moment am hilfreichsten?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support',
                                version: '1.0',
                                code: '1',
                                display: 'Orientierungsgespr\u00e4ch'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support',
                                version: '1.0',
                                code: '2',
                                display: 'Hilfe beim Deutschlernen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support',
                                version: '1.0',
                                code: '3',
                                display: 'Lernplan'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support',
                                version: '1.0',
                                code: '4',
                                display: 'Unterst\u00fctzung bei Dokumenten'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support',
                                version: '1.0',
                                code: '5',
                                display: 'Motivation und Begleitung'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support',
                                version: '1.0',
                                code: '6',
                                display: 'Informationen f\u00fcr meine Familie'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support',
                                version: '1.0',
                                code: '7',
                                display: 'Hilfe bei Bildungskosten'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support',
                                version: '1.0',
                                code: '8',
                                display: 'Hilfe bei Wohnen oder Grundversorgung'
                            }
                        }
                    ]
                },
                {
                    linkId: 'contactWish',
                    text: 'M\u00f6chtest du, dass Hey Freeda dich nach diesem Fragebogen kontaktiert?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-wish',
                                version: '1.0',
                                code: 'yes',
                                display: 'ja'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-wish',
                                version: '1.0',
                                code: 'maybe',
                                display: 'vielleicht sp\u00e4ter'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-wish',
                                version: '1.0',
                                code: 'no',
                                display: 'nein'
                            }
                        }
                    ]
                },
                {
                    linkId: 'contactMethod',
                    text: 'Wie k\u00f6nnen wir dich am besten erreichen?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {
                            question: 'contactWish',
                            operator: '=',
                            answerCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-wish',
                                code: 'yes'
                            }
                        },
                        {
                            question: 'contactWish',
                            operator: '=',
                            answerCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-wish',
                                code: 'maybe'
                            }
                        }
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method',
                                version: '1.0',
                                code: '1',
                                display: 'WhatsApp'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method',
                                version: '1.0',
                                code: '2',
                                display: 'Telefon'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method',
                                version: '1.0',
                                code: '3',
                                display: 'E-Mail'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method',
                                version: '1.0',
                                code: '4',
                                display: '\u00fcber eine Ansprechpartnerin'
                            }
                        }
                    ]
                },
                {
                    linkId: 'contactDetails',
                    text: 'Deine Kontaktdaten',
                    type: 'string',
                    disabledDisplay: 'protected'
                }
            ]
        }
    ]
};
