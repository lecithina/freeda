import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export const NeedsAssessmentDE: Questionnaire = {
    resourceType: 'Questionnaire',
    language: 'de',
    url: 'http://heyfreeda.com/questionnaire/needs-assessment/de',
    name: 'NeedsAssessment',
    title: 'Fragebogen f\u00fcr Nepal \u2013 Stufe 1',
    status: 'active',
    item: [
        // ──────────────────────────────────────────────
        // Disclaimer
        // ──────────────────────────────────────────────
        {
            linkId: 'disclaimer',
            text: 'Bevor du startest',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'disclaimerText',
                    text: 'Deine Antworten helfen uns, besser zu verstehen, was du gerade brauchst und wie Hey Freeda dich unterst\u00fctzen kann. Alles, was du mit uns teilst, behandeln wir vertraulich und geben es nicht an Dritte weiter. Du musst nicht jede Frage beantworten, wenn dir etwas zu pers\u00f6nlich ist. Deine Kontaktdaten fragen wir erst am Ende ab.\n\nDanke, dass du dir die Zeit nimmst. \uD83D\uDE4F',
                    type: 'display',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Abschnitt 1: Aktuelle Situation
        // ──────────────────────────────────────────────
        {
            linkId: 'currentSituation',
            text: 'Aktuelle Situation',
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
                                display: '\u00fcber 31'
                            }
                        }
                    ]
                },
                {
                    // Einzelauswahl mit Sonstiges-Freitext → open-choice
                    linkId: 'situation',
                    text: 'Was beschreibt deine aktuelle Situation am besten?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation',
                                version: '1.0',
                                code: '1',
                                display: 'Ich gehe noch zur Schule.'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation',
                                version: '1.0',
                                code: '2',
                                display: 'Ich bin im College.'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation',
                                version: '1.0',
                                code: '3',
                                display: 'Ich mache einen Kurs oder eine Ausbildung.'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation',
                                version: '1.0',
                                code: '4',
                                display: 'Ich arbeite gerade.'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation',
                                version: '1.0',
                                code: '5',
                                display: 'Ich bin zu Hause und wei\u00df noch nicht, wie es weitergeht.'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation',
                                version: '1.0',
                                code: '6',
                                display: 'Ich lebe in einem Heim, Hostel oder einer WG.'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation',
                                version: '1.0',
                                code: 'other',
                                display: 'Sonstiges'
                            }
                        }
                    ]
                },
                {
                    // Einzelauswahl mit Sonstiges-Freitext → open-choice
                    linkId: 'livingSituation',
                    text: 'Wo lebst du gerade?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '1',
                                display: 'bei meiner Familie'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '2',
                                display: 'bei Verwandten'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '3',
                                display: 'im Heim'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '4',
                                display: 'im Hostel'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '5',
                                display: 'in einer WG'
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
                                display: 'mein Wohnen ist unsicher'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: '8',
                                display: 'm\u00f6chte ich sp\u00e4ter sagen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation',
                                version: '1.0',
                                code: 'other',
                                display: 'Sonstiges'
                            }
                        }
                    ]
                },
                {
                    linkId: 'orgSupport',
                    text: 'Wirst du aktuell von einer Organisation unterst\u00fctzt?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support',
                                version: '1.0',
                                code: 'yes',
                                display: 'ja'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support',
                                version: '1.0',
                                code: 'no',
                                display: 'nein'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support',
                                version: '1.0',
                                code: 'unsure',
                                display: 'ich bin mir nicht sicher'
                            }
                        }
                    ]
                },
                {
                    linkId: 'orgName',
                    text: 'Von welcher Organisation?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {
                            question: 'orgSupport',
                            operator: '=',
                            answerCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support',
                                code: 'yes'
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
                                display: 'Ich habe schon einen klaren Plan.'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook',
                                version: '1.0',
                                code: '2',
                                display: 'Ich habe ein paar Ideen, bin aber noch unsicher.'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook',
                                version: '1.0',
                                code: '3',
                                display: 'Ich wei\u00df noch nicht, was m\u00f6glich ist.'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook',
                                version: '1.0',
                                code: '4',
                                display: 'Ich habe das Gef\u00fchl, dass ich kaum Perspektiven habe.'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Abschnitt 2: Grundbed\u00fcrfnisse und Stabilit\u00e4t
        // ──────────────────────────────────────────────
        {
            linkId: 'basicNeeds',
            text: 'Grundbed\u00fcrfnisse und Stabilit\u00e4t',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    // Mehrfachauswahl – „nichts davon" sollte exklusiv sein (nicht im Framework unterst\u00fctzt)
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
                                display: 'Hygieneprodukte oder Medikamente'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '2',
                                display: 'Kleidung oder Schuhe'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '3',
                                display: 'Essen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '4',
                                display: 'Zugang zu sauberem Trinkwasser'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '5',
                                display: 'Geld f\u00fcr Arztbesuche oder Untersuchungen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '6',
                                display: 'sichere Unterkunft'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: '7',
                                display: 'Transportkosten'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: 'none',
                                display: 'nichts davon'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items',
                                version: '1.0',
                                code: 'other',
                                display: 'Sonstiges'
                            }
                        }
                    ]
                },
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
                    linkId: 'needsResolutionFirst',
                    text: 'Gibt es etwas, das zuerst gel\u00f6st werden muss, bevor du an Schule, Deutsch oder Zukunft denken kannst?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first',
                                version: '1.0',
                                code: 'yes',
                                display: 'ja'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first',
                                version: '1.0',
                                code: 'maybe',
                                display: 'vielleicht'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first',
                                version: '1.0',
                                code: 'no',
                                display: 'nein'
                            }
                        }
                    ]
                },
                {
                    // Nur anzeigen wenn needsResolutionFirst = ja oder vielleicht
                    linkId: 'urgentNeed',
                    text: 'Was ist gerade am dringendsten?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {
                            question: 'needsResolutionFirst',
                            operator: '=',
                            answerCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first',
                                code: 'yes'
                            }
                        },
                        {
                            question: 'needsResolutionFirst',
                            operator: '=',
                            answerCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first',
                                code: 'maybe'
                            }
                        }
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgent-need',
                                version: '1.0',
                                code: '1',
                                display: 'Hygiene / Periode'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgent-need',
                                version: '1.0',
                                code: '2',
                                display: 'Gesundheit / Arztkosten'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgent-need',
                                version: '1.0',
                                code: '3',
                                display: 'Wohnen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgent-need',
                                version: '1.0',
                                code: '4',
                                display: 'Kleidung / Schuhe'
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
                                code: 'other-open',
                                display: 'Sonstiges'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Abschnitt 3: Bildung
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
                    linkId: 'educationConcern',
                    text: 'Hast du Sorge, deine Bildung nicht fortsetzen zu k\u00f6nnen?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern',
                                version: '1.0',
                                code: '1',
                                display: 'ja'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern',
                                version: '1.0',
                                code: '2',
                                display: 'vielleicht'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern',
                                version: '1.0',
                                code: '3',
                                display: 'nein'
                            }
                        }
                    ]
                },
                {
                    // Mehrfachauswahl – „nichts davon" sollte exklusiv sein (nicht im Framework unterst\u00fctzt)
                    linkId: 'educationBarriers',
                    text: 'Was macht Schule, College oder Ausbildung f\u00fcr dich gerade schwierig?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers',
                                version: '1.0',
                                code: '1',
                                display: 'Geb\u00fchren'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers',
                                version: '1.0',
                                code: '2',
                                display: 'Lernmaterialien'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers',
                                version: '1.0',
                                code: '3',
                                display: 'Uniform oder Kleidung'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers',
                                version: '1.0',
                                code: '4',
                                display: 'Transport'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers',
                                version: '1.0',
                                code: '5',
                                display: 'Wohnen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers',
                                version: '1.0',
                                code: '6',
                                display: 'famili\u00e4re Verpflichtungen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers',
                                version: '1.0',
                                code: '7',
                                display: 'Gesundheit'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers',
                                version: '1.0',
                                code: '8',
                                display: 'fehlende Motivation'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers',
                                version: '1.0',
                                code: '9',
                                display: 'fehlende Informationen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers',
                                version: '1.0',
                                code: 'none',
                                display: 'nichts davon'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers',
                                version: '1.0',
                                code: 'other',
                                display: 'Sonstiges'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Abschnitt 4: Deutschlernen
        // ──────────────────────────────────────────────
        {
            linkId: 'german',
            text: 'Deutschlernen',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'languageInterest',
                    text: 'Hast du Interesse, eine neue Sprache zu lernen?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-interest',
                                version: '1.0',
                                code: 'german',
                                display: 'ja, Deutsch'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-interest',
                                version: '1.0',
                                code: 'english',
                                display: 'ja, Englisch'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-interest',
                                version: '1.0',
                                code: 'other',
                                display: 'ja, eine andere Sprache'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-interest',
                                version: '1.0',
                                code: 'no',
                                display: 'nein, im Moment nicht'
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanHint',
                    text: 'Hinweis: Hey Freeda kann dich beim Deutschlernen unterst\u00fctzen.',
                    type: 'display',
                    disabledDisplay: 'protected'
                },
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
                    // Mehrfachauswahl mit Sonstiges
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
                                display: 'Studium / Auslandssemester'
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
                                display: 'ich m\u00f6chte mir Optionen offenhalten'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-motivation',
                                version: '1.0',
                                code: '7',
                                display: 'ich wei\u00df es noch nicht'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-motivation',
                                version: '1.0',
                                code: '8',
                                display: 'ich m\u00f6chte im Moment kein Deutsch lernen'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-motivation',
                                version: '1.0',
                                code: 'other-open',
                                display: 'Sonstiges'
                            }
                        }
                    ]
                },
                {
                    linkId: 'hasSmartphone',
                    text: 'Hast du ein Smartphone, mit dem du lernen k\u00f6nntest?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/has-smartphone',
                                version: '1.0',
                                code: '1',
                                display: 'ja'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/has-smartphone',
                                version: '1.0',
                                code: '2',
                                display: 'teilweise'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/has-smartphone',
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
        // Abschnitt 5: Beruf und Zukunft
        // ──────────────────────────────────────────────
        {
            linkId: 'career',
            text: 'Beruf und Zukunft',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    // Einzelauswahl mit Sonstiges-Freitext → open-choice
                    linkId: 'interestPath',
                    text: 'Welcher Weg interessiert dich im Moment am meisten?',
                    type: 'open-choice',
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
                                display: 'Studium / Auslandssemester'
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
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path',
                                version: '1.0',
                                code: 'other',
                                display: 'Sonstiges'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Abschnitt 6: Unterst\u00fctzung
        // ──────────────────────────────────────────────
        {
            linkId: 'support',
            text: 'Unterst\u00fctzung',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'personalBurden',
                    text: 'Gibt es etwas, das dich gerade stark belastet, wor\u00fcber du gerne mit jemandem sprechen w\u00fcrdest?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden',
                                version: '1.0',
                                code: 'yes',
                                display: 'ja'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden',
                                version: '1.0',
                                code: 'maybe',
                                display: 'vielleicht sp\u00e4ter'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden',
                                version: '1.0',
                                code: 'no',
                                display: 'nein'
                            }
                        }
                    ]
                },
                {
                    // Mehrfachauswahl, max. 3 Antworten (Limit nicht im Framework unterst\u00fctzt)
                    linkId: 'helpfulSupport',
                    text: 'Welche Unterst\u00fctzung w\u00e4re f\u00fcr dich im Moment am hilfreichsten?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    maxLength: 3,
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
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support',
                                version: '1.0',
                                code: 'other-open',
                                display: 'Sonstiges'
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
