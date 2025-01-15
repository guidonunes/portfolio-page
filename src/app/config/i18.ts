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
          tagline: "1% better every day",
          about: "About me",
          aboutText: "I am an organized professional driven by challenges, passionate about creating impactful and visually engaging applications. My web development journey blends technical expertise with a touch of creativity, bringing ideas to life in meaningful ways."
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
          tagline: "1% melhor todos os dias",
          about: "Sobre mim",
          aboutText: "Sou um profissional organizado, movido por desafios, apaixonado por criar aplicações impactantes e visualmente envolventes. Minha jornada no desenvolvimento web combina expertise técnica com um toque de criatividade, dando vida a ideias de forma significativa."

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
          tagline: "1% besser jeden Tag",
          about: "Über mich",
          aboutText: "Ich bin ein organisierter Profi, der von Herausforderungen angetrieben wird und leidenschaftlich daran interessiert ist, wirkungsvolle und visuell ansprechende Apps zu schaffen. Meine Reise in der Webentwicklung verbindet technische Expertise mit einer kreativen Note, um Ideen auf bedeutungsvolle Weise zum Leben zu erwecken."
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
