import type {QuestionProps} from './QuestionRenderer.js';

export default function DateQuestion({question: _question, value, onChange}: QuestionProps) {
    const current = value[0]?.valueDate ?? '';

    return (
        <input
            type="date"
            value={current}
            onChange={e => onChange(e.target.value ? [{valueDate: e.target.value}] : [])}
            className="min-h-[44px] w-full rounded-lg border border-freeda-gray-light bg-freeda-gray px-4 py-3 text-white transition-colors focus:border-freeda-pink focus:outline-none [color-scheme:dark]"
        />
    );
}
