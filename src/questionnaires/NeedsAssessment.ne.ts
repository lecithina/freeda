import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export const NeedsAssessmentNE: Questionnaire = {
    resourceType: 'Questionnaire',
    language: 'ne',
    url: 'http://heyfreeda.com/questionnaire/needs-assessment/ne',
    name: 'NeedsAssessment',
    title: '\u0928\u0947\u092a\u093e\u0932\u0915\u094b \u0932\u093e\u0917\u093f \u092a\u094d\u0930\u0936\u094d\u0928\u093e\u0935\u0932\u0940 \u2013 \u091a\u0930\u0923 \u0967',
    status: 'active',
    item: [
        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        // Disclaimer
        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        {
            linkId: 'disclaimer',
            text: '\u0938\u0941\u0930\u0941 \u0917\u0930\u094d\u0928\u0941\u0905\u0918\u093f',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'disclaimerText',
                    text: 'यो प्रश्नावलीले हामीलाई तपाईंको अवस्था राम्रोसँग बुझ्न र अहिले कुन सहयोग सार्थक र उपयुक्त हुन सक्छ भनेर मूल्याङ्कन गर्न मद्दत गर्छ। तपाईं आफैंले निर्णय गर्नुहुन्छ कुन प्रश्नहरूको उत्तर दिने। सबै स्वैच्छिक छ र गोप्य राखिन्छ। यदि तपाईं Hey Freeda ले सिधै सम्पर्क गरोस् भन्ने चाहनुहुन्छ भने, अन्तमा आफ्नो सम्पर्क विवरण दिन सक्नुहुन्छ। अहिले उत्तर दिन नचाहेका प्रश्नहरू छोड्न सक्नुहुन्छ।',
                    type: 'display',
                    disabledDisplay: 'protected'
                },
                {
                    linkId: 'safetyHint',
                    text: 'कृपया तपाईंको लागि अहिले सुरक्षित भएका प्रश्नहरू मात्र उत्तर दिनुहोस्। तपाईं प्रश्नहरू छोड्न सक्नुहुन्छ र सम्पर्क विवरण दिनुपर्दैन।',
                    type: 'display',
                    disabledDisplay: 'protected'
                }
            ]
        },

        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        // \u0916\u0923\u094d\u0921 \u0967: \u0939\u093e\u0932\u0915\u094b \u0905\u0935\u0938\u094d\u0925\u093e
        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        {
            linkId: 'currentSituation',
            text: '\u0939\u093e\u0932\u0915\u094b \u0905\u0935\u0938\u094d\u0925\u093e',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'age',
                    text: '\u0924\u092a\u093e\u0908\u0902\u0915\u094b \u0909\u092e\u0947\u0930 \u0915\u0924\u093f \u0939\u094b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '1', display: '\u0967\u096c \u092d\u0928\u094d\u0926\u093e \u0915\u092e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '2', display: '\u0967\u096c\u2013\u0967\u096e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '3', display: '\u0967\u096f\u2013\u0968\u0967'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '4', display: '\u0968\u0968\u2013\u0968\u096b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '5', display: '\u0968\u096c\u2013\u0969\u0966'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/age', version: '1.0', code: '6', display: '\u0969\u0967 \u0935\u093e \u0924\u094d\u092f\u0938\u092d\u0928\u094d\u0926\u093e \u092e\u093e\u0925\u093f'}}
                    ]
                },
                {
                    linkId: 'situation',
                    text: '\u0905\u0939\u093f\u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0915\u094b \u0905\u0935\u0938\u094d\u0925\u093e\u0932\u093e\u0908 \u0938\u092c\u0948\u092d\u0928\u094d\u0926\u093e \u0930\u093e\u092e\u094d\u0930\u094b\u0938\u0901\u0917 \u0915\u0938\u0932\u0947 \u0935\u094d\u092f\u093e\u0916\u094d\u092f\u093e \u0917\u0930\u094d\u091b?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '1', display: '\u092e \u0935\u093f\u0926\u094d\u092f\u093e\u0932\u092f \u091c\u093e\u0928\u094d\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '2', display: '\u092e \u0915\u0932\u0947\u091c\u092e\u093e \u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '3', display: '\u092e \u0915\u094b\u0930\u094d\u0938 \u0935\u093e \u0924\u093e\u0932\u093f\u092e \u0917\u0930\u094d\u0926\u0948\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '4', display: '\u092e \u0915\u093e\u092e \u0917\u0930\u094d\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '5', display: '\u092e \u0918\u0930\u092e\u093e \u091b\u0941 \u0930 \u0905\u0917\u093e\u0921\u093f \u0915\u0947 \u0917\u0930\u094d\u0928\u0947 \u0905\u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '6', display: '\u092e \u0906\u0936\u094d\u0930\u092f\u0917\u0943\u0939\u092e\u093e \u092c\u0938\u094d\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '7', display: '\u092e \u0939\u094b\u0938\u094d\u091f\u0947\u0932\u092e\u093e \u092c\u0938\u094d\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: '8', display: '\u092e \u0938\u093e\u091d\u093e \u092c\u093e\u0938\u092e\u093e \u092c\u0938\u094d\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/situation', version: '1.0', code: 'other', display: '\u0905\u0928\u094d\u092f'}}
                    ]
                },
                {
                    linkId: 'livingSituation',
                    text: '\u0924\u092a\u093e\u0908\u0902 \u0905\u0939\u093f\u0932\u0947 \u0915\u0939\u093e\u0901 \u092c\u0938\u094d\u0928\u0941\u0939\u0941\u0928\u094d\u091b?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '1', display: '\u092a\u0930\u093f\u0935\u093e\u0930\u0938\u0901\u0917'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '2', display: '\u0906\u092b\u0928\u094d\u0924\u0938\u0901\u0917'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '3', display: '\u0906\u0936\u094d\u0930\u092f\u0917\u0943\u0939\u092e\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '4', display: '\u0939\u094b\u0938\u094d\u091f\u0947\u0932\u092e\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '5', display: '\u0938\u093e\u091d\u093e \u092c\u093e\u0938\u092e\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '6', display: '\u090f\u0915\u094d\u0932\u0948'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '7', display: '\u092e\u0947\u0930\u094b \u092c\u0938\u094b\u092c\u093e\u0938\u0915\u094b \u0905\u0935\u0938\u094d\u0925\u093e \u0905\u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u091b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: '8', display: '\u092a\u091b\u093f \u092d\u0928\u094d\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/living-situation', version: '1.0', code: 'other', display: '\u0905\u0928\u094d\u092f'}}
                    ]
                },
                {
                    linkId: 'orgSupport',
                    text: '\u0905\u0939\u093f\u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0915\u0941\u0928\u0948 \u0938\u0902\u0938\u094d\u0925\u093e, \u0935\u093f\u0926\u094d\u092f\u093e\u0932\u092f, \u0938\u092e\u0942\u0939 \u0935\u093e \u092a\u0930\u093e\u092e\u0930\u094d\u0936 \u0915\u0947\u0928\u094d\u0926\u094d\u0930\u0932\u0947 \u0938\u0939\u092f\u094b\u0917 \u0917\u0930\u093f\u0930\u0939\u0947\u0915\u094b \u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support', version: '1.0', code: 'yes', display: '\u0939\u094b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support', version: '1.0', code: 'no', display: '\u091b\u0948\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support', version: '1.0', code: 'unsure', display: '\u0925\u093e\u0939\u093e \u091b\u0948\u0928'}}
                    ]
                },
                {
                    linkId: 'orgName',
                    text: '\u092f\u0926\u093f \u0939\u094b \u092d\u0928\u0947: \u0915\u0941\u0928 \u0938\u0902\u0938\u094d\u0925\u093e \u0935\u093e \u0920\u093e\u0909\u0901\u092c\u093e\u091f?',
                    type: 'string',
                    disabledDisplay: 'protected',
                    enableWhen: [{question: 'orgSupport', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/org-support', code: 'yes'}}]
                },
                {
                    linkId: 'futureOutlook',
                    text: '\u0906\u092b\u094d\u0928\u094b \u092d\u0935\u093f\u0937\u094d\u092f\u0915\u094b \u092c\u093e\u0930\u0947\u092e\u093e \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0905\u0939\u093f\u0932\u0947 \u0915\u0938\u094d\u0924\u094b \u0932\u093e\u0917\u094d\u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook', version: '1.0', code: '1', display: '\u092e\u0938\u0901\u0917 \u0938\u094d\u092a\u0937\u094d\u091f \u092f\u094b\u091c\u0928\u093e \u091b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook', version: '1.0', code: '2', display: '\u0915\u0947\u0939\u0940 \u0935\u093f\u091a\u093e\u0930\u0939\u0930\u0942 \u091b\u0928\u094d, \u0924\u0930 \u0905\u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook', version: '1.0', code: '3', display: '\u092e\u0947\u0930\u094b \u0932\u093e\u0917\u093f \u0915\u0947 \u0938\u092e\u094d\u092d\u0935 \u091b \u0925\u093e\u0939\u093e \u091b\u0948\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/future-outlook', version: '1.0', code: '4', display: '\u0905\u0939\u093f\u0932\u0947 \u092e\u0932\u093e\u0908 \u0915\u0941\u0928\u0948 \u0938\u092e\u094d\u092d\u093e\u0935\u0928\u093e \u0926\u0947\u0916\u093f\u0901\u0926\u0948\u0928'}}
                    ]
                }
            ]
        },

        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        // \u0916\u0923\u094d\u0921 \u0968: \u0906\u0927\u093e\u0930\u092d\u0942\u0924 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e \u0930 \u0938\u094d\u0925\u093f\u0930\u0924\u093e
        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        {
            linkId: 'basicNeeds',
            text: '\u0906\u0927\u093e\u0930\u092d\u0942\u0924 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e \u0930 \u0938\u094d\u0925\u093f\u0930\u0924\u093e',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'missingItems',
                    text: '\u0905\u0939\u093f\u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0926\u0948\u0928\u093f\u0915 \u091c\u0940\u0935\u0928\u0915\u094b \u0932\u093e\u0917\u093f \u0915\u0947\u0939\u0940 \u091c\u0930\u0941\u0930\u0940 \u0915\u0941\u0930\u093e\u0915\u094b \u0915\u092e\u0940 \u091b?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '1', display: '\u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u092c\u0938\u094b\u092c\u093e\u0938'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '2', display: '\u092a\u0930\u094d\u092f\u093e\u092a\u094d\u0924 \u0916\u093e\u0928\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '3', display: '\u0938\u092b\u093e \u0916\u093e\u0928\u0947\u092a\u093e\u0928\u0940'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '4', display: '\u0921\u093e\u0915\u094d\u091f\u0930 \u0935\u093e \u0914\u0937\u0927\u093f\u0915\u094b \u0932\u093e\u0917\u093f \u092a\u0948\u0938\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '5', display: '\u0932\u0941\u0917\u093e \u0935\u093e \u091c\u0941\u0924\u094d\u0924\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '6', display: '\u0938\u0930\u0938\u092b\u093e\u0908\u0915\u093e \u0938\u093e\u092e\u0917\u094d\u0930\u0940'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: '7', display: '\u092f\u093e\u0924\u093e\u092f\u093e\u0924\u0915\u094b \u0932\u093e\u0917\u093f \u092a\u0948\u0938\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: 'none', display: '\u092f\u0940 \u092e\u0927\u094d\u092f\u0947 \u0915\u0947\u0939\u0940 \u092a\u0928\u093f \u0939\u094b\u0907\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/missing-items', version: '1.0', code: 'other', display: '\u0905\u0928\u094d\u092f'}}
                    ]
                },
                {
                    linkId: 'housingSafe',
                    text: '\u0905\u0939\u093f\u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0915\u094b \u092c\u0938\u094b\u092c\u093e\u0938 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '1', display: '\u0939\u094b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '2', display: '\u0905\u0932\u093f\u0915\u0924\u093f \u0939\u094b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '3', display: '\u0905\u0932\u093f\u0915\u0924\u093f \u091b\u0948\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '4', display: '\u091b\u0948\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/housing-safe', version: '1.0', code: '5', display: '\u0925\u093e\u0939\u093e \u091b\u0948\u0928'}}
                    ]
                },
                {
                    linkId: 'medicalAccess',
                    text: '\u0906\u0935\u0936\u094d\u092f\u0915 \u092a\u0930\u0947\u0915\u094b \u092c\u0947\u0932\u093e \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e \u0938\u0947\u0935\u093e \u0909\u092a\u0932\u092c\u094d\u0927 \u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access', version: '1.0', code: '1', display: '\u0939\u094b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access', version: '1.0', code: '2', display: '\u0906\u0902\u0936\u093f\u0915 \u0930\u0942\u092a\u092e\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access', version: '1.0', code: '3', display: '\u091b\u0948\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/medical-access', version: '1.0', code: '4', display: '\u0925\u093e\u0939\u093e \u091b\u0948\u0928'}}
                    ]
                },
                {
                    linkId: 'needsResolutionFirst',
                    text: '\u0935\u093f\u0926\u094d\u092f\u093e\u0932\u092f, \u0905\u0927\u094d\u092f\u092f\u0928 \u0935\u093e \u092d\u0935\u093f\u0937\u094d\u092f\u0915\u094b \u092c\u093e\u0930\u0947\u092e\u093e \u0938\u094b\u091a\u094d\u0928\u0941\u0905\u0918\u093f \u092a\u0939\u093f\u0932\u0947 \u0938\u092e\u093e\u0927\u093e\u0928 \u0917\u0930\u094d\u0928\u0941\u092a\u0930\u094d\u0928\u0947 \u0915\u0941\u0928\u0948 \u0915\u0941\u0930\u093e \u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first', version: '1.0', code: 'yes', display: '\u0939\u094b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first', version: '1.0', code: 'maybe', display: '\u0939\u094b\u0932\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/needs-resolution-first', version: '1.0', code: 'no', display: '\u091b\u0948\u0928'}}
                    ]
                },
                {
                    linkId: 'urgentIssue',
                    text: '\u092f\u0926\u093f \u0939\u094b \u0935\u093e \u0939\u094b\u0932\u093e \u092d\u0928\u0947: \u0905\u0939\u093f\u0932\u0947 \u0938\u092c\u0948\u092d\u0928\u094d\u0926\u093e \u092e\u0939\u0924\u094d\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u0915\u0941\u0930\u093e \u0915\u0947 \u0939\u094b?',
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

        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        // \u0916\u0923\u094d\u0921 \u0969: \u0936\u093f\u0915\u094d\u0937\u093e
        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        {
            linkId: 'education',
            text: '\u0936\u093f\u0915\u094d\u0937\u093e',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'currentlyStudying',
                    text: '\u0905\u0939\u093f\u0932\u0947 \u0924\u092a\u093e\u0908\u0902 \u0935\u093f\u0926\u094d\u092f\u093e\u0932\u092f, \u0915\u0932\u0947\u091c, \u0915\u094b\u0930\u094d\u0938 \u0935\u093e \u0924\u093e\u0932\u093f\u092e\u092e\u093e \u0939\u0941\u0928\u0941\u0939\u0941\u0928\u094d\u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', version: '1.0', code: 'yes', display: '\u0939\u094b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', version: '1.0', code: 'no', display: '\u091b\u0948\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', version: '1.0', code: 'want-to', display: '\u0905\u0939\u093f\u0932\u0947 \u091b\u0948\u0928, \u0924\u0930 \u0905\u0917\u093e\u0921\u093f \u092c\u0922\u094d\u0928 \u091a\u093e\u0939\u0928\u094d\u091b\u0941'}}
                    ]
                },
                {
                    linkId: 'educationConcern',
                    text: '\u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0936\u093f\u0915\u094d\u0937\u093e \u0935\u093e \u0924\u093e\u0932\u093f\u092e \u091c\u093e\u0930\u0940 \u0930\u093e\u0916\u094d\u0928 \u0928\u0938\u0915\u094d\u0928\u0947 \u091a\u093f\u0928\u094d\u0924\u093e \u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'currentlyStudying', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', code: 'yes'}},
                        {question: 'currentlyStudying', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', code: 'want-to'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', version: '1.0', code: 'yes', display: '\u0939\u094b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', version: '1.0', code: 'maybe', display: '\u0939\u094b\u0932\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', version: '1.0', code: 'no', display: '\u091b\u0948\u0928'}}
                    ]
                },
                {
                    linkId: 'educationBarriers',
                    text: '\u0905\u0939\u093f\u0932\u0947 \u0935\u093f\u0926\u094d\u092f\u093e\u0932\u092f, \u0915\u0932\u0947\u091c, \u0915\u094b\u0930\u094d\u0938 \u0935\u093e \u0924\u093e\u0932\u093f\u092e \u0924\u092a\u093e\u0908\u0902\u0915\u094b \u0932\u093e\u0917\u093f \u0915\u0947 \u0915\u0941\u0930\u093e \u0917\u093e\u0939\u094d\u0930\u094b \u091b?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'currentlyStudying', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/currently-studying', code: 'yes'}},
                        {question: 'educationConcern', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', code: 'yes'}},
                        {question: 'educationConcern', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-concern', code: 'maybe'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '1', display: '\u0936\u0941\u0932\u094d\u0915 \u0935\u093e \u0916\u0930\u094d\u091a'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '2', display: '\u0905\u0927\u094d\u092f\u092f\u0928 \u0938\u093e\u092e\u0917\u094d\u0930\u0940'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '3', display: '\u0932\u0941\u0917\u093e \u0935\u093e \u092f\u0941\u0928\u093f\u092b\u0930\u094d\u092e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '4', display: '\u092f\u093e\u0924\u093e\u092f\u093e\u0924'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '5', display: '\u092c\u0938\u094b\u092c\u093e\u0938'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '6', display: '\u092a\u093e\u0930\u093f\u0935\u093e\u0930\u093f\u0915 \u091c\u093f\u092e\u094d\u092e\u0947\u0935\u093e\u0930\u0940'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '7', display: '\u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '8', display: '\u0925\u0915\u093e\u0928 \u0935\u093e \u0905\u0924\u094d\u092f\u0927\u093f\u0915 \u092d\u093e\u0930'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: '9', display: '\u091c\u093e\u0928\u0915\u093e\u0930\u0940\u0915\u094b \u0915\u092e\u0940'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: 'none', display: '\u092f\u0940 \u092e\u0927\u094d\u092f\u0947 \u0915\u0947\u0939\u0940 \u092a\u0928\u093f \u0939\u094b\u0907\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/education-barriers', version: '1.0', code: 'other', display: '\u0905\u0928\u094d\u092f'}}
                    ]
                }
            ]
        },

        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        // \u0916\u0923\u094d\u0921 \u096a: \u0926\u093f\u0936\u093e \u0930 \u0905\u0935\u0938\u0930\u0939\u0930\u0942
        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        {
            linkId: 'direction',
            text: '\u0926\u093f\u0936\u093e \u0930 \u0905\u0935\u0938\u0930\u0939\u0930\u0942',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'generalDirection',
                    text: 'अहिले तपाईं अवसरहरू कुन दिशामा खोज्न चाहनुहुन्छ?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', version: '1.0', code: 'germany', display: '\u092e\u0932\u093e\u0908 \u091c\u0930\u094d\u092e\u0928\u0940\u092e\u093e \u0905\u0935\u0938\u0930\u0939\u0930\u0942\u092e\u093e \u0930\u0941\u091a\u093f \u091b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', version: '1.0', code: 'nepal', display: '\u092e\u0932\u093e\u0908 \u0928\u0947\u092a\u093e\u0932\u092e\u093e \u0905\u0935\u0938\u0930\u0939\u0930\u0942\u092e\u093e \u0930\u0941\u091a\u093f \u091b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', version: '1.0', code: 'both', display: '\u0926\u0941\u0935\u0948 \u092e\u0947\u0930\u094b \u0932\u093e\u0917\u093f \u0930\u094b\u091a\u0915 \u0939\u0941\u0928 \u0938\u0915\u094d\u091b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-direction', version: '1.0', code: 'unsure', display: '\u0905\u0939\u093f\u0932\u0947 \u092e\u0932\u093e\u0908 \u0925\u093e\u0939\u093e \u091b\u0948\u0928'}}
                    ]
                }
            ]
        },

        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        // \u0916\u0923\u094d\u0921 \u096b: \u092d\u093e\u0937\u093e \u0930 \u0938\u093f\u0915\u093e\u0907
        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        {
            linkId: 'language',
            text: '\u092d\u093e\u0937\u093e \u0930 \u0938\u093f\u0915\u093e\u0907',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'wantsLanguage',
                    text: '\u0905\u0939\u093f\u0932\u0947 \u0924\u092a\u093e\u0908\u0902 \u0915\u0941\u0928\u0948 \u092d\u093e\u0937\u093e \u0938\u093f\u0915\u094d\u0928 \u0935\u093e \u0938\u0941\u0927\u093e\u0930\u094d\u0928 \u091a\u093e\u0939\u0928\u0941\u0939\u0941\u0928\u094d\u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', version: '1.0', code: 'yes', display: '\u0939\u094b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', version: '1.0', code: 'maybe', display: '\u0939\u094b\u0932\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', version: '1.0', code: 'no', display: '\u091b\u0948\u0928'}}
                    ]
                },
                {
                    linkId: 'whichLanguage',
                    text: '\u0905\u0939\u093f\u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0915\u094b \u0932\u093e\u0917\u093f \u0938\u092c\u0948\u092d\u0928\u094d\u0926\u093e \u092e\u0939\u0924\u094d\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u092d\u093e\u0937\u093e \u0915\u0941\u0928 \u0939\u094b?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'yes'}},
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'maybe'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'german', display: '\u091c\u0930\u094d\u092e\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'english', display: '\u0905\u0919\u094d\u0917\u094d\u0930\u0947\u091c\u0940'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'both', display: '\u0926\u0941\u0935\u0948'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'other', display: '\u0905\u0930\u094d\u0915\u094b \u092d\u093e\u0937\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', version: '1.0', code: 'unsure', display: '\u0905\u0939\u093f\u0932\u0947 \u0925\u093e\u0939\u093e \u091b\u0948\u0928'}}
                    ]
                },
                {
                    linkId: 'languageMotivation',
                    text: '\u092f\u094b \u0905\u0939\u093f\u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0915\u094b \u0932\u093e\u0917\u093f \u0915\u093f\u0928 \u092e\u0939\u0924\u094d\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u0939\u0941\u0928\u094d\u091b?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'yes'}},
                        {question: 'wantsLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/wants-language', code: 'maybe'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '1', display: '\u091c\u0930\u094d\u092e\u0928\u0940\u092e\u093e \u0924\u093e\u0932\u093f\u092e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '2', display: '\u091c\u0930\u094d\u092e\u0928\u0940\u092e\u093e \u0915\u093e\u092e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '3', display: '\u0909\u091a\u094d\u091a \u0905\u0927\u094d\u092f\u092f\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '4', display: '\u0928\u0947\u092a\u093e\u0932\u092e\u093e \u092a\u0930\u094d\u092f\u091f\u0928 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092e\u093e \u0915\u093e\u092e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '5', display: '\u0928\u0947\u092a\u093e\u0932\u092e\u093e \u0930\u093e\u092e\u094d\u0930\u094b \u0905\u0935\u0938\u0930'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '6', display: '\u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924 \u0935\u093f\u0915\u093e\u0938'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '7', display: '\u092e \u0905\u0935\u0938\u0930\u0939\u0930\u0942 \u0916\u0941\u0932\u094d\u0932\u093e \u0930\u093e\u0916\u094d\u0928 \u091a\u093e\u0939\u0928\u094d\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: '8', display: '\u0905\u0939\u093f\u0932\u0947 \u0920\u094d\u092f\u093e\u0915\u094d\u0915\u0948 \u0925\u093e\u0939\u093e \u091b\u0948\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/language-motivation', version: '1.0', code: 'other-open', display: '\u0905\u0928\u094d\u092f'}}
                    ]
                },
                {
                    linkId: 'germanLevel',
                    text: '\u0924\u092a\u093e\u0908\u0902\u0915\u094b \u0905\u0939\u093f\u0932\u0947\u0915\u094b \u091c\u0930\u094d\u092e\u0928 \u092d\u093e\u0937\u093e\u0915\u094b \u0938\u094d\u0924\u0930 \u0915\u0938\u094d\u0924\u094b \u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'whichLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', code: 'german'}},
                        {question: 'whichLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', code: 'both'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '1', display: '\u0915\u0947\u0939\u0940 \u091c\u094d\u091e\u093e\u0928 \u091b\u0948\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '2', display: '\u0915\u0947\u0939\u0940 \u0936\u092c\u094d\u0926 \u0930 \u0935\u093e\u0915\u094d\u092f\u0939\u0930\u0942'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '3', display: 'A1'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '4', display: 'A2'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '5', display: 'B1'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '6', display: 'B2 \u0935\u093e \u0924\u094d\u092f\u0938\u092d\u0928\u094d\u0926\u093e \u092e\u093e\u0925\u093f'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/german-level', version: '1.0', code: '7', display: '\u0925\u093e\u0939\u093e \u091b\u0948\u0928'}}
                    ]
                },
                {
                    linkId: 'englishLevel',
                    text: '\u0924\u092a\u093e\u0908\u0902\u0915\u094b \u0905\u0939\u093f\u0932\u0947\u0915\u094b \u0905\u0919\u094d\u0917\u094d\u0930\u0947\u091c\u0940 \u092d\u093e\u0937\u093e\u0915\u094b \u0938\u094d\u0924\u0930 \u0915\u0938\u094d\u0924\u094b \u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'whichLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', code: 'english'}},
                        {question: 'whichLanguage', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/which-language', code: 'both'}}
                    ],
                    enableBehavior: 'any',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '1', display: '\u092e \u0905\u0919\u094d\u0917\u094d\u0930\u0947\u091c\u0940 \u0905\u0932\u093f\u0915\u0924\u093f \u092e\u093e\u0924\u094d\u0930 \u092c\u0941\u091d\u094d\u091b\u0941 \u0930 \u092c\u094b\u0932\u094d\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '2', display: '\u092e \u0905\u0919\u094d\u0917\u094d\u0930\u0947\u091c\u0940\u092e\u093e \u0938\u093e\u0927\u093e\u0930\u0923 \u0915\u0941\u0930\u093e\u0915\u093e\u0928\u0940 \u0917\u0930\u094d\u0928 \u0938\u0915\u094d\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '3', display: '\u092e \u0926\u0948\u0928\u093f\u0915 \u091c\u0940\u0935\u0928\u092e\u093e \u0905\u0919\u094d\u0917\u094d\u0930\u0947\u091c\u0940\u092e\u093e \u092a\u094d\u0930\u093e\u092f: \u0930\u093e\u092e\u094d\u0930\u094b\u0938\u0901\u0917 \u0938\u091e\u094d\u091a\u093e\u0930 \u0917\u0930\u094d\u0928 \u0938\u0915\u094d\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '4', display: '\u092e \u0905\u0919\u094d\u0917\u094d\u0930\u0947\u091c\u0940\u092e\u093e \u0935\u093f\u0926\u094d\u092f\u093e\u0932\u092f, \u0915\u093e\u092e \u0935\u093e \u092f\u094b\u091c\u0928\u093e\u0915\u094b \u092c\u093e\u0930\u0947\u092e\u093e \u092a\u0928\u093f \u0915\u0941\u0930\u093e \u0917\u0930\u094d\u0928 \u0938\u0915\u094d\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/english-level', version: '1.0', code: '5', display: '\u0925\u093e\u0939\u093e \u091b\u0948\u0928'}}
                    ]
                },
                {
                    linkId: 'hasSmartphone',
                    text: '\u0924\u092a\u093e\u0908\u0902\u0938\u0901\u0917 \u0938\u094d\u092e\u093e\u0930\u094d\u091f\u092b\u094b\u0928 \u0935\u093e \u0928\u093f\u092f\u092e\u093f\u0924 \u0930\u0942\u092a\u092e\u093e \u0938\u093f\u0915\u094d\u0928 \u0938\u0915\u094d\u0928\u0947 \u0905\u0930\u094d\u0915\u094b \u0909\u092a\u0915\u0930\u0923 \u091b?',
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
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/has-smartphone', version: '1.0', code: '1', display: '\u091b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/has-smartphone', version: '1.0', code: '2', display: '\u0906\u0902\u0936\u093f\u0915 \u0930\u0942\u092a\u092e\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/has-smartphone', version: '1.0', code: '3', display: '\u091b\u0948\u0928'}}
                    ]
                }
            ]
        },

        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        // \u0916\u0923\u094d\u0921 \u096c: \u092d\u0935\u093f\u0937\u094d\u092f \u0930 \u0905\u0930\u094d\u0915\u094b \u0915\u0926\u092e\u0939\u0930\u0942
        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        {
            linkId: 'future',
            text: '\u092d\u0935\u093f\u0937\u094d\u092f \u0930 \u0905\u0930\u094d\u0915\u094b \u0915\u0926\u092e\u0939\u0930\u0942',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'interestPath',
                    text: '\u0905\u0939\u093f\u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0915\u0941\u0928 \u092c\u093e\u091f\u094b\u092e\u093e \u0938\u092c\u0948\u092d\u0928\u094d\u0926\u093e \u0930\u0941\u091a\u093f \u091b?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'training-de', display: '\u091c\u0930\u094d\u092e\u0928\u0940\u092e\u093e \u0924\u093e\u0932\u093f\u092e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'work-de', display: '\u091c\u0930\u094d\u092e\u0928\u0940\u092e\u093e \u0915\u093e\u092e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'study', display: '\u0909\u091a\u094d\u091a \u0905\u0927\u094d\u092f\u092f\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'tourism-nepal', display: '\u0928\u0947\u092a\u093e\u0932\u092e\u093e \u092a\u0930\u094d\u092f\u091f\u0928 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092e\u093e \u0915\u093e\u092e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'training-nepal', display: '\u0928\u0947\u092a\u093e\u0932\u092e\u093e \u0935\u094d\u092f\u093e\u0935\u0938\u093e\u092f\u093f\u0915 \u0924\u093e\u0932\u093f\u092e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'other-nepal', display: '\u0928\u0947\u092a\u093e\u0932\u092e\u093e \u0905\u0930\u094d\u0915\u094b \u0915\u093e\u092e\u0915\u094b \u0938\u092e\u094d\u092d\u093e\u0935\u0928\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'orientation', display: '\u092e \u092a\u0939\u093f\u0932\u0947 \u092e\u0947\u0930\u093e \u0905\u0935\u0938\u0930\u0939\u0930\u0942 \u0930\u093e\u092e\u094d\u0930\u094b\u0938\u0901\u0917 \u092c\u0941\u091d\u094d\u0928 \u091a\u093e\u0939\u0928\u094d\u091b\u0941'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'unsure', display: '\u0905\u0939\u093f\u0932\u0947 \u092e\u0932\u093e\u0908 \u0915\u0941\u0928 \u0926\u093f\u0936\u093e\u092e\u093e \u091c\u093e\u0928\u0947 \u092d\u0928\u0947\u0930 \u0925\u093e\u0939\u093e \u091b\u0948\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/interest-path', version: '1.0', code: 'other', display: '\u0905\u0928\u094d\u092f'}}
                    ]
                },
                {
                    linkId: 'nepalInterests',
                    text: '\u092f\u0926\u093f \u0924\u092a\u093e\u0908\u0902 \u0928\u0947\u092a\u093e\u0932\u092e\u093e \u0905\u0935\u0938\u0930\u0939\u0930\u0942\u092c\u093e\u0930\u0947 \u0938\u094b\u091a\u094d\u0928\u0941\u0939\u0941\u0928\u094d\u091b \u092d\u0928\u0947: \u0924\u094d\u092f\u0939\u093e\u0901 \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0938\u092c\u0948\u092d\u0928\u094d\u0926\u093e \u0915\u0947\u092e\u093e \u0930\u0941\u091a\u093f \u091b?',
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
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '1', display: '\u0935\u093f\u0926\u094d\u092f\u093e\u0932\u092f \u0935\u093e \u0915\u0932\u0947\u091c \u091c\u093e\u0930\u0940 \u0930\u093e\u0916\u094d\u0928\u0947'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '2', display: '\u0928\u0947\u092a\u093e\u0932\u092e\u093e \u0935\u094d\u092f\u093e\u0935\u0938\u093e\u092f\u093f\u0915 \u0924\u093e\u0932\u093f\u092e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '3', display: '\u092a\u0930\u094d\u092f\u091f\u0928 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092e\u093e \u0915\u093e\u092e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '4', display: '\u0905\u0919\u094d\u0917\u094d\u0930\u0947\u091c\u0940 \u0938\u093f\u0915\u094d\u0928\u0947'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '5', display: '\u0921\u093f\u091c\u093f\u091f\u0932 \u0938\u0940\u092a\u0939\u0930\u0942 \u0938\u093f\u0915\u094d\u0928\u0947'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '6', display: '\u0906\u0935\u0947\u0926\u0928 \u0935\u093e \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928\u092e\u093e \u0938\u0939\u092f\u094b\u0917'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '7', display: '\u0906\u092b\u094d\u0928\u0948 \u0938\u093e\u0928\u094b \u0906\u092e\u094d\u0926\u093e\u0928\u0940 \u092c\u0928\u093e\u0909\u0928\u0947'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: '8', display: '\u0905\u0939\u093f\u0932\u0947 \u0925\u093e\u0939\u093e \u091b\u0948\u0928'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/nepal-interests', version: '1.0', code: 'other-open', display: '\u0905\u0928\u094d\u092f'}}
                    ]
                },
                {
                    linkId: 'generalInterests',
                    text: '\u0924\u092a\u093e\u0908\u0902\u0932\u0947 \u0938\u093e\u092e\u093e\u0928\u094d\u092f\u0924\u092f\u093e \u0915\u0947 \u0930\u093e\u092e\u094d\u0930\u094b \u0915\u0932\u094d\u092a\u0928\u093e \u0917\u0930\u094d\u0928 \u0938\u0915\u094d\u0928\u0941\u0939\u0941\u0928\u094d\u091b?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    maxLength: 3,
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '1', display: '\u092e\u093e\u0928\u093f\u0938\u0939\u0930\u0942\u0938\u0901\u0917 \u0915\u093e\u092e \u0917\u0930\u094d\u0928\u0947'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '2', display: '\u092a\u0930\u094d\u092f\u091f\u0928 \u0935\u093e \u0938\u0947\u0935\u093e \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u092e\u093e \u0915\u093e\u092e \u0917\u0930\u094d\u0928\u0947'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '3', display: '\u0905\u0927\u094d\u092f\u092f\u0928 \u0917\u0930\u0947\u0930 \u092a\u094d\u0930\u092e\u093e\u0923\u092a\u0924\u094d\u0930 \u0932\u093f\u0928\u0947'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '4', display: '\u0935\u094d\u092f\u093e\u0935\u0939\u093e\u0930\u093f\u0915 \u0915\u093e\u092e \u0917\u0930\u094d\u0928\u0947'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '5', display: '\u0935\u094d\u092f\u0935\u0938\u094d\u0925\u093f\u0924 \u0935\u093e \u0915\u093e\u0930\u094d\u092f\u093e\u0932\u092f\u092e\u093e \u0915\u093e\u092e \u0917\u0930\u094d\u0928\u0947'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '6', display: '\u0915\u0947\u0939\u0940 \u0938\u093f\u0930\u094d\u091c\u0928\u093e\u0924\u094d\u092e\u0915 \u0915\u093e\u092e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '7', display: '\u0915\u0947\u0939\u0940 \u0921\u093f\u091c\u093f\u091f\u0932 \u0915\u0941\u0930\u093e \u0938\u093f\u0915\u094d\u0928\u0947'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/general-interests', version: '1.0', code: '8', display: '\u092e \u0905\u091d\u0948 \u0905\u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u091b\u0941'}}
                    ]
                }
            ]
        },

        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        // \u0916\u0923\u094d\u0921 \u096d: \u092d\u093e\u0930 \u0930 \u0938\u0939\u092f\u094b\u0917
        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        {
            linkId: 'supportSection',
            text: '\u092d\u093e\u0930 \u0930 \u0938\u0939\u092f\u094b\u0917',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'personalBurden',
                    text: '\u0905\u0939\u093f\u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0927\u0947\u0930\u0948 \u092d\u093e\u0930\u0940 \u0932\u093e\u0917\u0947\u0915\u094b \u0930 \u0915\u0938\u0948\u0938\u0901\u0917 \u0915\u0941\u0930\u093e \u0917\u0930\u094d\u0928 \u091a\u093e\u0939\u0928\u0941\u092d\u090f\u0915\u094b \u0915\u0941\u0928\u0948 \u0915\u0941\u0930\u093e \u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden', version: '1.0', code: 'yes', display: '\u091b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden', version: '1.0', code: 'maybe', display: '\u092a\u091b\u093f \u0939\u094b\u0932\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/personal-burden', version: '1.0', code: 'no', display: '\u091b\u0948\u0928'}}
                    ]
                },
                {
                    linkId: 'helpfulSupport',
                    text: '\u0905\u0939\u093f\u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0915\u094b \u0932\u093e\u0917\u093f \u0938\u092c\u0948\u092d\u0928\u094d\u0926\u093e \u0909\u092a\u092f\u094b\u0917\u0940 \u0938\u0939\u092f\u094b\u0917 \u0915\u0947 \u0939\u0941\u0928\u094d\u091b?',
                    type: 'open-choice',
                    disabledDisplay: 'protected',
                    maxLength: 3,
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '1', display: '\u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928 \u0915\u0941\u0930\u093e\u0915\u093e\u0928\u0940'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '2', display: '\u091c\u0930\u094d\u092e\u0928 \u092d\u093e\u0937\u093e \u0938\u093f\u0915\u094d\u0928\u092e\u093e \u0938\u0939\u092f\u094b\u0917'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '3', display: '\u0905\u0919\u094d\u0917\u094d\u0930\u0947\u091c\u0940 \u092d\u093e\u0937\u093e \u0938\u093f\u0915\u094d\u0928\u092e\u093e \u0938\u0939\u092f\u094b\u0917'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '4', display: '\u0905\u0927\u094d\u092f\u092f\u0928 \u092f\u094b\u091c\u0928\u093e'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '5', display: '\u0915\u093e\u0917\u091c\u093e\u0924\u092a\u0924\u094d\u0930\u092e\u093e \u0938\u0939\u092f\u094b\u0917'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '6', display: '\u092a\u094d\u0930\u0947\u0930\u0923\u093e \u0930 \u0938\u093e\u0925'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '7', display: '\u092a\u0930\u093f\u0935\u093e\u0930 \u0935\u093e \u0935\u093f\u0936\u094d\u0935\u093e\u0938\u092a\u093e\u0924\u094d\u0930 \u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0915\u094b \u0932\u093e\u0917\u093f \u091c\u093e\u0928\u0915\u093e\u0930\u0940'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '8', display: '\u0936\u093f\u0915\u094d\u0937\u093e \u0916\u0930\u094d\u091a\u092e\u093e \u0938\u0939\u092f\u094b\u0917'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '9', display: '\u092c\u0938\u094b\u092c\u093e\u0938 \u0935\u093e \u0906\u0927\u093e\u0930\u092d\u0942\u0924 \u0906\u092a\u0942\u0930\u094d\u0924\u093f\u092e\u093e \u0938\u0939\u092f\u094b\u0917'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: '10', display: '\u0928\u0947\u092a\u093e\u0932\u092e\u093e \u0924\u093e\u0932\u093f\u092e \u0935\u093e \u0915\u093e\u092e\u0915\u094b \u0932\u093e\u0917\u093f \u0938\u0939\u092f\u094b\u0917'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/helpful-support', version: '1.0', code: 'other-open', display: '\u0905\u0928\u094d\u092f'}}
                    ]
                }
            ]
        },

        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        // \u0916\u0923\u094d\u0921 \u096e: \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0938\u092e\u094d\u092a\u0930\u094d\u0915
        // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
        {
            linkId: 'contact',
            text: '\u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0938\u092e\u094d\u092a\u0930\u094d\u0915',
            type: 'group',
            disabledDisplay: 'protected',
            item: [
                {
                    linkId: 'contactSafe',
                    text: '\u0939\u093e\u092e\u0940\u0932\u0947 \u0924\u092a\u093e\u0908\u0902\u0932\u093e\u0908 \u0938\u093f\u0927\u0948 \u0938\u092e\u094d\u092a\u0930\u094d\u0915 \u0917\u0930\u094d\u0926\u093e \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u091b?',
                    type: 'choice',
                    disabledDisplay: 'protected',
                    answerOption: [
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', version: '1.0', code: 'yes', display: '\u0939\u094b'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', version: '1.0', code: 'org', display: '\u0938\u0902\u0938\u094d\u0925\u093e \u0935\u093e \u0935\u093f\u0936\u094d\u0935\u093e\u0938\u092a\u093e\u0924\u094d\u0930 \u0935\u094d\u092f\u0915\u094d\u0924\u093f \u092e\u093e\u0930\u094d\u092b\u0924 \u092e\u093e\u0924\u094d\u0930'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-safe', version: '1.0', code: 'no', display: '\u0905\u0939\u093f\u0932\u0947 \u0928\u0917\u0930\u094d\u0928\u0941\u0938\u094d'}}
                    ]
                },
                {
                    linkId: 'contactMethod',
                    text: 'तपाईंलाई कसरी सम्पर्क गर्न मन पर्छ?',
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
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: 'phone', display: 'फोन'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: 'email', display: 'इमेल'}},
                        {valueCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', version: '1.0', code: 'org', display: 'सम्पर्क व्यक्ति मार्फत'}}
                    ]
                },
                {
                    linkId: 'contactPhone',
                    text: 'तपाईंको फोन नम्बर',
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
                    text: 'तपाईंको इमेल ठेगाना',
                    type: 'string',
                    required: true,
                    disabledDisplay: 'protected',
                    enableWhen: [
                        {question: 'contactMethod', operator: '=', answerCoding: {system: 'http://heyfreeda.com/questionnaire/needs-assessment/coding/contact-method', code: 'email'}}
                    ]
                },
                {
                    linkId: 'contactPerson',
                    text: 'सम्पर्क व्यक्तिको नाम र उनको फोन नम्बर वा इमेल',
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
