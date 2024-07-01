import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import translationEN from './translations.json';
import translationRU from './translations.json';
import translationAR from './translations.json';

i18n.use(initReactI18next).init({
  lng: 'en', 
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
    ar: {
      translation: translationAR,
    },
  },
});
export default i18n;