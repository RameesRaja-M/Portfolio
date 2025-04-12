import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaYoutube,

} from "react-icons/fa";


import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import { VscVscode, VscCommentUnresolved, VscTerminalPowershell } from "react-icons/vsc";
import { FaGitAlt,  FaDribbble } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";

import PROJECT_IMG_1 from "../assets/images/project-1.png"
import PROJECT_IMG_2 from "../assets/images/project-2.png"
import PROJECT_IMG_3 from "../assets/images/project-3.png"
import PROJECT_IMG_4 from "../assets/images/project-4.png"
import PROJECT_IMG_5 from "../assets/images/project-5.png"
import PROJECT_IMG_6 from "../assets/images/project-6.png"
import PROJECT_IMG_7 from "../assets/images/project-7.png"
import PROJECT_IMG_8 from "../assets/images/project-8.png"
import PROJECT_IMG_9 from "../assets/images/project-9.png"
import PROJECT_IMG_10 from "../assets/images/project-10.png"

export const MENU_LINKS = [
    { id: "01", label: "Home", offset: -100, to: "hero" },
    { id: "02", label: "Skills", offset: -100, to: "skills" },
    { id: "03", label: "About Me", offset: -100, to: "about" },
    { id: "04", label: "My Journey", offset: -100, to: "journey" },
    { id: "05", label: "Projects", offset: -100, to: "projects" },
    { id: "06", label: "Contact", offset: -100, to: "contact" }
]

export const SKILL_TABS = [
    { id: "01", label: "All", value: "all" },
    { id: "02", label: "Frontend", value: "frontend" },
    { id: "03", label: "Backend", value: "backend" },
    { id: "04", label: "Tools", value: "tools" },
    { id: "05", label: "Skills", value: "soft-skills" },
]

