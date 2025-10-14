import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "AILC",
  version: packageJson.version,
  copyright: `© ${currentYear}, AILC Tchad.`,
  meta: {
    title: "AILC — Portail Admin (Démo)",
    description:
      "Portail administratif de l'Autorité de lutte contre la corruption (AILC) du Tchad. Version de démonstration.",
  },
};
