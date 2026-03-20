import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export const InternalAssessmentNE: Questionnaire = {
    resourceType: 'Questionnaire',
    language: 'ne',
    url: 'http://heyfreeda.com/questionnaire/internal-assessment/ne',
    name: 'InternalAssessment',
    title: 'आन्तरिक मूल्याङ्कन – चरण २',
    status: 'active',
    item: [
        // ══════════════════════════════════════════════
        // समूह १: आधारभूत विवरण
        // ══════════════════════════════════════════════
        {
            linkId: 'grunddaten',
            text: 'आधारभूत विवरण',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'participantName',
                    text: 'सहभागीको नाम',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'householdCode',
                    text: 'घरधुरी कोड नं.',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'stufe1Reference',
                    text: 'चरण-१ प्रश्नावलीको सन्दर्भ (मिति वा पहिचान)',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'wardNumber',
                    text: 'वडा नं.',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'toleSiedlung',
                    text: 'टोल / बस्ती',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'palikaKommune',
                    text: 'पालिका / नगरपालिका',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'distrikt',
                    text: 'जिल्ला',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'householdHead',
                    text: 'घरमूलीको नाम',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'contactNumber',
                    text: 'सम्पर्क नं.',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'assessmentDate',
                    text: 'मूल्याङ्कन मिति',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'assessorName',
                    text: 'मूल्याङ्कनकर्ताको नाम',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'membersChildren',
                    text: 'बालबालिका (०–१७ वर्ष)',
                    type: 'integer',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'membersYouth',
                    text: 'युवा (१८–२४ वर्ष)',
                    type: 'integer',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'membersAdults',
                    text: 'वयस्क (२५–५९ वर्ष)',
                    type: 'integer',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'membersElderly',
                    text: 'जेष्ठ नागरिक (६०+)',
                    type: 'integer',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ══════════════════════════════════════════════
        // समूह २: आर्थिक अवस्था
        // ══════════════════════════════════════════════
        {
            linkId: 'wirtschaftlicheLage',
            text: 'आर्थिक अवस्था',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'incomeSource',
                    text: 'मुख्य आम्दानीको स्रोत',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '1', display: 'कृषि'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '2', display: 'ज्यालादारी श्रम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '3', display: 'विदेशमा रोजगारी'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '4', display: 'व्यापार'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: '5', display: 'सेवा'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/income-source', version: '1.0', code: 'other', display: 'अन्य'}}
                    ]
                },
                {
                    linkId: 'monthlyIncome',
                    text: 'औसत मासिक/वार्षिक आम्दानी (रु.)',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'landOwnership',
                    text: 'जग्गा स्वामित्व',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/land-ownership', version: '1.0', code: '1', display: 'आफ्नै जग्गा'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/land-ownership', version: '1.0', code: '2', display: 'भाडा वा बटैयामा लिएको'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/land-ownership', version: '1.0', code: '3', display: 'जग्गा छैन'}}
                    ]
                },
                {
                    linkId: 'foodSecurity',
                    text: 'खाद्य सुरक्षा',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/food-security', version: '1.0', code: '1', display: 'वर्षभर पुग्छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/food-security', version: '1.0', code: '2', display: '६–९ महिना'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/food-security', version: '1.0', code: '3', display: '६ महिनाभन्दा कम'}}
                    ]
                },
                {
                    linkId: 'socialBenefits',
                    text: 'सामाजिक सुरक्षा भत्ता / सहायता',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-benefits', version: '1.0', code: '1', display: 'भत्ता प्राप्त गर्छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-benefits', version: '1.0', code: '2', display: 'भत्ता प्राप्त गर्दैन'}}
                    ]
                },
                {
                    linkId: 'mainExpenses',
                    text: 'घरधुरीको मुख्य खर्च (खाद्यान्न, शिक्षा, स्वास्थ्य, भाडा, आदि)',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'monthlyExpenses',
                    text: 'औसत मासिक/वार्षिक खर्च (रु.)',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'riskWirtschaft',
                    text: 'आर्थिक जोखिम स्तर',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'न्यून'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'मध्यम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'उच्च'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // समूह ३: सामाजिक अवस्था
        // ══════════════════════════════════════════════
        {
            linkId: 'sozialeLage',
            text: 'सामाजिक अवस्था',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'casteEthnicity',
                    text: 'जात / जातीयता',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'educationStatus',
                    text: 'शैक्षिक अवस्था (बालबालिका/युवा)',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/education-status', version: '1.0', code: '1', display: 'विद्यालय वा तालिममा जान्छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/education-status', version: '1.0', code: '2', display: 'विद्यालय वा तालिम बाहिर'}}
                    ]
                },
                {
                    linkId: 'schoolDropout',
                    text: 'विद्यालय छोडेको',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/school-dropout', version: '1.0', code: 'yes', display: 'छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/school-dropout', version: '1.0', code: 'no', display: 'छैन'}}
                    ]
                },
                {
                    linkId: 'schoolDropoutReason',
                    text: 'छ भने: किन?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'schoolDropout', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/school-dropout', code: 'yes'}}]
                },
                {
                    linkId: 'disability',
                    text: 'अपाङ्गता',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability', version: '1.0', code: 'yes', display: 'छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability', version: '1.0', code: 'no', display: 'छैन'}}
                    ]
                },
                {
                    linkId: 'disabilityType',
                    text: 'छ भने: कुन प्रकारको अपाङ्गता?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'disability', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability', code: 'yes'}}]
                },
                {
                    linkId: 'disabilityCard',
                    text: 'अपाङ्गता परिचयपत्र',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'disability', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability', code: 'yes'}}],
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability-card', version: '1.0', code: '1', display: 'छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/disability-card', version: '1.0', code: '2', display: 'छैन'}}
                    ]
                },
                {
                    linkId: 'childMarriageRisk',
                    text: 'बालविवाहको जोखिम',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/child-marriage-risk', version: '1.0', code: 'hoch', display: 'उच्च'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/child-marriage-risk', version: '1.0', code: 'mittel', display: 'मध्यम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/child-marriage-risk', version: '1.0', code: 'niedrig', display: 'न्यून'}}
                    ]
                },
                {
                    linkId: 'genderViolenceRisk',
                    text: 'लैङ्गिक हिंसाको जोखिम',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/gender-violence-risk', version: '1.0', code: 'yes', display: 'छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/gender-violence-risk', version: '1.0', code: 'no', display: 'छैन'}}
                    ]
                },
                {
                    linkId: 'genderViolenceForm',
                    text: 'छ भने: कुन प्रकारको?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'genderViolenceRisk', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/gender-violence-risk', code: 'yes'}}]
                },
                {
                    linkId: 'socialParticipation',
                    text: 'सामाजिक सहभागिता',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-participation', version: '1.0', code: '1', display: 'सक्रिय सहभागिता'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-participation', version: '1.0', code: '2', display: 'सीमित'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-participation', version: '1.0', code: '3', display: 'बहिष्कृत'}}
                    ]
                },
                {
                    linkId: 'riskSozial',
                    text: 'सामाजिक जोखिम स्तर',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'न्यून'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'मध्यम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'उच्च'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // समूह ४: राजनीतिक / प्रशासनिक अवस्था
        // ══════════════════════════════════════════════
        {
            linkId: 'politischeLage',
            text: 'राजनीतिक / प्रशासनिक अवस्था',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'voterRegistration',
                    text: 'मतदाता नामावलीमा दर्ता',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/voter-registration', version: '1.0', code: 'yes', display: 'छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/voter-registration', version: '1.0', code: 'no', display: 'छैन'}}
                    ]
                },
                {
                    linkId: 'voterNoReason',
                    text: 'छैन भने: किन?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'voterRegistration', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/voter-registration', code: 'no'}}]
                },
                {
                    linkId: 'citizenshipStatus',
                    text: 'नागरिकता / जन्मदर्ता',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/citizenship-status', version: '1.0', code: '1', display: 'सबैको छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/citizenship-status', version: '1.0', code: '2', display: 'केहीको छैन'}}
                    ]
                },
                {
                    linkId: 'accessStateServices',
                    text: 'सरकारी सेवा / सुविधामा पहुँच',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/access-state-services', version: '1.0', code: '1', display: 'सजिलो'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/access-state-services', version: '1.0', code: '2', display: 'कठिन'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/access-state-services', version: '1.0', code: '3', display: 'पहुँच छैन'}}
                    ]
                },
                {
                    linkId: 'riskPolitisch',
                    text: 'राजनीतिक जोखिम स्तर',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'न्यून'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'मध्यम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'उच्च'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // समूह ५: पारिवारिक अवस्था
        // ══════════════════════════════════════════════
        {
            linkId: 'familiaereSituation',
            text: 'पारिवारिक अवस्था',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'familyStructure',
                    text: 'पारिवारिक संरचना',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-structure', version: '1.0', code: '1', display: 'संयुक्त परिवार'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-structure', version: '1.0', code: '2', display: 'एकल परिवार'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-structure', version: '1.0', code: '3', display: 'एकल अभिभावक'}}
                    ]
                },
                {
                    linkId: 'familyRelationships',
                    text: 'पारिवारिक सम्बन्ध',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-relationships', version: '1.0', code: '1', display: 'सामञ्जस्यपूर्ण'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-relationships', version: '1.0', code: '2', display: 'सामान्य'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/family-relationships', version: '1.0', code: '3', display: 'द्वन्द्वपूर्ण'}}
                    ]
                },
                {
                    linkId: 'domesticViolenceNote',
                    text: 'सूचना: तलका प्रश्नहरू संवेदनशील विषयसँग सम्बन्धित छन्। कृपया सुरक्षा निर्देशिका पालना गर्नुहोस्।',
                    type: 'display',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'domesticViolence',
                    text: 'घरेलु हिंसा',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/domestic-violence', version: '1.0', code: 'none', display: 'कुनै संकेत छैन'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/domestic-violence', version: '1.0', code: 'suspicion', display: 'शङ्का'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/domestic-violence', version: '1.0', code: 'confirmed', display: 'पुष्टि भएको'}}
                    ]
                },
                {
                    linkId: 'domesticViolenceForm',
                    text: 'छ भने: कुन प्रकारको?',
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
                    text: 'अभिभावकीय हेरचाह',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/parental-care', version: '1.0', code: '1', display: 'राम्रो'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/parental-care', version: '1.0', code: '2', display: 'मध्यम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/parental-care', version: '1.0', code: '3', display: 'कमजोर'}}
                    ]
                },
                {
                    linkId: 'laborMigration',
                    text: 'वैदेशिक रोजगारी / श्रम आप्रवासन',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/labor-migration', version: '1.0', code: 'yes', display: 'छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/labor-migration', version: '1.0', code: 'no', display: 'छैन'}}
                    ]
                },
                {
                    linkId: 'laborMigrationWhere',
                    text: 'छ भने: कहाँ?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'laborMigration', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/labor-migration', code: 'yes'}}]
                },
                {
                    linkId: 'riskFamilie',
                    text: 'पारिवारिक जोखिम स्तर',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'न्यून'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'मध्यम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'उच्च'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // समूह ६: मनोसामाजिक अवस्था
        // ══════════════════════════════════════════════
        {
            linkId: 'psychosozialeSituation',
            text: 'मनोसामाजिक अवस्था',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'selfConfidenceChildren',
                    text: 'आत्मविश्वास – बालबालिका',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gut', display: 'राम्रो'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gering', display: 'कम'}}
                    ]
                },
                {
                    linkId: 'selfConfidenceYouth',
                    text: 'आत्मविश्वास – युवा',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gut', display: 'राम्रो'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gering', display: 'कम'}}
                    ]
                },
                {
                    linkId: 'selfConfidenceCaregivers',
                    text: 'आत्मविश्वास – अभिभावक',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gut', display: 'राम्रो'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/self-confidence', version: '1.0', code: 'gering', display: 'कम'}}
                    ]
                },
                {
                    linkId: 'stressChildren',
                    text: 'तनाव / चिन्ता – बालबालिका',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'keine', display: 'छैन'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'mittel', display: 'मध्यम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'hoch', display: 'उच्च'}}
                    ]
                },
                {
                    linkId: 'stressYouth',
                    text: 'तनाव / चिन्ता – युवा',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'keine', display: 'छैन'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'mittel', display: 'मध्यम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'hoch', display: 'उच्च'}}
                    ]
                },
                {
                    linkId: 'stressCaregivers',
                    text: 'तनाव / चिन्ता – अभिभावक',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'keine', display: 'छैन'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'mittel', display: 'मध्यम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/stress-level', version: '1.0', code: 'hoch', display: 'उच्च'}}
                    ]
                },
                {
                    linkId: 'socialBehaviorChildren',
                    text: 'सामाजिक व्यवहार – बालबालिका',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'positiv', display: 'सकारात्मक'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'negativ', display: 'नकारात्मक'}}
                    ]
                },
                {
                    linkId: 'socialBehaviorYouth',
                    text: 'सामाजिक व्यवहार – युवा',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'positiv', display: 'सकारात्मक'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'negativ', display: 'नकारात्मक'}}
                    ]
                },
                {
                    linkId: 'socialBehaviorCaregivers',
                    text: 'सामाजिक व्यवहार – अभिभावक',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'positiv', display: 'सकारात्मक'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/social-behavior', version: '1.0', code: 'negativ', display: 'नकारात्मक'}}
                    ]
                },
                {
                    linkId: 'counselingChildren',
                    text: 'परामर्शको आवश्यकता – बालबालिका',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'yes', display: 'छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'no', display: 'छैन'}}
                    ]
                },
                {
                    linkId: 'counselingYouth',
                    text: 'परामर्शको आवश्यकता – युवा',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'yes', display: 'छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'no', display: 'छैन'}}
                    ]
                },
                {
                    linkId: 'counselingCaregivers',
                    text: 'परामर्शको आवश्यकता – अभिभावक',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'yes', display: 'छ'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/counseling-need', version: '1.0', code: 'no', display: 'छैन'}}
                    ]
                },
                {
                    linkId: 'riskPsychosozial',
                    text: 'मनोसामाजिक जोखिम स्तर',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'niedrig', display: 'न्यून'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'mittel', display: 'मध्यम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/risk-level', version: '1.0', code: 'hoch', display: 'उच्च'}}
                    ]
                }
            ]
        },

        // ══════════════════════════════════════════════
        // समूह ७: समग्र जोखिम वर्गीकरण
        // ══════════════════════════════════════════════
        {
            linkId: 'gesamtklassifikation',
            text: 'समग्र जोखिम वर्गीकरण',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'riskDescriptionDisplay',
                    text: 'न्यून जोखिम: आधारभूत आवश्यकताहरू पूरा भएको, राम्रो सामाजिक सहभागिता। मध्यम जोखिम: सेवामा आंशिक पहुँचको कमी, आर्थिक वा सामाजिक दबाब। उच्च जोखिम: बहुआयामिक अभाव, हिंसा, बालविवाह वा गम्भीर आर्थिक सङ्कट।',
                    type: 'display',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'overallRisk',
                    text: 'अन्तिम वर्गीकरण',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/overall-risk', version: '1.0', code: 'niedrig', display: 'न्यून जोखिम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/overall-risk', version: '1.0', code: 'mittel', display: 'मध्यम जोखिम'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/internal-assessment/coding/overall-risk', version: '1.0', code: 'hoch', display: 'उच्च जोखिम'}}
                    ]
                },
                {
                    linkId: 'overallRiskNotes',
                    text: 'कारण',
                    type: 'string',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ══════════════════════════════════════════════
        // समूह ८: निष्कर्ष
        // ══════════════════════════════════════════════
        {
            linkId: 'schlussfolgerung',
            text: 'निष्कर्ष',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'conclusionText',
                    text: 'समग्र मूल्याङ्कन',
                    type: 'string',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ══════════════════════════════════════════════
        // समूह ९: सिफारिस तथा कार्ययोजना
        // ══════════════════════════════════════════════
        {
            linkId: 'empfehlungen',
            text: 'सिफारिस तथा कार्ययोजना',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'immediateSupport',
                    text: 'तत्काल आवश्यक सहयोग',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'longTermSupport',
                    text: 'दीर्घकालीन सहयोग',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'recommendedOrg',
                    text: 'सिफारिस गरिएको संस्था / सेवा',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'followUpDate',
                    text: 'अनुगमन मिति',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'assessorSignature',
                    text: 'सिफारिसकर्ताको नाम',
                    type: 'string',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'assessorRole',
                    text: 'पद',
                    type: 'string',
                    disabledDisplay: 'protected'
                }
            ]
        }
    ]
};
