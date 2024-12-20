// i18n.ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Using require directly for JSON files
import enHome from './en/home.json'

//zh
import zhHome from './zh/home.json'

const resources = {
  en: {
    home: enHome,
  },
  zh: {
    home: zhHome,
  }
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    ns: ['home'], // List your namespaces
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    keySeparator: '.',
    nsSeparator: false
  });

export default i18next;