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

// Get initial language safely
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('language') || 'en';
  }
  return 'en'; // default fallback
}

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    ns: ['home', 'service'], // List your namespaces
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    keySeparator: '.',
    nsSeparator: false
  });

// Optional: Update language after initialization on client side
if (typeof window !== 'undefined') {
  const storedLanguage = window.localStorage.getItem('language');
  if (storedLanguage) {
    i18next.changeLanguage(storedLanguage);
  }
}

export default i18next;