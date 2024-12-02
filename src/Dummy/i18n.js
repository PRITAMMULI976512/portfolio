// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      "welcomeMessage": "Hello, welcome",
    }
  },
  fr: {
    translation: {
    //   "welcomeMessage": "Bonjour, bienvenue",
    "welcomeMessage": "Bonjour, bienvenue",
    }
  },
  // Add more languages here
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

// import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     debug: true,
//     lang: "fr",
//     interpolation: {
//       escapeValue: false, // react already safes from xss
//     },
//     resources: {
//       en: {
//         translation: {
//           greeting: "Hello, welcome",
//         },
//       },
//       fr: {
//         translation: {
//           greeting: "Bonjour, Bienvenue",
//         },
//       },

//       hi: {
//         translation: {
//           greeting: "नमस्ते, स्वागत है",
//         },
//       },
//     },
//   });

// export default i18n;
