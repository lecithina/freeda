import {useTranslation} from 'react-i18next';
import type {QuestionProps} from './QuestionRenderer.js';

export default function IntegerQuestion({question, value, onChange}: QuestionProps) {
    const {t} = useTranslation();
    const current = value[0]?.valueInteger ?? '';

    const minExt = question.extension?.find(
        e => e.url === 'http://hl7.org/fhir/StructureDefinition/minValue'
    );
    const maxExt = question.extension?.find(
        e => e.url === 'http://hl7.org/fhir/StructureDefinition/maxValue'
    );
    const min = minExt && 'valueInteger' in minExt ? minExt.valueInteger : undefined;
    const max = maxExt && 'valueInteger' in maxExt ? maxExt.valueInteger : undefined;

    return (
        <input
            type="number"
            value={current}
            onChange={e =>
                onChange(e.target.value ? [{valueInteger: e.target.value}] : [])
            }
            placeholder={t('questionnaire.enterNumber')}
            min={min}
            max={max}
            className="min-h-[44px] w-full rounded-lg border border-freeda-gray-light bg-freeda-gray px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-freeda-pink focus:outline-none"
        />
    );
}
