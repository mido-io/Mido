import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

const resources = {
    en: {
        translation: translationEN,
    },
    ar: {
        translation: translationAR,
    },
};

i18n
    // Detect user language
    .use(LanguageDetector)
    // Pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // Init i18next
    .init({
        resources,
        fallbackLng: 'en',
        debug: false,

        interpolation: {
            escapeValue: false, // React already safeguards from xss
        },
    });

export default i18n;
