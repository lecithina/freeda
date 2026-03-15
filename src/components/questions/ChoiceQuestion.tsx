import type {QuestionProps} from './QuestionRenderer.js';

export default function ChoiceQuestion({question, value, onChange}: QuestionProps) {
    const selectedCode = value[0]?.valueCoding?.code;

    return (
        <div className="space-y-2">
            {question.answerOption?.map(option => {
                const coding = option.valueCoding;
                if (!coding) return null;
                const isSelected = selectedCode === coding.code;

                return (
                    <button
                        key={coding.code}
                        type="button"
                        onClick={() => onChange([{valueCoding: coding}])}
                        className={`flex min-h-[44px] w-full items-center rounded-lg border px-4 py-3 text-left transition-colors ${
                            isSelected
                                ? 'border-freeda-pink bg-freeda-pink/20 text-white'
                                : 'border-freeda-gray-light bg-freeda-gray text-gray-300 hover:border-gray-500'
                        }`}
                    >
                        <span
                            className={`mr-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                                isSelected ? 'border-freeda-pink' : 'border-gray-500'
                            }`}
                        >
                            {isSelected && (
                                <span className="h-2.5 w-2.5 rounded-full bg-freeda-pink" />
                            )}
                        </span>
                        {coding.display}
                    </button>
                );
            })}
        </div>
    );
}