export const SKILLS = [
    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description:
            "I'm a passionate React.js fresher with a strong understanding of components, hooks, and state management.I build clean, responsive UIs and love solving problems through code. Eager to grow in a dynamic team and contribute to real-world web applications using modern frontend technologies."
    },
    {
        id: "02",
        icon: FaHtml5,
        skill: "HTML",
        progress: 99,
        type: "frontend",
        description:
            "I’m a dedicated HTML fresher with a solid grasp of semantic elements, structure, and best practices. I create clean, accessible, and responsive web pages with a focus on user experience. Excited to contribute to front-end development and continuously learn new skills in web technologies."
    },
    {
        id: "03",
        icon: FaCss3,
        skill: "CSS",
        progress: 85,
        type: "frontend",
        description:
            "I’m a CSS3 fresher skilled in styling responsive and visually appealing websites. I understand Flexbox, Grid, animations, and media queries to enhance user experience. I enjoy turning plain HTML into clean, modern designs and always look to improve my creative front-end skills through continuous learning."
    },
    {
        id: "04",
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 90,
        type: "frontend",
        description:
            "I’m a JavaScript fresher with a strong foundation in core concepts like variables, functions, DOM manipulation, and event handling. I enjoy bringing interactivity to web pages and solving real-world problems through code. Passionate about learning ES6+ features and building dynamic, user-friendly web experiences."
    },
    {
        id: "05",
        icon: FaNodeJs,
        skill: "Node JS",
        progress: 60,
        type: "backend",
        description:
            "I’m a Node.js fresher with a good understanding of building server-side applications using JavaScript. I can handle APIs, routing, and basic backend logic. Familiar with Express.js and eager to develop scalable, real-time web apps. Always curious to explore more in backend development and database integration."
    },
    {
        id: "06",
        icon: SiExpress,
        skill: "Express JS",
        progress: 95,
        type: "backend",
        description:
            "I’m a fresher skilled in Express.js, building fast and lightweight backend applications. I can create RESTful APIs, handle routing, and manage middleware effectively. Comfortable working with JSON, HTTP methods, and basic authentication. I’m passionate about backend development and eager to build scalable web apps using Node.js and Express."
    },
    {
        id: "07",
        icon: SiMongodb,
        skill: "Mongo DB",
        progress: 96,
        type: "backend",
        description:
            "I’m a MongoDB fresher with a solid understanding of NoSQL databases, collections, and CRUD operations. I can design flexible schemas and integrate MongoDB with Node.js applications. Comfortable using Mongoose for data modeling and building RESTful APIs. Eager to explore real-time data handling and scalable backend solutions."
    },
    {
        id: "08",
        icon: SiMysql,
        skill: "MySQL",
        progress: 96,
        type: "backend",
        description:
            "I’m a MySQL fresher with a strong grasp of relational databases, tables, and SQL queries. Skilled in performing CRUD operations, writing joins, and managing structured data. I can integrate MySQL with backend applications to build dynamic and data-driven web solutions. Always eager to optimize queries and improve performance."
    },
    {
        id: "09",
        icon: FaGitAlt,
        skill: "Git & GitHub",
        progress: 80,
        type: "tools",
        description:
            "As a fresher, I have hands-on experience using Git for version control and GitHub for collaborative development. I understand basic commands, branch management, commits, and pushing code to repositories. I'm comfortable working with GitHub to showcase my projects, track changes, and collaborate efficiently with others in a team environment."
    },
    {
        id: "10",
        icon: VscVscode,
        skill: "Visual Studio Code",
        progress: 80,
        type: "tools",
        description:
            "I use Visual Studio Code as my primary code editor for development. It’s lightweight, fast, and supports multiple languages. I’m comfortable using extensions, debugging tools, integrated terminal, and Git integration. It helps me write, test, and manage code efficiently in a user-friendly and customizable environment."
    },
    {
        id: "11",
        icon: SiWebpack,
        skill: "WebPack",
        progress: 70,
        type: "tools",
        description:
            "I have a basic understanding of Webpack, a powerful module bundler for JavaScript applications. I can configure entry and output files, use loaders for processing assets like CSS and images, and optimize builds. It helps me manage project dependencies and bundle code efficiently for faster and smoother web performance."
    },
    {
        id: "12",
        icon: VscCommentUnresolved,
        skill: "Problem-Solving",
        progress: 85,
        type: "soft-skills",
        description:
            "I approach problems with a clear and logical mindset. I enjoy analyzing situations, identifying root causes, and finding efficient, practical solutions. Whether it's debugging code or resolving team challenges, I stay calm under pressure and work towards outcomes that are both creative and effective."
    },
    {
        id: "13",
        icon: MdGroups3,
        skill: "Collaboration",
        progress: 75,
        type: "soft-skills",
        description:
            "I believe in teamwork and open communication to achieve shared goals. I'm comfortable working with diverse team members, listening actively, and contributing ideas respectfully. Whether in group projects or remote teams, I value trust, coordination, and a positive attitude to ensure smooth and successful collaboration."
    },
    {
        id: "14",
        icon: VscTerminalPowershell,
        skill: "Attention to Detail",
        progress: 87,
        type: "soft-skills",
        description:
            "I focus on the small things that make a big difference. Whether it’s spotting a minor bug in code or ensuring design consistency, I carefully review my work to maintain quality. This helps me deliver accurate, polished results and avoid unnecessary mistakes in every task I handle."
    },

]

