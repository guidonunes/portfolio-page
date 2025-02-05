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
          about: "About",
          projects: "Projects",
          contact: "Contact",
          greeting: "Hi, I'm Guilherme",
          subtitle: "A Full-Stack Developer based in Brazil",
          buttonText: "Find out more",
          tagline: "1% better every day",
          aboutText: "I am an organized professional driven by challenges, passionate about creating impactful and visually engaging applications. My web development journey blends technical expertise with a touch of creativity, bringing ideas to life in meaningful ways.",
          backendHeader: "Back-End Development",
          backendText:"Proficient in building robust and scalable backend systems, specializing in Ruby on Rails, Node.js, and API development.",
          frontendHeader: "Front-End Development",
          frontendText: "Experienced in crafting responsive and user-friendly interfaces, with expertise in React, TypeScript, and modern UI/UX design principles.",
          fsHeader: "Full-Stack Development",
          fsText: "Skilled in full-stack development, with expertise in backend systems and frontend design, honed through the intensive Le Wagon bootcamp.",
          clHeader: "Continuous Learning",
          clText: "Passionate about continuous learning, currently enrolled at FIAP Faculty to study Analysis and System Development, furthering my expertise in the tech field.",
          projectHeader: "A Small Selection of Recent Projects",
          projectDescription1:"A stocks and crypto portfolio tracker developed during the Le Wagon bootcamp.",
          projectTitle2: "Fictional E-Commerce",
          projectDescription2: "A fictional e-commerce platform developed during the Le Wagon bootcamp.",
          projectDescription3: "Final project for the React and Redux Skill Path on Codecademy.",
          footerTitle: "Ready to take your digital presence to the next level?",
          footerDescription: "Reach out to me today and let's discuss how I can help you achieve your goals",
          footerButton: "Get in touch",

        }
      },
      pt: {
        translation: {
          home: "Início",
          about: "Sobre mim",
          projects: "Projetos",
          contact: "Contato",
          greeting: "Olá, eu sou Guilherme",
          subtitle: "Desenvolvedor Full-Stack do Brasil",
          buttonText: "Saiba mais",
          tagline: "1% melhor todos os dias",
          aboutText: "Sou um profissional organizado, movido por desafios, apaixonado por criar aplicações impactantes e visualmente envolventes. Minha jornada no desenvolvimento web combina expertise técnica com um toque de criatividade, dando vida a ideias de forma significativa.",
          backendHeader: "Desenvolvimento Back-End",
          backendText: "Experiente na construção de sistemas back-end robustos e escaláveis, com especialização em Ruby on Rails, Node.js e desenvolvimento de APIs.",
          frontendHeader: "Desenvolvimento Front-End",
          frontendText: "Experiente na criação de designs e interfaces amigáveis ao usuário, com sólida expertise em React, TypeScript e princípios modernos de UI/UX.",
          fsHeader: "Desenvolvimento Full-Stack",
          fsText: "Proficiência em desenvolvimento full-stack, com expertise em sistemas backend e design frontend, aprimorada durante o intensivo bootcamp do Le Wagon.",
          clHeader: "Aprendizado Contínuo",
          clText: "Apaixonado por aprendizado contínuo, atualmente matriculado na FIAP para estudar Análise e Desenvolvimento de Sistemas, aprimorando minha expertise na área de tecnologia.",
          projectHeader: "Uma Pequena Seleção de Projetos Recentes",
          projectDescription1: "Portfólio tracker de ações e cripto desenvolvido durante o bootcamp do Le Wagon.",
          projectTitle2: "E-Commerce Fictício",
          projectDescription2: "Plataforma de e-commerce fictícia desenvolvida durante o bootcamp do Le Wagon",
          projectDescription3: "Projeto final do Skill Path de React e Redux na Codecademy.",
          footerTitle: "Pronto para levar sua presença digital para o próximo nível?",
          footerDescription: "Entre em contato comigo hoje e vamos discutir como posso ajudá-lo a alcançar seus objetivos",
          footerButton: "Entre em contato",

        }
      },
      de: {
        translation: {
          home: "Startseite",
          about: "Über mich",
          projects: "Projekte",
          contact: "Kontakt",
          greeting: "Hallo, ich bin Guilherme",
          subtitle: "Ein Full-Stack Entwickler aus Brasilien",
          buttonText: "Erfahre mehr",
          tagline: "1% besser jeden Tag",
          aboutText: "Ich bin ein organisierter Profi, der von Herausforderungen angetrieben wird und leidenschaftlich daran interessiert ist, wirkungsvolle und visuell ansprechende Apps zu schaffen. Meine Reise in der Webentwicklung verbindet technische Expertise mit einer kreativen Note, um Ideen auf bedeutungsvolle Weise zum Leben zu erwecken.",
          backendHeader: "Back-End-Entwicklung",
          backendText: "Erfahren in der Erstellung robuster und skalierbarer Backend-Systeme, mit Spezialisierung auf Ruby on Rails, Node.js und API-Entwicklung.",
          frontendHeader: "Front-End-Entwicklung",
          frontendText: "Erfahren in der Erstellung von benutzerfreundlichen Designs und Interfaces, mit fundierter Expertise in React, TypeScript und modernen UI/UX-Designprinzipien.",
          fsHeader: "Full-Stack-Entwicklung",
          fsText: "Erfahren in der Full-Stack-Entwicklung, mit Expertise in Backend-Systemen und Front-End-Design, verfeinert durch das intensive Le Wagon Bootcamp.",
          clHeader: "Kontinuierliches Lernen",
          clText: "Leidenschaftlich in Bezug auf kontinuierliches Lernen, derzeit eingeschrieben an der FIAP Fakultät, um Analyse und Systementwicklung zu studieren und meine Expertise im Technologiebereich weiter auszubauen.",
          projectHeader:"Eine kleine Auswahl an aktuellen Projekten",
          projectDescription1:"Aktien- und Krypto-Portfolio-Tracker, entwickelt während des Le Wagon Bootcamps.",
          projectTitle2:"Fiktiver E-Commerce",
          projectDescription2:"Fiktive E-Commerce-Plattform, entwickelt während des Le Wagon Bootcamps.",
          projectDescription3:"Abschlussprojekt für den React- und Redux-Skill-Path auf Codecademy.",
          footerTitle: "Bereit, Ihre digitale Präsenz auf die nächste Stufe zu heben?",
          footerDescription: "Kontaktieren Sie mich noch heute und lassen Sie uns besprechen, wie ich Ihnen helfen kann, Ihre Ziele zu erreichen.",
          footerButton: "Kontaktieren Sie mich",
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
