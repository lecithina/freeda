import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export const InternalAssessmentDE: Questionnaire = {
    resourceType: 'Questionnaire',
    language: 'de',
    url: 'http://heyfreeda.com/questionnaire/internal-assessment/de',
    name: 'InternalAssessment',
    title: 'Interne Bewertung \u2013 Stufe 2',
    status: 'active',
    item: [
        // ══════════════════════════════════════════════
        // Gruppe 1: Grunddaten
        // ══════════════════════════════════════════════
        {
            linkId: 'grunddaten',
            text: 'Grunddaten',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'participantName',
                    text: 'Name der Teilnehmerin',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'householdCode',
                    text: 'Haushaltscode-Nr.',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'stufe1Reference',
                    text: 'Referenz zum Stufe-1-Fragebogen (Datum oder Kennung)',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'wardNumber',
                    text: 'Ward-Nr.',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'toleSiedlung',
                    text: 'Tole / Siedlung',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'palikaKommune',
                    text: 'Palika / Kommune',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'distrikt',
                    text: 'Distrikt',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'householdHead',
                    text: 'Name des Haushaltsvorstands',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'contactNumber',
                    text: 'Kontakt-Nr.',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'assessmentDate',
                    text: 'Datum der Erhebung',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'assessorName',
                    text: 'Name der Erhebungsperson',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'membersChildren',
                    text: 'Kinder (0\u201317 Jahre)',
                    type: 'integer',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'membersYouth',
                    text: 'Jugendliche (18\u201324 Jahre)',
                    type: 'integer',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'membersAdults',
                    text: 'Erwachsene (25\u201359 Jahre)',
                    type: 'integer',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'membersElderly',
                    text: 'Seniorinnen und Senioren (60+)',
                    type: 'integer',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Gruppe 2: Wirtschaftliche Lage
        // ══════════════════════════════════════════════
        {
            linkId: 'wirtschaftlicheLage',
            text: 'Wirtschaftliche Lage',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'incomeSource',
                    text: 'Haupteinkommensquelle',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '1', display: 'Landwirtschaft'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '2', display: 'Tagelohnarbeit'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '3', display: 'Arbeit im Ausland'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '4', display: 'Handel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '5', display: 'Dienstleistung'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: 'other', display: 'Sonstiges'}}
                    ]
                },
                {
                    linkId: 'monthlyIncome',
                    text: 'Durchschnittliches Einkommen pro Monat/Jahr (Rs.)',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'landOwnership',
                    text: 'Landbesitz',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/land-ownership', version: '1.0', code: '1', display: 'Eigenbesitz'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/land-ownership', version: '1.0', code: '2', display: 'Gemietet oder gepachtet'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/land-ownership', version: '1.0', code: '3', display: 'Kein Landbesitz'}}
                    ]
                },
                {
                    linkId: 'foodSecurity',
                    text: 'Ern\u00e4hrungssicherheit',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/food-security', version: '1.0', code: '1', display: 'Reicht das ganze Jahr'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/food-security', version: '1.0', code: '2', display: '6\u20139 Monate'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/food-security', version: '1.0', code: '3', display: 'Weniger als 6 Monate'}}
                    ]
                },
                {
                    linkId: 'socialBenefits',
                    text: 'Sozialleistungen / Sozialhilfe',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-benefits', version: '1.0', code: '1', display: 'Erh\u00e4lt Leistungen'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-benefits', version: '1.0', code: '2', display: 'Erh\u00e4lt keine Leistungen'}}
                    ]
                },
                {
                    linkId: 'mainExpenses',
                    text: 'Hauptausgaben des Haushalts (Lebensmittel, Bildung, Gesundheit, Miete, etc.)',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'monthlyExpenses',
                    text: 'Durchschnittliche Ausgaben pro Monat/Jahr (Rs.)',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'riskWirtschaft',
                    text: 'Wirtschaftliches Risikoniveau',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'niedrig'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'mittel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'hoch'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Gruppe 3: Soziale Lage
        // ══════════════════════════════════════════════
        {
            linkId: 'sozialeLage',
            text: 'Soziale Lage',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'casteEthnicity',
                    text: 'Kaste / Ethnie',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'educationStatus',
                    text: 'Bildungsstatus (Kinder/Jugendliche)',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/education-status', version: '1.0', code: '1', display: 'Besucht Schule oder Ausbildung'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/education-status', version: '1.0', code: '2', display: 'Au\u00dferhalb von Schule oder Ausbildung'}}
                    ]
                },
                {
                    linkId: 'schoolDropout',
                    text: 'Schulabbruch',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/school-dropout', version: '1.0', code: 'yes', display: 'Ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/school-dropout', version: '1.0', code: 'no', display: 'Nein'}}
                    ]
                },
                {
                    linkId: 'schoolDropoutReason',
                    text: 'Falls ja: Warum?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'schoolDropout', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/school-dropout', code: 'yes'}}]
                },
                {
                    linkId: 'disability',
                    text: 'Behinderung',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability', version: '1.0', code: 'yes', display: 'Ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability', version: '1.0', code: 'no', display: 'Nein'}}
                    ]
                },
                {
                    linkId: 'disabilityType',
                    text: 'Falls ja: Welche Art von Behinderung?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'disability', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability', code: 'yes'}}]
                },
                {
                    linkId: 'disabilityCard',
                    text: 'Behindertenausweis / Disability Card',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'disability', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability', code: 'yes'}}],
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability-card', version: '1.0', code: '1', display: 'Vorhanden'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability-card', version: '1.0', code: '2', display: 'Nicht vorhanden'}}
                    ]
                },
                {
                    linkId: 'childMarriageRisk',
                    text: 'Risiko von Kinderehe',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/child-marriage-risk', version: '1.0', code: 'hoch', display: 'Hoch'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/child-marriage-risk', version: '1.0', code: 'mittel', display: 'Mittel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/child-marriage-risk', version: '1.0', code: 'niedrig', display: 'Niedrig'}}
                    ]
                },
                {
                    linkId: 'genderViolenceRisk',
                    text: 'Risiko geschlechtsspezifischer Gewalt',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/gender-violence-risk', version: '1.0', code: 'yes', display: 'Ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/gender-violence-risk', version: '1.0', code: 'no', display: 'Nein'}}
                    ]
                },
                {
                    linkId: 'genderViolenceForm',
                    text: 'Falls ja: Welche Form?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'genderViolenceRisk', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/gender-violence-risk', code: 'yes'}}]
                },
                {
                    linkId: 'socialParticipation',
                    text: 'Soziale Teilhabe',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-participation', version: '1.0', code: '1', display: 'Aktive Beteiligung'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-participation', version: '1.0', code: '2', display: 'Eingeschr\u00e4nkt'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-participation', version: '1.0', code: '3', display: 'Ausgeschlossen'}}
                    ]
                },
                {
                    linkId: 'riskSozial',
                    text: 'Soziales Risikoniveau',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'niedrig'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'mittel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'hoch'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Gruppe 4: Politische / administrative Lage
        // ══════════════════════════════════════════════
        {
            linkId: 'politischeLage',
            text: 'Politische / administrative Lage',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'voterRegistration',
                    text: 'Eintrag im W\u00e4hlerverzeichnis',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/voter-registration', version: '1.0', code: 'yes', display: 'Ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/voter-registration', version: '1.0', code: 'no', display: 'Nein'}}
                    ]
                },
                {
                    linkId: 'voterNoReason',
                    text: 'Falls nein: Warum?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'voterRegistration', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/voter-registration', code: 'no'}}]
                },
                {
                    linkId: 'citizenshipStatus',
                    text: 'Staatsb\u00fcrgerschaft / Geburtsregistrierung',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/citizenship-status', version: '1.0', code: '1', display: 'F\u00fcr alle vorhanden'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/citizenship-status', version: '1.0', code: '2', display: 'F\u00fcr einige nicht vorhanden'}}
                    ]
                },
                {
                    linkId: 'accessStateServices',
                    text: 'Zugang zu staatlichen Leistungen / Diensten',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/access-state-services', version: '1.0', code: '1', display: 'Leicht'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/access-state-services', version: '1.0', code: '2', display: 'Schwierig'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/access-state-services', version: '1.0', code: '3', display: 'Kein Zugang'}}
                    ]
                },
                {
                    linkId: 'riskPolitisch',
                    text: 'Politisches Risikoniveau',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'niedrig'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'mittel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'hoch'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Gruppe 5: Famili\u00e4re Situation
        // ══════════════════════════════════════════════
        {
            linkId: 'familiaereSituation',
            text: 'Famili\u00e4re Situation',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'familyStructure',
                    text: 'Familienstruktur',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-structure', version: '1.0', code: '1', display: 'Gro\u00dffamilie oder gemeinsamer Haushalt'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-structure', version: '1.0', code: '2', display: 'Kernfamilie'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-structure', version: '1.0', code: '3', display: 'Alleinerziehend'}}
                    ]
                },
                {
                    linkId: 'familyRelationships',
                    text: 'Famili\u00e4re Beziehungen',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-relationships', version: '1.0', code: '1', display: 'Harmonisch'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-relationships', version: '1.0', code: '2', display: 'Normal'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-relationships', version: '1.0', code: '3', display: 'Konfliktbelastet'}}
                    ]
                },
                {
                    linkId: 'domesticViolenceNote',
                    text: 'Hinweis: Die folgenden Fragen betreffen sensible Themen. Bitte beachten Sie die Schutzrichtlinien.',
                    type: 'display',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'domesticViolence',
                    text: 'H\u00e4usliche Gewalt',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/domestic-violence', version: '1.0', code: 'none', display: 'Keine Hinweise'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/domestic-violence', version: '1.0', code: 'suspicion', display: 'Verdacht'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/domestic-violence', version: '1.0', code: 'confirmed', display: 'Best\u00e4tigt'}}
                    ]
                },
                {
                    linkId: 'domesticViolenceForm',
                    text: 'Falls vorhanden: Welche Form?',
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
                    text: 'Elterliche F\u00fcrsorge',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/parental-care', version: '1.0', code: '1', display: 'Gut'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/parental-care', version: '1.0', code: '2', display: 'Mittel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/parental-care', version: '1.0', code: '3', display: 'Schwach'}}
                    ]
                },
                {
                    linkId: 'laborMigration',
                    text: 'Auslandsbesch\u00e4ftigung / Arbeitsmigration',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/labor-migration', version: '1.0', code: 'yes', display: 'Ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/labor-migration', version: '1.0', code: 'no', display: 'Nein'}}
                    ]
                },
                {
                    linkId: 'laborMigrationWhere',
                    text: 'Falls ja: Wo?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'laborMigration', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/labor-migration', code: 'yes'}}]
                },
                {
                    linkId: 'riskFamilie',
                    text: 'Famili\u00e4res Risikoniveau',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'niedrig'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'mittel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'hoch'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Gruppe 6: Psychosoziale Situation
        // ══════════════════════════════════════════════
        {
            linkId: 'psychosozialeSituation',
            text: 'Psychosoziale Situation',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'selfConfidenceChildren',
                    text: 'Selbstvertrauen \u2013 Kinder',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gut', display: 'Gut'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gering', display: 'Gering'}}
                    ]
                },
                {
                    linkId: 'selfConfidenceYouth',
                    text: 'Selbstvertrauen \u2013 Jugendliche',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gut', display: 'Gut'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gering', display: 'Gering'}}
                    ]
                },
                {
                    linkId: 'selfConfidenceCaregivers',
                    text: 'Selbstvertrauen \u2013 Erziehungsberechtigte',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gut', display: 'Gut'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gering', display: 'Gering'}}
                    ]
                },
                {
                    linkId: 'stressChildren',
                    text: 'Stress / Sorgen \u2013 Kinder',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'keine', display: 'Keine'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'mittel', display: 'Mittel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'hoch', display: 'Hoch'}}
                    ]
                },
                {
                    linkId: 'stressYouth',
                    text: 'Stress / Sorgen \u2013 Jugendliche',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'keine', display: 'Keine'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'mittel', display: 'Mittel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'hoch', display: 'Hoch'}}
                    ]
                },
                {
                    linkId: 'stressCaregivers',
                    text: 'Stress / Sorgen \u2013 Erziehungsberechtigte',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'keine', display: 'Keine'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'mittel', display: 'Mittel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'hoch', display: 'Hoch'}}
                    ]
                },
                {
                    linkId: 'socialBehaviorChildren',
                    text: 'Soziales Verhalten \u2013 Kinder',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'positiv', display: 'Positiv'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'negativ', display: 'Negativ'}}
                    ]
                },
                {
                    linkId: 'socialBehaviorYouth',
                    text: 'Soziales Verhalten \u2013 Jugendliche',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'positiv', display: 'Positiv'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'negativ', display: 'Negativ'}}
                    ]
                },
                {
                    linkId: 'socialBehaviorCaregivers',
                    text: 'Soziales Verhalten \u2013 Erziehungsberechtigte',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'positiv', display: 'Positiv'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'negativ', display: 'Negativ'}}
                    ]
                },
                {
                    linkId: 'counselingChildren',
                    text: 'Beratungsbedarf \u2013 Kinder',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'yes', display: 'Ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'no', display: 'Nein'}}
                    ]
                },
                {
                    linkId: 'counselingYouth',
                    text: 'Beratungsbedarf \u2013 Jugendliche',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'yes', display: 'Ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'no', display: 'Nein'}}
                    ]
                },
                {
                    linkId: 'counselingCaregivers',
                    text: 'Beratungsbedarf \u2013 Erziehungsberechtigte',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'yes', display: 'Ja'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'no', display: 'Nein'}}
                    ]
                },
                {
                    linkId: 'riskPsychosozial',
                    text: 'Psychosoziales Risikoniveau',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'niedrig'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'mittel'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'hoch'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Gruppe 7: Gesamtklassifikation des Risikos
        // ══════════════════════════════════════════════
        {
            linkId: 'gesamtklassifikation',
            text: 'Gesamtklassifikation des Risikos',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'riskDescriptionDisplay',
                    text: 'Niedriges Risiko: Grundbed\u00fcrfnisse erf\u00fcllt, gute soziale Teilhabe. Mittleres Risiko: Teilweise fehlender Zugang zu Diensten, wirtschaftlicher oder sozialer Druck. Hohes Risiko: Mehrdimensionale Entbehrung, Gewalt, Kinderehe oder schwere wirtschaftliche Krise.',
                    type: 'display',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'overallRisk',
                    text: 'Endg\u00fcltige Klassifikation',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/overall-risk', version: '1.0', code: 'niedrig', display: 'Niedriges Risiko'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/overall-risk', version: '1.0', code: 'mittel', display: 'Mittleres Risiko'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/overall-risk', version: '1.0', code: 'hoch', display: 'Hohes Risiko'}}
                    ]
                },
                {
                    linkId: 'overallRiskNotes',
                    text: 'Begr\u00fcndung',
                    type: 'string',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Gruppe 8: Schlussfolgerung
        // ══════════════════════════════════════════════
        {
            linkId: 'schlussfolgerung',
            text: 'Schlussfolgerung',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'conclusionText',
                    text: 'Zusammenfassende Einsch\u00e4tzung',
                    type: 'string',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ══════════════════════════════════════════════
        // Gruppe 9: Empfehlungen und Ma\u00dfnahmenplan
        // ══════════════════════════════════════════════
        {
            linkId: 'empfehlungen',
            text: 'Empfehlungen und Ma\u00dfnahmenplan',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'immediateSupport',
                    text: 'Unmittelbar erforderliche Unterst\u00fctzung',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'longTermSupport',
                    text: 'Langfristige Unterst\u00fctzung',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'recommendedOrg',
                    text: 'Empfohlene Organisation / Dienstleistung',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'followUpDate',
                    text: 'Follow-up-Datum',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'assessorSignature',
                    text: 'Name der empfehlenden Person',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'assessorRole',
                    text: 'Funktion',
                    type: 'string',
                    disabledDisplay: 'protected'
                }
            ]
        }
    ]
};