export const ABOUT_ME = {

    content: `I’m a passionate MERN stack fresher with 3 months of hands-on internship experience at" Error Makes Clever", where I worked on real-time projects and deepened my understanding of full-stack development. I’ve built responsive and intuitive web applications using React.js for the frontend, Node.js and Express for backend APIs, and MongoDB for managing data. My strong foundation in JavaScript, UI/UX principles, and backend logic allows me to create seamless and scalable web solutions. During my internship and academic projects, I’ve implemented authentication systems, integrated third-party APIs, and deployed applications for live use. I enjoy writing clean, maintainable code and solving problems efficiently. I'm enthusiastic about collaborating in team environments, learning from feedback, and staying up-to-date with the latest tech trends. My goal is to grow as a full-stack developer and contribute to building meaningful digital experiences that solve real-world problems.`,

    socialLinks: [
        { id: "01", label: "GitHub", icon: FaGithub, link: "https://github.com/RameesRaja-M" },
        { id: "02", label: "Linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/ramees-raja-m/" },
        { id: "03", label: "Youtube", icon: FaYoutube, link: "https://youtube.com/@rameesstack?si=_mFvNRrGBjZFndvZ" },
        { id: "0", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/luvit_ramees/?igsh=MXR6cWh3MzQ0MjBheg%3D%3D" },
        
        
        
    ],

    email: "rameesraja27082002@gmail.com",
    phone: "91+ 6383028770",
    role: "Mern Stack Web Developer"
}

export const PROJECTS = [
    {
        id: 1,
        title: "Full Stack Task Manager App Using MERN | Mongo DB, Express JS, React JS, Node JS",
        image: PROJECT_IMG_1,
        tags: ["React", "Express JS", "Mongo DB", "Node JS"],
        webisite: "https://task-apps-client.vercel.app/",
        github: "https://github.com/RameesRaja-M/Task-App",
    },
    {
        id: 2,
        title: "Full Stack Blog  App Using MERN | Mongo DB, Express JS, React JS, Node JS",
        image: PROJECT_IMG_2,
        tags: ["React", "Express JS", "Mongo DB", "Node JS"],
        webisite: "https://blogwhiz-website-frontend.vercel.app/home",
        github: "https://github.com/RameesRaja-M/blogwhiz-website",
    },
    {
        id: 3,
        title: "Full Stack Bulk Mailer App Using MERN | Mongo DB, Express JS, React JS, Node JS",
        image: PROJECT_IMG_3,
        tags: ["React", "Express JS", "Mongo DB", "Node JS"],
        webisite: "https://mailwhiz-frontend.vercel.app/",
        github: "https://github.com/RameesRaja-M/Mailwhiz-Bulk-Mailer",
    },
    {
        id: 4,
        title: "Full Stack List Added App Using MERN | Mongo DB, Express JS, React JS, Node JS",
        image: PROJECT_IMG_4,
        tags: ["React", "Express JS", "Mongo DB", "Node JS"],
        webisite: "https://fruit-react.vercel.app/",
        github: "https://github.com/RameesRaja-M/Fruit-Website-React",
    },
    {
        id: 5,
        title: " Weather App Website Using React | HTML, CSS, JavaScript, React JS,",
        image: PROJECT_IMG_5,
        tags: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML"],
        webisite: "https://weather-app-react-blue-psi.vercel.app/",
        github: "https://github.com/RameesRaja-M/Weather-App-React",
    },
    {
        id: 6,
        title: " Udemy Clone Website Using React | HTML, CSS, Tailwind CSS, JavaScript, React JS,",
        image: PROJECT_IMG_6,
        tags: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML"],
        webisite: "https://udemy-clone-react-dusky.vercel.app/",
        github: "https://github.com/RameesRaja-M/Udemy-Clone-React",
    },
    {
        id: 7,
        title: " Perfume Website Using React | HTML, CSS, Tailwind CSS, JavaScript, React JS,",
        image: PROJECT_IMG_7,
        tags: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML"],
        webisite: "https://perfumy-react-rho-flame.vercel.app/",
        github: "https://github.com/RameesRaja-M/Perfumy-React",
    },
    {
        id: 8,
        title: " Nostra E-Commerce Website Using JavaScript | HTML, CSS, Tailwind CSS, JavaScript,",
        image: PROJECT_IMG_8,
        tags: ["JavaScript", "Tailwind CSS", "CSS", "HTML"],
        webisite: "https://rameesraja-m.github.io/Nostra-Website/",
        github: "https://github.com/RameesRaja-M/Nostra-Website",
    },
    {
        id: 9,
        title: " Greenden Website Using JavaScript | HTML, CSS, Tailwind CSS, JavaScript,",
        image: PROJECT_IMG_9,
        tags: ["JavaScript", "Tailwind CSS", "CSS", "HTML"],
        webisite: "https://rameesraja-m.github.io/Greenden/",
        github: "https://github.com/RameesRaja-M/Greenden",
    },
    {
        id: 10,
        title: "  Trip Advisor Clone Website Using HTML & CSS | HTML, CSS",
        image: PROJECT_IMG_10,
        tags: ["CSS", "HTML"],
        webisite: "https://rameesraja-m.github.io/Trip-Advisor-Clone/",
        github: "https://github.com/RameesRaja-M/Trip-Advisor-Clone",
    },

]