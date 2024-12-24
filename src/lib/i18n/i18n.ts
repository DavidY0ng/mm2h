// i18n.ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Using require directly for JSON files
import enHome from './en/home.json'
import enOurService from './en/our-service.json'

//zh
import zhHome from './zh/home.json'
import zhOurService from './zh/our-service.json'

const resources = {
  en: {
    home: enHome,
    our_service: enOurService
  },
  zh: {
    home: zhHome,
    our_service: zhOurService
  }
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    ns: ['home', 'service'], // List your namespaces
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    keySeparator: '.',
    nsSeparator: false
  });

export default i18next;