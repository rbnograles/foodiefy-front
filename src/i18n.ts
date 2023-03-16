import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: {
      default: ["en"],
    },
    supportedLngs: ["en", "en-GB"],
    defaultNS: "common",
    debug: import.meta.env.DEV && import.meta.env.VITE_I18NEXT_DEBUG === "true",
    detection: {
      order: ["queryString", "localStorage", "cookie"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    ns: [
      // common
      "common",
      // features
    ],
  });

export default i18n;
