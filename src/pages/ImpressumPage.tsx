import {useTranslation} from 'react-i18next';

export default function ImpressumPage() {
    const {t} = useTranslation();

    return (
        <div className="py-8">
            <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide">
                {t('impressum.title')}
            </h2>

            <div className="space-y-6 text-gray-300">
                <section>
                    <h3 className="mb-2 text-lg font-semibold text-freeda-pink">
                        {t('impressum.legal')}
                    </h3>
                    <p className="font-bold">{t('impressum.orgName')}</p>
                    <p>{t('impressum.represented')}</p>
                </section>

                <section>
                    <p>{t('impressum.registry')}</p>
                    <p>{t('impressum.registryNumber')}</p>
                </section>

                <section>
                    <h3 className="mb-2 text-lg font-semibold text-freeda-pink">
                        {t('impressum.contact')}
                    </h3>
                    <p>
                        E-Mail:{' '}
                        <a
                            href="mailto:info@heyfreeda.com"
                            className="text-freeda-pink hover:underline"
                        >
                            info@heyfreeda.com
                        </a>
                    </p>
                    <p>
                        Web:{' '}
                        <a
                            href="https://heyfreeda.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-freeda-pink hover:underline"
                        >
                            heyfreeda.com
                        </a>
                    </p>
                </section>

                <section>
                    <h3 className="mb-2 text-lg font-semibold text-freeda-pink">
                        {t('impressum.donate')}
                    </h3>
                    <p>{t('impressum.orgName')}</p>
                    <p>{t('impressum.iban')}</p>
                    <p>{t('impressum.bank')}</p>
                </section>
            </div>
        </div>
    );
}
