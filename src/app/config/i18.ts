// src/i18n.ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next) // Pass i18next instance to react-i18next.
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          aboutUs: "About",
          projects: "Projects",
          contact: "Contact",
          greeting: "Hi, I'm Guilherme",
          subtitle: "A Full Stack Developer based in Brazil",
          buttonText: "Find out more",
          tagline: "1% better every day"
        }
      },
      pt: {
        translation: {
          home: "Início",
          aboutUs: "Sobre mim",
          projects: "Projetos",
          contact: "Contato",
          greeting: "Olá, eu sou Guilherme",
          subtitle: "Desenvolvedor Full Stack do Brasil",
          buttonText: "Saiba mais",
          tagline: "1% melhor todos os dias"
        }
      },
      de: {
        translation: {
          home: "Startseite",
          aboutUs: "Über mich",
          projects: "Projekte",
          contact: "Kontakt",
          greeting: "Hallo, ich bin Guilherme",
          subtitle: "Ein Full Stack Entwickler aus Brasilien",
          buttonText: "Erfahre mehr",
          tagline: "1% besser jeden Tag"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
