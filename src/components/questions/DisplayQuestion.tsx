import type {Question} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export default function DisplayQuestion({question}: {question: Question}) {
    return (
        <div className="space-y-2 text-gray-300">
            {(question.text ?? '').split('\n').map((line, i) => (
                <p key={i}>{line}</p>
            ))}
        </div>
    );
}
