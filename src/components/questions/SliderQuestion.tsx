import type {QuestionProps} from './QuestionRenderer.js';

export default function SliderQuestion({question, value, onChange}: QuestionProps) {
    const options = question.answerOption ?? [];
    const selectedCode = value[0]?.valueCoding?.code;
    const currentIndex = selectedCode
        ? options.findIndex(o => o.valueCoding?.code === selectedCode)
        : -1;

    const firstLabel = options[0]?.valueCoding?.display;
    const lastLabel = options[options.length - 1]?.valueCoding?.display;
    const midLabel = options[Math.floor(options.length / 2)]?.valueCoding?.display;

    return (
        <div className="space-y-3">
            <input
                type="range"
                min={0}
                max={options.length - 1}
                value={currentIndex >= 0 ? currentIndex : Math.floor(options.length / 2)}
                onChange={e => {
                    const idx = parseInt(e.target.value);
                    const coding = options[idx]?.valueCoding;
                    if (coding) {
                        onChange([{valueCoding: coding}]);
                    }
                }}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-freeda-gray-light accent-freeda-pink"
            />
            <div className="flex justify-between text-xs text-gray-400">
                <span className="max-w-[30%]">{firstLabel}</span>
                {midLabel && <span className="max-w-[30%] text-center">{midLabel}</span>}
                <span className="max-w-[30%] text-right">{lastLabel}</span>
            </div>
        </div>
    );
}
