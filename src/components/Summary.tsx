import {useTranslation} from 'react-i18next';
import type {Question, QuestionnaireValue} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

interface Props {
    groups: Question[];
    answers: Map<string, QuestionnaireValue[]>;
    onEdit: (step: number) => void;
    onSubmit: () => void;
    onBack: () => void;
}

function formatAnswer(answer: QuestionnaireValue[]): string {
    if (answer.length === 0) return '';

    return answer
        .map(v => {
            if (v.valueCoding?.display) return v.valueCoding.display;
            if (v.valueString) return v.valueString;
            if (v.valueInteger) return v.valueInteger;
            if (v.valueDate) return v.valueDate;
            if (v.valueBoolean !== undefined) return v.valueBoolean ? 'Yes' : 'No';
            if (v.valueDecimal) return v.valueDecimal;
            return '';
        })
        .filter(Boolean)
        .join(', ');
}

export default function Summary({groups, answers, onEdit, onSubmit, onBack}: Props) {
    const {t} = useTranslation();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase tracking-wide">{t('summary.title')}</h2>

            <div className="rounded-lg border border-freeda-pink bg-freeda-pink/10 p-4 text-center">
                <p className="text-gray-300">{t('summary.notYetSent')}</p>
                <button
                    type="button"
                    onClick={onSubmit}
                    className="mt-3 min-h-[44px] rounded-lg bg-freeda-pink px-8 py-3 font-bold text-white transition-colors hover:bg-freeda-pink-dark focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                >
                    {t('summary.submit')}
                </button>
            </div>

            {groups.map((group, groupIdx) => (
                <div
                    key={group.linkId}
                    className="rounded-lg border border-freeda-gray-light bg-freeda-gray p-4"
                >
                    <div className="mb-3 flex items-center justify-between">
                        <h3 className="font-semibold text-freeda-pink">{group.text}</h3>
                        <button
                            type="button"
                            onClick={() => onEdit(groupIdx)}
                            className="min-h-[44px] px-3 text-sm text-freeda-pink transition-colors hover:text-freeda-pink-light"
                        >
                            {t('summary.edit')}
                        </button>
                    </div>
                    <dl className="space-y-2">
                        {group.item?.map(question => {
                            if (question.type === 'display') return null;
                            const answer = answers.get(question.linkId) ?? [];
                            const display = formatAnswer(answer);

                            return (
                                <div key={question.linkId}>
                                    <dt className="text-sm text-gray-400">{question.text}</dt>
                                    <dd className="text-white">
                                        {display || (
                                            <span className="italic text-gray-500">
                                                {t('summary.noAnswer')}
                                            </span>
                                        )}
                                    </dd>
                                </div>
                            );
                        })}
                    </dl>
                </div>
            ))}

            <div className="flex justify-between pt-4">
                <button
                    type="button"
                    onClick={onBack}
                    className="min-h-[44px] rounded-lg border border-freeda-gray-light px-6 py-3 font-medium text-gray-300 transition-colors hover:border-gray-500"
                >
                    {t('questionnaire.back')}
                </button>
                <button
                    type="button"
                    onClick={onSubmit}
                    className="min-h-[44px] rounded-lg bg-freeda-pink px-8 py-3 font-bold text-white transition-colors hover:bg-freeda-pink-dark focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                >
                    {t('summary.submit')}
                </button>
            </div>
        </div>
    );
}
