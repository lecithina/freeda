import {useTranslation} from 'react-i18next';
import type {QuestionProps} from './QuestionRenderer.js';

export default function OpenChoiceQuestion({question, value, onChange}: QuestionProps) {
    const {t} = useTranslation();
    const selectedCodes = new Set(
        value.filter(v => v.valueCoding?.code).map(v => v.valueCoding!.code!)
    );
    const otherText = value.find(v => v.valueString)?.valueString ?? '';

    const otherOption = question.answerOption?.find(
        o => o.valueCoding?.code === 'other' || o.valueCoding?.code === 'other-open'
    );
    const otherCode = otherOption?.valueCoding?.code;
    const isOtherSelected = otherCode ? selectedCodes.has(otherCode) : false;
    const otherPlaceholderKey =
        otherCode === 'other-open'
            ? 'questionnaire.otherPlaceholderOpen'
            : 'questionnaire.otherPlaceholder';

    const hasNoneOption = question.answerOption?.some(o => o.valueCoding?.code === 'none');
    const isNoneSelected = selectedCodes.has('none');

    // Max selections (maxLength on open-choice = max number of selections)
    const maxSelections = question.maxLength;
    const selectionCount = selectedCodes.size;
    const isAtLimit = maxSelections !== undefined && selectionCount >= maxSelections;

    function toggleOption(code: string) {
        const coding = question.answerOption?.find(o => o.valueCoding?.code === code)?.valueCoding;
        if (!coding) return;

        if (selectedCodes.has(code)) {
            // Deselect
            onChange(value.filter(v => v.valueCoding?.code !== code));
            return;
        }

        // Don't allow more selections if at limit
        if (isAtLimit) return;

        if (code === 'none') {
            // "nichts davon" selected → clear all others
            onChange([{valueCoding: coding}]);
            return;
        }

        if (isNoneSelected) {
            // Selecting something else → remove "nichts davon" first
            const withoutNone = value.filter(v => v.valueCoding?.code !== 'none');
            onChange([...withoutNone, {valueCoding: coding}]);
            return;
        }

        onChange([...value, {valueCoding: coding}]);
    }

    function updateOtherText(text: string) {
        const withoutOther = value.filter(v => !v.valueString);
        if (text) {
            onChange([...withoutOther, {valueString: text}]);
        } else {
            onChange(withoutOther);
        }
    }

    return (
        <div className="space-y-2">
            {maxSelections !== undefined && (
                <p className="text-sm text-gray-400">
                    {t('questionnaire.maxSelections', {max: maxSelections, current: selectionCount})}
                </p>
            )}
            {question.answerOption?.map(option => {
                const coding = option.valueCoding;
                if (!coding?.code) return null;
                const isSelected = selectedCodes.has(coding.code);
                const isOther = coding.code === otherCode;
                const isDisabled = !isSelected && isAtLimit;

                return (
                    <div key={coding.code}>
                        <button
                            type="button"
                            onClick={() => toggleOption(coding.code!)}
                            disabled={isDisabled}
                            className={`flex min-h-[44px] w-full items-center rounded-lg border px-4 py-3 text-left transition-colors ${
                                isSelected
                                    ? 'border-freeda-pink bg-freeda-pink/20 text-white'
                                    : isDisabled
                                      ? 'cursor-not-allowed border-freeda-gray-light bg-freeda-gray text-gray-600 opacity-50'
                                      : 'border-freeda-gray-light bg-freeda-gray text-gray-300 hover:border-gray-500'
                            }`}
                        >
                            <span
                                className={`mr-3 flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 ${
                                    isSelected
                                        ? 'border-freeda-pink bg-freeda-pink'
                                        : 'border-gray-500'
                                }`}
                            >
                                {isSelected && (
                                    <svg
                                        className="h-3 w-3 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                )}
                            </span>
                            {coding.display}
                        </button>
                        {isOther && isOtherSelected && (
                            <input
                                type="text"
                                placeholder={t(otherPlaceholderKey)}
                                value={otherText}
                                onChange={e => updateOtherText(e.target.value)}
                                className="mt-2 min-h-[44px] w-full rounded-lg border border-freeda-gray-light bg-freeda-gray px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-freeda-pink focus:outline-none"
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
