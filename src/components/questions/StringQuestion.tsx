import {useTranslation} from 'react-i18next';
import type {QuestionProps} from './QuestionRenderer.js';

export default function StringQuestion({question, value, onChange}: QuestionProps) {
    const {t} = useTranslation();
    const text = value[0]?.valueString ?? '';
    const maxLength = question.maxLength;

    return (
        <div>
            <textarea
                value={text}
                onChange={e => onChange(e.target.value ? [{valueString: e.target.value}] : [])}
                placeholder={t('questionnaire.enterText')}
                maxLength={maxLength}
                rows={3}
                className="min-h-[44px] w-full rounded-lg border border-freeda-gray-light bg-freeda-gray px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-freeda-pink focus:outline-none"
            />
            {maxLength && (
                <p className="mt-1 text-right text-xs text-gray-500">
                    {text.length}/{maxLength}
                </p>
            )}
        </div>
    );
}
