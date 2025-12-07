import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from './en.json';
import arTranslation from './ar.json';
import frTranslation from './fr.json';
import rwTranslation from './rw.json';

// Define resources
const resources = {
  en: {
    translation: enTranslation
  },
  ar: {
    translation: arTranslation
  },
  fr: {
    translation: frTranslation
  },
  rw: {
    translation: rwTranslation
  }
};

// Supported languages
export const supportedLanguages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'rw', name: 'Kinyarwanda', dir: 'ltr' }
];

// Get language direction
export const getLanguageDirection = (langCode) => {
  const lang = supportedLanguages.find(l => l.code === langCode);
  return lang ? lang.dir : 'ltr';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      // order and from where user language should be detected
      order: ['localStorage', 'navigator'],
      
      // keys or params to lookup language from
      lookupLocalStorage: 'i18nextLng',
      
      // cache user language on
      caches: ['localStorage'],
      
      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement
    },
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;