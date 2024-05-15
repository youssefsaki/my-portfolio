import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecomWebApp from '/public/ecomInoxi.png';
import vansProjectPic from '/public/Vans.png';
import portfolio from '/public/my-portfolio.png';
import avellina from '/public/avellina.png';


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Development Diploma",
    location: "",
    description:
      "Completed an intensive web development program, gaining expertise in front-end and back-end technologies. Applied newly acquired skills to freelance projects, delivering high-quality solutions to clients.",
    icon: React.createElement(LuGraduationCap), //? Writing icon like this cause we are using .ts not .tsx
    date: "2021-2023",
  },
  {
    title: "Freelance Web Developer",
    location: "",
    description:
      "Worked independently as a web developer, collaborating with clients to create custom websites and web applications. Demonstrated versatility and adaptability in delivering tailored solutions to meet client needs",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Web Development Instructor",
    location: "",
    description:
      "Currently serving as a web development instructor, imparting knowledge and skills to aspiring developers. Facilitate learning through engaging lectures, hands-on exercises, and personalized feedback, nurturing the next generation of web developers.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: 'E-commerce Avellina',
    description: 'Independently developed Avellina, a WordPress cosmetics eCommerce site, handling backend development and optimization for a seamless user experience.',
    tags: ['WordPressDevelopment', 'E-Commerce','PHP'],
    imageUrl: avellina
  },
  {
    title: "Inoxi E-Com",
    description:
      "I served as a full-stack developer on an e-commerce app for 1.5 months. I facilitated seamless user experiences, enabling browsing, cart management, and secure transactions.",
    tags: ["Javascript", "PHP", "Bootstrap", "MYSQL"],
    imageUrl: ecomWebApp,
  },
  {
    title: "Portfolio",
    description:
      "I crafted my portfolio website, showcasing my skills and projects with a focus on user engagement and visual appeal.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: portfolio,
  },
  {
    title: "VANS Work",
    description:
      "The VANS landing page demonstrates Tailwind CSS utility-first framework for creating modern, responsive UIs with ease.",
    tags: ["React", "Tailwind", "Framer"],
    imageUrl: vansProjectPic,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MYSQL",
  "MongoDB",
  "Redux",
  "Docker",
  "Linux",
  "Express",
  "Angular",
  "bootstrap",
  "Laravel",
  "Framer Motion",
] as const;