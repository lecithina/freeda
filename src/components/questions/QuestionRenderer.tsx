import type {Question, QuestionnaireValue} from '@refinio/one.models/lib/models/QuestionnaireModel.js';
import ChoiceQuestion from './ChoiceQuestion.js';
import OpenChoiceQuestion from './OpenChoiceQuestion.js';
import StringQuestion from './StringQuestion.js';
import IntegerQuestion from './IntegerQuestion.js';
import DateQuestion from './DateQuestion.js';
import SliderQuestion from './SliderQuestion.js';
import DisplayQuestion from './DisplayQuestion.js';

export interface QuestionProps {
    question: Question;
    value: QuestionnaireValue[];
    onChange: (value: QuestionnaireValue[]) => void;
}

export default function QuestionRenderer({question, value, onChange}: QuestionProps) {
    switch (question.type) {
        case 'choice':
            return <ChoiceQuestion question={question} value={value} onChange={onChange} />;
        case 'open-choice':
            return <OpenChoiceQuestion question={question} value={value} onChange={onChange} />;
        case 'string':
            return <StringQuestion question={question} value={value} onChange={onChange} />;
        case 'integer':
            return <IntegerQuestion question={question} value={value} onChange={onChange} />;
        case 'date':
            return <DateQuestion question={question} value={value} onChange={onChange} />;
        case 'slider':
            return <SliderQuestion question={question} value={value} onChange={onChange} />;
        case 'display':
            return <DisplayQuestion question={question} />;
        default:
            return <p className="text-gray-500">Unsupported question type: {question.type}</p>;
    }
}
