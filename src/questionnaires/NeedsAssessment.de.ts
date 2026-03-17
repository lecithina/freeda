import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export const NeedsAssessmentDE: Questionnaire = {
    resourceType: 'Questionnaire',
    language: 'de',
    url: 'http://heyfreeda.com/questionnaire/needs-assessment/de',
    name: 'NeedsAssessment',
    title: 'Fragebogen f\u00fcr Nepal \u2013 Stufe 1',
    status: 'active',
    item: [
        // ══════════════════════════════════════════════
        // Disclaimer
        // ══════════════════════════════════════════════
        {
            linkId: 'disclaimer',
            text: 'Bevor du startest',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'disclaimerText',
                    text: 'Dieser Fragebogen hilft uns, deine Situation besser zu verstehen und zu schauen, welche Unterst\u00fctzung im Moment zu dir passen k\u00f6nnte. Du entscheidest selbst, welche Fragen du beantworten m\u00f6chtest. Alles ist freiwillig und wird vertraulich behandelt. Kontaktdaten musst du nur angeben, wenn du das m\u00f6chtest; wir fragen sie erst am Ende. Fragen, die du im Moment nicht beantworten m\u00f6chtest, kannst du einfach \u00fcberspringen. \uD83C\uDF38',
                    type: 'display',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Abschnitt 1: Aktuelle Situation
        // ══════════════════════════════════════════════
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
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '1', display: 'unter 16'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '2', display: '16\u201318'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '3', display: '19\u201321'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '4', display: '22\u201325'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '5', display: '26\u201330'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '6', display: '31 oder \u00e4lter'}}
                    ]
                },
                {
                    linkId: 'situation',
                    text: 'Was beschreibt deine aktuelle Situation im Moment am besten?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '1', display: 'ich gehe zur Schule'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '2', display: 'ich bin im College'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '3', display: 'ich mache einen Kurs oder eine Ausbildung'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '4', display: 'ich arbeite'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '5', display: 'ich bin zu Hause und unsicher, wie es weitergeht'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '6', display: 'ich lebe im Heim'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '7', display: 'ich lebe im Hostel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '8', display: 'ich lebe in einer WG'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: 'other', display: 'Sonstiges'}}
                    ]
                },
                {
                    linkId: 'livingSituation',
                    text: 'Wo lebst du gerade?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '1', display: 'bei meiner Familie'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '2', display: 'bei Verwandten'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '3', display: 'im Heim'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '4', display: 'im Hostel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '5', display: 'in einer WG'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '6', display: 'allein'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '7', display: 'meine Wohnsituation ist unsicher'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '8', display: 'm\u00f6chte ich sp\u00e4ter sagen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: 'other', display: 'Sonstiges'}}
                    ]
                },
                {
                    linkId: 'orgSupport',
                    text: 'Wirst du im Moment von einer Organisation, Schule, Gruppe oder Beratungsstelle unterst\u00fctzt?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support', version: '1.0', code: 'yes', display: 'ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support', version: '1.0', code: 'no', display: 'nein'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support', version: '1.0', code: 'unsure', display: 'ich bin mir nicht sicher'}}
                    ]
                },
                {
                    linkId: 'orgName',
                    text: 'Wenn ja: Von welcher Organisation oder Stelle?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'orgSupport', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support', code: 'yes'}}]
                },
                {
                    linkId: 'futureOutlook',
                    text: 'Wie f\u00fchlst du dich gerade in Bezug auf deine Zukunft?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook', version: '1.0', code: '1', display: 'ich habe einen klaren Plan'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook', version: '1.0', code: '2', display: 'ich habe ein paar Ideen, bin aber unsicher'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook', version: '1.0', code: '3', display: 'ich wei\u00df nicht, was f\u00fcr mich m\u00f6glich ist'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook', version: '1.0', code: '4', display: 'ich sehe im Moment kaum Perspektiven'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Abschnitt 2: Grundbed\u00fcrfnisse und Stabilit\u00e4t
        // ══════════════════════════════════════════════
        {
            linkId: 'basicNeeds',
            text: 'Grundbed\u00fcrfnisse und Stabilit\u00e4t',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'missingItems',
                    text: 'Fehlt dir im Moment etwas, das du dringend f\u00fcr deinen Alltag brauchst?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '1', display: 'sichere Unterkunft'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '2', display: 'genug Essen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '3', display: 'sauberes Trinkwasser'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '4', display: 'Geld f\u00fcr Arztbesuche oder Medikamente'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '5', display: 'Kleidung oder Schuhe'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '6', display: 'Hygieneprodukte'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '7', display: 'Geld f\u00fcr Transport'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: 'none', display: 'nichts davon'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: 'other', display: 'Sonstiges'}}
                    ]
                },
                {
                    linkId: 'housingSafe',
                    text: 'Ist dein Wohnen im Moment sicher?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '1', display: 'ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '2', display: 'eher ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '3', display: 'eher nein'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '4', display: 'nein'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '5', display: 'ich bin mir nicht sicher'}}
                    ]
                },
                {
                    linkId: 'medicalAccess',
                    text: 'Hast du Zugang zu medizinischer Hilfe, wenn du sie brauchst?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access', version: '1.0', code: '1', display: 'ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access', version: '1.0', code: '2', display: 'teilweise'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access', version: '1.0', code: '3', display: 'nein'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access', version: '1.0', code: '4', display: 'ich wei\u00df nicht'}}
                    ]
                },
                {
                    linkId: 'needsResolutionFirst',
                    text: 'Gibt es im Moment etwas, das zuerst gel\u00f6st werden muss, bevor du an Schule, Lernen oder Zukunft denken kannst?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first', version: '1.0', code: 'yes', display: 'ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first', version: '1.0', code: 'maybe', display: 'vielleicht'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first', version: '1.0', code: 'no', display: 'nein'}}
                    ]
                },
                {
                    linkId: 'urgentIssue',
                    text: 'Wenn ja oder vielleicht: Was ist im Moment das Wichtigste?',
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
        // Abschnitt 3: Bildung
        // ══════════════════════════════════════════════
        {
            linkId: 'education',
            text: 'Bildung',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'currentlyStudying',
                    text: 'Bist du im Moment in Schule, College, Kurs oder Ausbildung?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', version: '1.0', code: 'yes', display: 'ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', version: '1.0', code: 'no', display: 'nein'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', version: '1.0', code: 'want-to', display: 'nicht im Moment, aber ich m\u00f6chte weitermachen'}}
                    ]
                },
                {
                    linkId: 'educationConcern',
                    text: 'Hast du Sorge, deine Bildung oder Ausbildung nicht fortsetzen zu k\u00f6nnen?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'currentlyStudying', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', code: 'yes'}},
                        {question: 'currentlyStudying', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', code: 'want-to'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', version: '1.0', code: 'yes', display: 'ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', version: '1.0', code: 'maybe', display: 'vielleicht'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', version: '1.0', code: 'no', display: 'nein'}}
                    ]
                },
                {
                    linkId: 'educationBarriers',
                    text: 'Was macht Schule, College, Kurs oder Ausbildung f\u00fcr dich im Moment schwierig?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'currentlyStudying', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', code: 'yes'}},
                        {question: 'educationConcern', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', code: 'yes'}},
                        {question: 'educationConcern', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', code: 'maybe'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '1', display: 'Geb\u00fchren oder Kosten'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '2', display: 'Lernmaterialien'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '3', display: 'Kleidung oder Uniform'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '4', display: 'Transport'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '5', display: 'Wohnen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '6', display: 'famili\u00e4re Verpflichtungen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '7', display: 'Gesundheit'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '8', display: 'Ersch\u00f6pfung oder \u00dcberforderung'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '9', display: 'fehlende Informationen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: 'none', display: 'nichts davon'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: 'other', display: 'Sonstiges'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Abschnitt 4: Richtung und M\u00f6glichkeiten
        // ══════════════════════════════════════════════
        {
            linkId: 'direction',
            text: 'Richtung und M\u00f6glichkeiten',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'generalDirection',
                    text: 'Wo m\u00f6chtest du im Moment eher nach M\u00f6glichkeiten schauen?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', version: '1.0', code: 'germany', display: 'eher in Deutschland'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', version: '1.0', code: 'nepal', display: 'eher in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', version: '1.0', code: 'both', display: 'in beiden Richtungen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', version: '1.0', code: 'unsure', display: 'ich wei\u00df es noch nicht'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Abschnitt 5: Sprache und Lernen
        // ══════════════════════════════════════════════
        {
            linkId: 'language',
            text: 'Sprache und Lernen',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'wantsLanguage',
                    text: 'M\u00f6chtest du im Moment eine Sprache lernen oder verbessern?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', version: '1.0', code: 'yes', display: 'ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', version: '1.0', code: 'maybe', display: 'vielleicht'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', version: '1.0', code: 'no', display: 'nein'}}
                    ]
                },
                {
                    linkId: 'whichLanguage',
                    text: 'Welche Sprache ist f\u00fcr dich im Moment am wichtigsten?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'yes'}},
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'maybe'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'german', display: 'Deutsch'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'english', display: 'Englisch'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'both', display: 'beides'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'other', display: 'eine andere Sprache'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'unsure', display: 'ich wei\u00df es noch nicht'}}
                    ]
                },
                {
                    linkId: 'languageMotivation',
                    text: 'Warum w\u00e4re das f\u00fcr dich im Moment wichtig?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'yes'}},
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'maybe'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '1', display: 'Ausbildung in Deutschland'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '2', display: 'Arbeit in Deutschland'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '3', display: 'Studium'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '4', display: 'Arbeit im Tourismus in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '5', display: 'bessere Chancen in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '6', display: 'pers\u00f6nliche Weiterentwicklung'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '7', display: 'ich m\u00f6chte mir M\u00f6glichkeiten offenhalten'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '8', display: 'ich wei\u00df es noch nicht genau'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: 'other-open', display: 'Sonstiges'}}
                    ]
                },
                {
                    linkId: 'germanLevel',
                    text: 'Wie ist dein aktuelles Deutschniveau?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'whichLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', code: 'german'}},
                        {question: 'whichLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', code: 'both'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '1', display: 'keine Kenntnisse'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '2', display: 'erste W\u00f6rter und S\u00e4tze'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '3', display: 'A1'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '4', display: 'A2'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '5', display: 'B1'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '6', display: 'B2 oder h\u00f6her'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '7', display: 'ich wei\u00df es nicht'}}
                    ]
                },
                {
                    linkId: 'englishLevel',
                    text: 'Wie ist dein aktuelles Englischniveau?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'whichLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', code: 'english'}},
                        {question: 'whichLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', code: 'both'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '1', display: 'Ich verstehe und spreche nur wenig Englisch'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '2', display: 'Ich kann einfache Gespr\u00e4che auf Englisch f\u00fchren'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '3', display: 'Ich kann mich im Alltag auf Englisch meistens gut verst\u00e4ndigen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '4', display: 'Ich kann auf Englisch auch \u00fcber Schule, Arbeit oder Pl\u00e4ne sprechen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '5', display: 'Ich bin mir nicht sicher'}}
                    ]
                },
                {
                    linkId: 'hasSmartphone',
                    text: 'Hast du ein Smartphone oder ein anderes Ger\u00e4t, mit dem du regelm\u00e4\u00dfig lernen k\u00f6nntest?',
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
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/has-smartphone', version: '1.0', code: '1', display: 'ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/has-smartphone', version: '1.0', code: '2', display: 'teilweise'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/has-smartphone', version: '1.0', code: '3', display: 'nein'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Abschnitt 6: Zukunft und n\u00e4chste Schritte
        // ══════════════════════════════════════════════
        {
            linkId: 'future',
            text: 'Zukunft und n\u00e4chste Schritte',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'interestPath',
                    text: 'Welcher Weg interessiert dich im Moment am meisten?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'training-de', display: 'Ausbildung in Deutschland'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'work-de', display: 'Arbeit in Deutschland'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'study', display: 'Studium'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'tourism-nepal', display: 'Arbeit im Tourismus in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'training-nepal', display: 'Berufsausbildung in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'other-nepal', display: 'eine andere Arbeitsperspektive in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'orientation', display: 'ich m\u00f6chte zuerst meine M\u00f6glichkeiten besser verstehen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'unsure', display: 'ich wei\u00df im Moment noch gar nicht, in welche Richtung ich m\u00f6chte'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'other', display: 'Sonstiges'}}
                    ]
                },
                {
                    linkId: 'nepalInterests',
                    text: 'Wenn du eher an M\u00f6glichkeiten in Nepal denkst: Was interessiert dich dort am meisten?',
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
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '1', display: 'Schule oder College fortsetzen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '2', display: 'Berufsausbildung in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '3', display: 'Arbeit im Tourismus'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '4', display: 'Englisch lernen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '5', display: 'digitale F\u00e4higkeiten lernen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '6', display: 'Unterst\u00fctzung bei Bewerbung oder Orientierung'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '7', display: 'ein eigenes kleines Einkommen aufbauen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '8', display: 'ich wei\u00df es noch nicht'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: 'other-open', display: 'Sonstiges'}}
                    ]
                },
                {
                    linkId: 'generalInterests',
                    text: 'Was kannst du dir grunds\u00e4tzlich gut vorstellen?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    maxLength: 3,
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '1', display: 'mit Menschen arbeiten'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '2', display: 'im Tourismus oder Service arbeiten'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '3', display: 'lernen und einen Abschluss machen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '4', display: 'praktisch arbeiten'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '5', display: 'organisiert oder im B\u00fcro arbeiten'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '6', display: 'etwas Kreatives'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '7', display: 'etwas Digitales lernen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '8', display: 'ich bin noch unsicher'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Abschnitt 7: Belastung und Unterst\u00fctzung
        // ══════════════════════════════════════════════
        {
            linkId: 'supportSection',
            text: 'Belastung und Unterst\u00fctzung',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'personalBurden',
                    text: 'Gibt es etwas, das dich im Moment stark belastet und wor\u00fcber du gerne mit jemandem sprechen w\u00fcrdest?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden', version: '1.0', code: 'yes', display: 'ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden', version: '1.0', code: 'maybe', display: 'vielleicht sp\u00e4ter'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden', version: '1.0', code: 'no', display: 'nein'}}
                    ]
                },
                {
                    linkId: 'helpfulSupport',
                    text: 'Welche Unterst\u00fctzung w\u00e4re f\u00fcr dich im Moment am hilfreichsten?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    maxLength: 3,
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '1', display: 'Orientierungsgespr\u00e4ch'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '2', display: 'Hilfe beim Deutschlernen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '3', display: 'Hilfe beim Englischlernen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '4', display: 'ein Lernplan'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '5', display: 'Unterst\u00fctzung bei Dokumenten'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '6', display: 'Motivation und Begleitung'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '7', display: 'Informationen f\u00fcr meine Familie oder Bezugspersonen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '8', display: 'Hilfe bei Bildungskosten'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '9', display: 'Hilfe bei Wohnen oder Grundversorgung'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '10', display: 'Unterst\u00fctzung f\u00fcr Ausbildung oder Arbeit in Nepal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: 'other-open', display: 'Sonstiges'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Abschnitt 8: Sicherer Kontakt
        // ══════════════════════════════════════════════
        {
            linkId: 'contact',
            text: 'Sicherer Kontakt',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'contactSafe',
                    text: 'Ist es f\u00fcr dich sicher, wenn wir dich direkt kontaktieren?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', version: '1.0', code: 'yes', display: 'ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', version: '1.0', code: 'org', display: 'nur \u00fcber eine Organisation oder Vertrauensperson'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', version: '1.0', code: 'no', display: 'im Moment lieber nicht'}}
                    ]
                },
                {
                    linkId: 'contactMethod',
                    text: 'Wie m\u00f6chtest du am liebsten kontaktiert werden?',
                    type: 'choice',
                    required: true,
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'contactSafe', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', code: 'yes'}},
                        {question: 'contactSafe', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', code: 'org'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: 'whatsapp', display: 'WhatsApp'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: 'viber', display: 'Viber'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: 'phone', display: 'Telefon'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: 'email', display: 'E-Mail'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: 'org', display: '\u00fcber eine Ansprechperson'}}
                    ]
                },
                {
                    linkId: 'contactPhone',
                    text: 'Deine Telefonnummer',
                    type: 'string',
                    required: true,
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'contactMethod', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', code: 'whatsapp'}},
                        {question: 'contactMethod', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', code: 'viber'}},
                        {question: 'contactMethod', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', code: 'phone'}}
                    ],
                    enableBehavior: 'any'
                },
                {
                    linkId: 'contactEmail',
                    text: 'Deine E-Mail-Adresse',
                    type: 'string',
                    required: true,
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'contactMethod', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', code: 'email'}}
                    ]
                },
                {
                    linkId: 'contactPerson',
                    text: 'Name der Ansprechperson und deren Telefonnummer oder E-Mail',
                    type: 'string',
                    required: true,
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'contactMethod', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', code: 'org'}}
                    ]
                }
            ]
        }
    ]
};
