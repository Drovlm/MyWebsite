import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    },
    ru: {
      translations: {
        translation: 'Русский перевод'
      }
    }
  },
  lng: 'en', // default language
  fallbackLng: 'en', // fallback language if not found
});