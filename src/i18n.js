import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";
import fr from "./locales/fr/translation.json";
import zh from "./locales/zh/translation.json";
import tr from "./locales/tr/translation.json";
import hi from "./locales/hi/translation.json";

const translations = { en, de, fr, zh, tr, hi };

const resources = Object.fromEntries(
    Object.entries(translations).map(([key, value]) => [key, { translation: value }])
);

const savedLanguage = typeof window !== "undefined" ? localStorage.getItem("language") : null;
const defaultLanguage = savedLanguage || "en";

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: defaultLanguage,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;
