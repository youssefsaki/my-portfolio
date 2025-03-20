import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { TbBrandAngular } from "react-icons/tb";
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
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Freelance Web Developer",
    location: "",
    description:
      "Worked on various web development projects with clients in my professional network.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Remote Web Development Instructor",
    location: "GoMyCode (Remote)",
    description:
      "Conducted online courses in MERN stack & Next.js, mentoring students through hands-on projects, live coding sessions, and personalized guidance to prepare them for the industry.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Brand Co-Founder & Marketing Lead",
    location: "Avellina (Morocco)",
    description:
      "Co-created a brand, handling marketing strategy, email marketing, and web application development. Managed website creation, digital campaigns, and customer engagement to grow the brand.",
    icon: React.createElement(TbBrandAngular),
    date: "2023 - 2024",
  },
  {
    title: "Full-Time Web Development Instructor",
    location: "GoMyCode (Morocco)",
    description:
      "Currently working full-time at GoMyCode, teaching MERN stack, React, and Next.js. Leading in-person and remote sessions, structuring curriculum, and mentoring aspiring developers.",
    icon: React.createElement(FaLaptopCode),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: 'E-commerce Avellina',
    description: 'Independently developed Avellina, a WordPress cosmetics eCommerce site, handling backend development and optimization for a seamless user experience.',
    tags: ['WordPressDevelopment', 'E-Commerce','PHP'],
    imageUrl: avellina,
    href:'https://github.com/youssefsaki/'
  },
  {
    title: "Inoxi E-Com",
    description:
      "I served as a full-stack developer on an e-commerce app for 4 months. I facilitated seamless user experiences, enabling browsing, cart management, and secure transactions.",
    tags: ["Javascript", "PHP", "Bootstrap", "MYSQL"],
    imageUrl: ecomWebApp,
    href:'https://github.com/youssefsaki/Ecom-WebApp'
  },
  {
    title: "Portfolio",
    description:
      "I crafted my portfolio website, showcasing my skills and projects with a focus on user engagement and visual appeal.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: portfolio,
    href:'https://github.com/youssefsaki/my-portfolio'
  },
  {
    title: "VANS Work",
    description:
      "The VANS landing page demonstrates Tailwind CSS utility-first framework for creating modern, responsive UIs with ease.",
    tags: ["React", "Tailwind", "Framer"],
    imageUrl: vansProjectPic,
    href:'https://github.com/youssefsaki/Vans'
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