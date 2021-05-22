import React from 'react';

import { I18nextProvider, initReactI18next } from 'react-i18next';

import i18next, { LanguageDetectorAsyncModule } from 'i18next';

import en from '@locales/en';

import { Root } from './Root';

const languageDetector: LanguageDetectorAsyncModule = {
    type: 'languageDetector',
    async: true,
    detect: () => 'en',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    cacheUserLanguage: () => {},
};

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        ns: ['content', 'error'],
        defaultNS: 'content',
        debug: true,
        react: {
            useSuspense: false,
        },
        resources: {
            en,
        },
    });

export function I18NProvider() {
    return (
        <I18nextProvider i18n={i18next}>
            <Root />
        </I18nextProvider>
    );
}
