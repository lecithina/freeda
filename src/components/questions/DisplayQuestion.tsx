import type {Question} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

export default function DisplayQuestion({question}: {question: Question}) {
    return <p className="text-gray-400 italic">{question.text}</p>;
}
