import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export const NeedsAssessmentNE: Questionnaire = {
    resourceType: 'Questionnaire',
    language: 'ne',
    url: 'http://heyfreeda.com/questionnaire/needs-assessment/ne',
    name: 'NeedsAssessment',
    title: 'आवश्यकता मूल्याङ्कन',
    status: 'active',
    item: [
        // ──────────────────────────────────────────────
        // Disclaimer
        // ──────────────────────────────────────────────
        {
            linkId: 'disclaimer',
            text: '\u0938\u0941\u0930\u0941 \u0917\u0930\u094d\u0928\u0941\u0905\u0918\u093f',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'disclaimerText',
                    text: '\u0924\u092a\u093e\u0908\u0902\u0915\u093e \u0909\u0924\u094d\u0924\u0930\u0939\u0930\u0942\u0932\u0947 \u0939\u093e\u092e\u0940\u0932\u093e\u0908 \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0905\u0939\u093f\u0932\u0947 \u0915\u0947 \u091a\u093e\u0939\u093f\u0928\u094d\u091b \u0930 Hey Freeda \u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0915\u0938\u0930\u0940 \u0938\u0939\u092f\u094b\u0917 \u0917\u0930\u094d\u0928 \u0938\u0915\u094d\u091b \u092d\u0928\u094d\u0928\u0947 \u0915\u0941\u0930\u093e \u0930\u093e\u092e\u094d\u0930\u094b\u0938\u0901\u0917 \u092c\u0941\u091d\u094d\u0928 \u092e\u0926\u094d\u0926\u0924 \u0917\u0930\u094d\u091b\u0964 \u0924\u092a\u093e\u0908\u0902\u0932\u0947 \u0939\u093e\u092e\u0940\u0938\u0901\u0917 \u0938\u093e\u091d\u093e \u0917\u0930\u094d\u0928\u0941\u092d\u090f\u0915\u093e \u0938\u092c\u0948 \u0915\u0941\u0930\u093e\u0939\u0930\u0942 \u0917\u094b\u092a\u094d\u092f \u0930\u093e\u0916\u093f\u0928\u094d\u091b \u0930 \u0924\u0947\u0938\u094d\u0930\u094b \u092a\u0915\u094d\u0937\u0932\u093e\u0908 \u0926\u093f\u0907\u0928\u0947 \u091b\u0948\u0928\u0964 \u0915\u0941\u0928\u0948 \u0915\u0941\u0930\u093e \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0927\u0947\u0930\u0948 \u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924 \u0932\u093e\u0917\u094d\u091b \u092d\u0928\u0947 \u0939\u0930\u0947\u0915 \u092a\u094d\u0930\u0936\u094d\u0928\u0915\u094b \u0909\u0924\u094d\u0924\u0930 \u0926\u093f\u0928\u0941\u092a\u0930\u094d\u0926\u0948\u0928\u0964 \u0924\u092a\u093e\u0908\u0902\u0915\u094b \u0938\u092e\u094d\u092a\u0930\u094d\u0915 \u0935\u093f\u0935\u0930\u0923 \u0905\u0928\u094d\u0924\u092e\u093e \u092e\u093e\u0924\u094d\u0930 \u0938\u094b\u0927\u093f\u0928\u094d\u091b\u094c\u0902\u0964\n\n\u0938\u092e\u092f \u0926\u093f\u0928\u0941\u092d\u090f\u0915\u094b\u092e\u093e \u0927\u0928\u094d\u092f\u0935\u093e\u0926\u0964 \uD83D\uDE4F',
                    type: 'display',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 1: Personal Information
        // ──────────────────────────────────────────────
        {
            linkId: 'personalInfo',
            prefix: '1',
            text: 'व्यक्तिगत जानकारी',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'age',
                    prefix: '1_1',
                    text: 'तपाईंको उमेर कति हो?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '1',
                                display: '१६ भन्दा कम'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '2',
                                display: '१६–१८'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '3',
                                display: '१९–२१'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '4',
                                display: '२२–२५'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '5',
                                display: '२६–३०'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age',
                                version: '1.0',
                                code: '6',
                                display: '३१ भन्दा माथि'
                            }
                        }
                    ]
                },
                {
                    linkId: 'currentSituation',
                    prefix: '1_2',
                    text: 'तपाईंको हालको अवस्था के हो?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '1',
                                display: 'विद्यालय'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '2',
                                display: 'कलेज'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '3',
                                display: 'तालिम/प्रशिक्षण'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '4',
                                display: 'काम गर्दै'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '5',
                                display: 'घरमा/अनिश्चित'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '6',
                                display: 'आश्रय/होस्टेल/साझा बास'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentSituation',
                                version: '1.0',
                                code: '7',
                                display: 'अन्य'
                            }
                        }
                    ]
                },
                {
                    linkId: 'livingSituation',
                    prefix: '1_3',
                    text: 'तपाईं अहिले कहाँ बस्नुहुन्छ?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '1',
                                display: 'परिवार'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '2',
                                display: 'आफन्त'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '3',
                                display: 'आश्रय'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '4',
                                display: 'होस्टेल'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '5',
                                display: 'साझा बास'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '6',
                                display: 'एक्लै'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '7',
                                display: 'बास अनिश्चित'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/livingSituation',
                                version: '1.0',
                                code: '8',
                                display: 'पछि भन्छु'
                            }
                        }
                    ]
                },
                {
                    linkId: 'orgSupport',
                    text: '\u0915\u0947 \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0905\u0939\u093f\u0932\u0947 \u0915\u0941\u0928\u0948 \u0938\u0902\u0938\u094d\u0925\u093e\u0932\u0947 \u0938\u0939\u092f\u094b\u0917 \u0917\u0930\u093f\u0930\u0939\u0947\u0915\u094b \u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support',
                                version: '1.0',
                                code: 'yes',
                                display: '\u0939\u094b'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support',
                                version: '1.0',
                                code: 'no',
                                display: '\u091b\u0948\u0928'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support',
                                version: '1.0',
                                code: 'unsure',
                                display: '\u0925\u093e\u0939\u093e \u091b\u0948\u0928'
                            }
                        }
                    ]
                },
                {
                    linkId: 'orgName',
                    text: '\u0915\u0941\u0928 \u0938\u0902\u0938\u094d\u0925\u093e?',
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
                    prefix: '1_4',
                    text: 'आफ्नो भविष्यको बारेमा तपाईंलाई कस्तो लाग्छ?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureOutlook',
                                version: '1.0',
                                code: '1',
                                display: 'स्पष्ट योजना छ'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureOutlook',
                                version: '1.0',
                                code: '2',
                                display: 'केही विचारहरू छन्/अनिश्चित'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureOutlook',
                                version: '1.0',
                                code: '3',
                                display: 'के सम्भव छ थाहा छैन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureOutlook',
                                version: '1.0',
                                code: '4',
                                display: 'कुनै सम्भावना देखिँदैन'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 2: Basic Needs
        // ──────────────────────────────────────────────
        {
            linkId: 'basicNeeds',
            prefix: '2',
            text: 'आधारभूत आवश्यकताहरू',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'mainConcern',
                    prefix: '2_1',
                    text: 'अहिले तपाईंलाई सबैभन्दा बढी के चिन्ता लाग्छ?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '1',
                                display: 'विद्यालय/कलेज'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '2',
                                display: 'पैसा'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '3',
                                display: 'बास'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '4',
                                display: 'स्वास्थ्य'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '5',
                                display: 'जर्मन भाषा'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '6',
                                display: 'काम/तालिम'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '7',
                                display: 'परिवारलाई सहयोग'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '8',
                                display: 'कहाँबाट सुरु गर्ने थाहा छैन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/mainConcern',
                                version: '1.0',
                                code: '9',
                                display: 'अन्य'
                            }
                        }
                    ]
                },
                {
                    linkId: 'missingItems',
                    prefix: '2_2',
                    text: 'अहिले तपाईंलाई दैनिक जीवनका लागि केही कुरा खाँचो छ?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '1',
                                display: 'स्वच्छता सामग्री'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '2',
                                display: 'लुगा'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '3',
                                display: 'मौसमी जुत्ता/वर्षाको लुगा'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '4',
                                display: 'खाना'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '5',
                                display: 'औषधि'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '6',
                                display: 'चिकित्सक भेट/जाँच'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '7',
                                display: 'सुरक्षित बास'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '8',
                                display: 'यातायात खर्च'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '9',
                                display: 'यी मध्ये केही पनि होइन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missingItems',
                                version: '1.0',
                                code: '10',
                                display: 'अन्य'
                            }
                        }
                    ]
                },
                {
                    linkId: 'missedOpportunity',
                    prefix: '2_3',
                    text: 'गत ३ महिनामा केही महत्त्वपूर्ण कुराको अभावले विद्यालय, कलेज, काम वा कुनै पाठ्यक्रम छुट्यो?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missedOpportunity',
                                version: '1.0',
                                code: '1',
                                display: 'हो'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missedOpportunity',
                                version: '1.0',
                                code: '2',
                                display: 'सायद'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missedOpportunity',
                                version: '1.0',
                                code: '3',
                                display: 'छैन'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 3: Safety & Housing
        // ──────────────────────────────────────────────
        {
            linkId: 'safety',
            prefix: '3',
            text: 'सुरक्षा र बासस्थान',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'housingSafe',
                    prefix: '3_1',
                    text: 'तपाईंको बास अहिले सुरक्षित छ?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingSafe',
                                version: '1.0',
                                code: '1',
                                display: 'हो'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingSafe',
                                version: '1.0',
                                code: '2',
                                display: 'प्रायः हो'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingSafe',
                                version: '1.0',
                                code: '3',
                                display: 'प्रायः छैन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingSafe',
                                version: '1.0',
                                code: '4',
                                display: 'छैन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingSafe',
                                version: '1.0',
                                code: '5',
                                display: 'अनिश्चित'
                            }
                        }
                    ]
                },
                {
                    linkId: 'housingRisk',
                    prefix: '3_2',
                    text: 'तपाईंको हालको बास गुम्ने चिन्ता छ?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingRisk',
                                version: '1.0',
                                code: '1',
                                display: 'हो'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingRisk',
                                version: '1.0',
                                code: '2',
                                display: 'सायद'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housingRisk',
                                version: '1.0',
                                code: '3',
                                display: 'छैन'
                            }
                        }
                    ]
                },
                {
                    linkId: 'medicalAccess',
                    prefix: '3_3',
                    text: 'आवश्यक पर्दा चिकित्सा सहायता पाउनुहुन्छ?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medicalAccess',
                                version: '1.0',
                                code: '1',
                                display: 'हो'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medicalAccess',
                                version: '1.0',
                                code: '2',
                                display: 'आंशिक'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medicalAccess',
                                version: '1.0',
                                code: '3',
                                display: 'छैन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medicalAccess',
                                version: '1.0',
                                code: '4',
                                display: 'थाहा छैन'
                            }
                        }
                    ]
                },
                {
                    linkId: 'urgentNeed',
                    prefix: '3_4',
                    text: 'अहिले सबैभन्दा जरुरी के हो?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '1',
                                display: 'स्वच्छता/महिनावारी'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '2',
                                display: 'स्वास्थ्य/उपचार खर्च'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '3',
                                display: 'सुरक्षित बास'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '4',
                                display: 'लुगा/जुत्ता'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '5',
                                display: 'खाना'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '6',
                                display: 'सुरक्षा'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/urgentNeed',
                                version: '1.0',
                                code: '7',
                                display: 'अन्य'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 4: Education
        // ──────────────────────────────────────────────
        {
            linkId: 'education',
            prefix: '4',
            text: 'शिक्षा',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'currentlyStudying',
                    prefix: '4_1',
                    text: 'अहिले विद्यालय वा कलेज जानुहुन्छ?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentlyStudying',
                                version: '1.0',
                                code: '1',
                                display: 'हो, विद्यालय'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentlyStudying',
                                version: '1.0',
                                code: '2',
                                display: 'हो, कलेज'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currentlyStudying',
                                version: '1.0',
                                code: '3',
                                display: 'जान्न'
                            }
                        }
                    ]
                },
                {
                    linkId: 'educationLevel',
                    prefix: '4_2',
                    text: 'तपाईंको हालको शैक्षिक स्तर के हो?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '1',
                                display: 'विद्यालयमा छु'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '2',
                                display: 'विद्यालय सकिएको'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '3',
                                display: 'कलेज सुरु गरेको'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '4',
                                display: 'कलेज सकिएको'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '5',
                                display: 'व्यावसायिक तालिम'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '6',
                                display: 'विश्वविद्यालय'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationLevel',
                                version: '1.0',
                                code: '7',
                                display: 'अन्य'
                            }
                        }
                    ]
                },
                {
                    linkId: 'educationGoal',
                    prefix: '4_3',
                    text: 'शिक्षामा अर्को के गर्न चाहनुहुन्छ?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationGoal',
                                version: '1.0',
                                code: '1',
                                display: 'विद्यालय पूरा गर्ने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationGoal',
                                version: '1.0',
                                code: '2',
                                display: 'कलेज जाने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationGoal',
                                version: '1.0',
                                code: '3',
                                display: 'व्यावसायिक तालिम गर्ने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationGoal',
                                version: '1.0',
                                code: '4',
                                display: 'विश्वविद्यालय पढ्ने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationGoal',
                                version: '1.0',
                                code: '5',
                                display: 'पाठ्यक्रम/तालिम लिने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationGoal',
                                version: '1.0',
                                code: '6',
                                display: 'अझै थाहा छैन'
                            }
                        }
                    ]
                },
                {
                    linkId: 'educationSupport',
                    prefix: '4_4',
                    text: 'शिक्षामा रहन वा फर्कन कुन सहयोग सबैभन्दा उपयोगी हुन्छ?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '1',
                                display: 'शुल्क'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '2',
                                display: 'पठन सामग्री'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '3',
                                display: 'पोशाक/लुगा'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '4',
                                display: 'यातायात'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '5',
                                display: 'सुरक्षित बास'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '6',
                                display: 'मार्गदर्शन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '7',
                                display: 'अध्ययन संरचना'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '8',
                                display: 'व्यवसाय मार्गदर्शन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/educationSupport',
                                version: '1.0',
                                code: '9',
                                display: 'अन्य'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 5: German Language Learning
        // ──────────────────────────────────────────────
        {
            linkId: 'german',
            prefix: '5',
            text: 'जर्मन भाषा सिक्ने',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'languageInterest',
                    text: '\u0915\u0947 \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0928\u092f\u093e\u0901 \u092d\u093e\u0937\u093e \u0938\u093f\u0915\u094d\u0928\u092e\u093e \u0930\u0941\u091a\u093f \u091b?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-interest',
                                version: '1.0',
                                code: 'german',
                                display: '\u0939\u094b, \u091c\u0930\u094d\u092e\u0928'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-interest',
                                version: '1.0',
                                code: 'english',
                                display: '\u0939\u094b, \u0905\u0919\u094d\u0917\u094d\u0930\u0947\u091c\u0940'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-interest',
                                version: '1.0',
                                code: 'other',
                                display: '\u0939\u094b, \u0905\u0930\u094d\u0915\u094b \u092d\u093e\u0937\u093e'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-interest',
                                version: '1.0',
                                code: 'no',
                                display: '\u0905\u0939\u093f\u0932\u0947 \u0939\u094b\u0907\u0928'
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanHint',
                    text: '\u0928\u094b\u091f: Hey Freeda \u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u091c\u0930\u094d\u092e\u0928 \u0938\u093f\u0915\u094d\u0928\u092e\u093e \u0938\u0939\u092f\u094b\u0917 \u0917\u0930\u094d\u0928 \u0938\u0915\u094d\u091b\u0964',
                    type: 'display',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'germanLevel',
                    prefix: '5_1',
                    text: 'तपाईंको हालको जर्मन स्तर के हो?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanLevel',
                                version: '1.0',
                                code: '1',
                                display: 'कुनै ज्ञान छैन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanLevel',
                                version: '1.0',
                                code: '2',
                                display: 'पहिलो शब्द र वाक्यहरू'
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
                                display: 'B2 वा माथि'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanLevel',
                                version: '1.0',
                                code: '7',
                                display: 'थाहा छैन'
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanMotivation',
                    prefix: '5_2',
                    text: 'जर्मन किन सिक्न चाहनुहुन्छ?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '1',
                                display: 'जर्मनीमा तालिम'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '2',
                                display: 'जर्मनीमा काम'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '3',
                                display: 'अध्ययन/विदेशी सेमेस्टर'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '4',
                                display: 'नेपालमा पर्यटन काम'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '5',
                                display: 'व्यक्तिगत विकास'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '6',
                                display: 'विकल्पहरू खुला राख्ने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMotivation',
                                version: '1.0',
                                code: '7',
                                display: 'अझै थाहा छैन'
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanMethod',
                    prefix: '5_3',
                    text: 'जर्मन कसरी सिक्न चाहनुहुन्छ?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '1',
                                display: 'जुम पाठ'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '2',
                                display: 'अध्ययन समूह'
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
                                display: 'फ्ल्यासकार्ड/एपहरू'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '5',
                                display: 'गोएथे संस्थान'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '6',
                                display: 'भाषा विद्यालय'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '7',
                                display: 'स्वअध्ययन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanMethod',
                                version: '1.0',
                                code: '8',
                                display: 'मलाई सल्लाह चाहिन्छ'
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanBarriers',
                    prefix: '5_4',
                    text: 'अहिले जर्मन सिक्न के कठिन छ?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '1',
                                display: 'खर्च'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '2',
                                display: 'समय'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '3',
                                display: 'इन्टरनेट/उपकरण छैन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '4',
                                display: 'शान्त अध्ययन ठाउँ छैन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '5',
                                display: 'परिवार/दैनिक जीवन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '6',
                                display: 'कसरी सुरु गर्ने थाहा छैन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '7',
                                display: 'धेरै गाह्रो हुन्छ भन्ने डर'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanBarriers',
                                version: '1.0',
                                code: '8',
                                display: 'यी मध्ये केही होइन'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 6: Career & Future
        // ──────────────────────────────────────────────
        {
            linkId: 'career',
            prefix: '6',
            text: 'करियर र भविष्य',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'futureWish',
                    prefix: '6_1',
                    text: 'आगामी १–३ वर्षमा के चाहनुहुन्छ?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '1',
                                display: 'विद्यालय/कलेज पूरा गर्ने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '2',
                                display: 'पेशा सिक्ने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '3',
                                display: 'आफ्नो पैसा कमाउने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '4',
                                display: 'स्वतन्त्र हुने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '5',
                                display: 'जर्मन सिक्ने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '6',
                                display: 'नेपालमा काम गर्ने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '7',
                                display: 'जर्मनीमा पढ्ने/काम गर्ने'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/futureWish',
                                version: '1.0',
                                code: '8',
                                display: 'अनिश्चित छु'
                            }
                        }
                    ]
                },
                {
                    linkId: 'interestPath',
                    prefix: '6_2',
                    text: 'अहिले कुन बाटो सबैभन्दा रोचक लाग्छ?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '1',
                                display: 'जर्मनीमा तालिम'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '2',
                                display: 'जर्मनीमा काम'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '3',
                                display: 'अध्ययन/विदेशी सेमेस्टर'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '4',
                                display: 'नेपालमा पर्यटन काम'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '5',
                                display: 'नेपालमा व्यावसायिक तालिम'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '6',
                                display: 'पहिले अभिमुखीकरण'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestPath',
                                version: '1.0',
                                code: '7',
                                display: 'थाहा छैन'
                            }
                        }
                    ]
                },
                {
                    linkId: 'interestAreas',
                    prefix: '6_3',
                    text: 'कुन क्षेत्रमा रुचि छ?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '1',
                                display: 'होटल/रेस्टुरेन्ट'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '2',
                                display: 'पर्यटन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '3',
                                display: 'हेरचाह/सहयोग'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '4',
                                display: 'कार्यालय/व्यवस्थापन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '5',
                                display: 'बिक्री'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '6',
                                display: 'सौन्दर्य/कस्मेटिक्स'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '7',
                                display: 'सिलाई/हस्तकला'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '8',
                                display: 'बालस्याहार'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '9',
                                display: 'IT/कम्प्युटर'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '10',
                                display: 'अन्य'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interestAreas',
                                version: '1.0',
                                code: '11',
                                display: 'खुला छु'
                            }
                        }
                    ]
                },
                {
                    linkId: 'germanyInterest',
                    prefix: '6_4',
                    text: 'पछि तालिम वा कामका लागि जर्मनी जाने कल्पना गर्न सक्नुहुन्छ?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanyInterest',
                                version: '1.0',
                                code: '1',
                                display: 'हो'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanyInterest',
                                version: '1.0',
                                code: '2',
                                display: 'सायद'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanyInterest',
                                version: '1.0',
                                code: '3',
                                display: 'बरु छैन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/germanyInterest',
                                version: '1.0',
                                code: '4',
                                display: 'अझै पर्याप्त जानकारी छैन'
                            }
                        }
                    ]
                }
            ]
        },

        // ──────────────────────────────────────────────
        // Group 7: Support & Contact
        // ──────────────────────────────────────────────
        {
            linkId: 'support',
            prefix: '7',
            text: 'सहयोग र सम्पर्क',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'readiness',
                    prefix: '7_1',
                    text: 'अर्को कदमका लागि कति तयार महसुस गर्नुहुन्छ?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/readiness',
                                version: '1.0',
                                code: '1',
                                display: 'धेरै तयार'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/readiness',
                                version: '1.0',
                                code: '2',
                                display: 'केही तयार'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/readiness',
                                version: '1.0',
                                code: '3',
                                display: 'अनिश्चित'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/readiness',
                                version: '1.0',
                                code: '4',
                                display: 'अहिले तयार छैन'
                            }
                        }
                    ]
                },
                {
                    linkId: 'personalBurden',
                    text: '\u0915\u0947\u0939\u0940 \u0915\u0941\u0930\u093e \u091b \u091c\u0938\u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0905\u0939\u093f\u0932\u0947 \u0927\u0947\u0930\u0948 \u0924\u0928\u093e\u0935\u092e\u093e \u0930\u093e\u0916\u094d\u0928\u0947 \u0917\u0930\u0947\u0915\u094b \u091b\u002c \u091c\u0938\u092c\u093e\u0930\u0947 \u0924\u092a\u093e\u0908\u0902 \u0915\u0938\u0948\u0938\u0901\u0917 \u0915\u0941\u0930\u093e \u0917\u0930\u094d\u0928 \u091a\u093e\u0939\u0928\u0941\u0939\u0941\u0928\u094d\u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden',
                                version: '1.0',
                                code: 'yes',
                                display: '\u0939\u094b'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden',
                                version: '1.0',
                                code: 'maybe',
                                display: '\u0938\u093e\u092f\u0926 \u092a\u091b\u093f'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden',
                                version: '1.0',
                                code: 'no',
                                display: '\u091b\u0948\u0928'
                            }
                        }
                    ]
                },
                {
                    linkId: 'helpfulSupport',
                    prefix: '7_2',
                    text: 'अहिले कुन सहयोग सबैभन्दा उपयोगी हुन्छ?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    maxLength: 3,
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '1',
                                display: 'अभिमुखीकरण कुराकानी'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '2',
                                display: 'जर्मन सिक्न मद्दत'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '3',
                                display: 'अध्ययन योजना'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '4',
                                display: 'कागजपत्र सहयोग'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '5',
                                display: 'प्रेरणा र साथ'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '6',
                                display: 'मेरो परिवारका लागि जानकारी'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '7',
                                display: 'शिक्षा खर्चमा मद्दत'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpfulSupport',
                                version: '1.0',
                                code: '8',
                                display: 'बास वा आधारभूत आवश्यकतामा मद्दत'
                            }
                        }
                    ]
                },
                {
                    linkId: 'contactWish',
                    prefix: '7_3',
                    text: 'यो प्रश्नावली पछि Hey Freeda ले सम्पर्क गरोस् भन्ने चाहनुहुन्छ?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactWish',
                                version: '1.0',
                                code: '1',
                                display: 'हो'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactWish',
                                version: '1.0',
                                code: '2',
                                display: 'सायद पछि'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactWish',
                                version: '1.0',
                                code: '3',
                                display: 'छैन'
                            }
                        }
                    ]
                },
                {
                    linkId: 'contactMethod',
                    prefix: '7_4',
                    text: 'हामी कसरी सम्पर्क गर्न सक्छौं?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {
                            question: 'contactWish',
                            operator: '=',
                            answerCoding: {
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
                                display: 'फोन'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactMethod',
                                version: '1.0',
                                code: '3',
                                display: 'इमेल'
                            }
                        },
                        {
                            valueCoding: {
                                system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contactMethod',
                                version: '1.0',
                                code: '4',
                                display: 'सम्पर्क व्यक्ति मार्फत'
                            }
                        }
                    ]
                },
                {
                    linkId: 'contactDetails',
                    prefix: '7_5',
                    text: 'तपाईंको सम्पर्क विवरण',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {
                            question: 'contactWish',
                            operator: '=',
                            answerCoding: {
                                code: '1'
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
