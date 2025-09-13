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
import { SiLeetcode } from "react-icons/si";

import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import { VscVscode, VscCommentUnresolved, VscTerminalPowershell } from "react-icons/vsc";
import { FaGitAlt,  FaDribbble } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";

import pic3 from "../assets/images/p3.png"
import PROJECT_IMG_1 from "../assets/images/Project-1.png"
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
    { id: "04", label: "Projects", offset: -100, to: "projects" },
    { id: "05", label: "Contact", offset: -100, to: "contact" }
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
        icon: FaHtml5,
        skill: "HTML",
        progress: 99,
        type: "frontend",
        description:
            "Dedicated HTML fresher with strong knowledge of semantic elements, structure, and best practices. Skilled in building clean, accessible, and responsive web pages with a focus on user experience."
    },
    {
        id: "02",
        icon: FaCss3,
        skill: "CSS",
        progress: 85,
        type: "frontend",
        description:
            "CSS3 fresher skilled in responsive design using Flexbox, Grid, animations, and media queries. Passionate about creating clean, modern, and user-friendly web designs."
    },
    {
        id: "03",
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 90,
        type: "frontend",
        description:
            "JavaScript fresher with strong knowledge of variables, functions, DOM manipulation, and events. Passionate about ES6+ features and building dynamic, interactive web experiences."
    },
    {
        id: "04",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description:
            "Passionate React.js fresher skilled in components, hooks, and state management. Strong in building clean, responsive UIs and eager to contribute to real-world web applications."
    },
    {
        id: "05",
        icon: FaNodeJs,
        skill: "Node JS",
        progress: 60,
        type: "backend",
        description:
            "Node.js fresher skilled in building server-side applications with JavaScript. Experienced in APIs, routing, and Express.js, with eagerness to develop scalable backend solutions."
    },
    {
        id: "06",
        icon: SiExpress,
        skill: "Express JS",
        progress: 95,
        type: "backend",
        description:
            "Express.js fresher skilled in building RESTful APIs, handling routing, and managing middleware. Comfortable with JSON, HTTP methods, and authentication; eager to build scalable backend apps."
    },
    {
        id: "07",
        icon: SiMongodb,
        skill: "Mongo DB",
        progress: 96,
        type: "backend",
        description:
            "MongoDB fresher skilled in NoSQL, CRUD operations, and schema design. Experienced with Mongoose and integrating MongoDB with Node.js to build RESTful APIs. Eager to work on real-time, scalable backend solutions."
    },
    {
        id: "08",
        icon: FaGitAlt,
        skill: "Git & GitHub",
        progress: 80,
        type: "tools",
        description:
            "Fresher with hands-on experience in Git and GitHub for version control, branching, commits, and collaborative development. Skilled at tracking changes and showcasing projects efficiently."
    },
    {
        id: "19",
        icon: VscVscode,
        skill: "Visual Studio Code",
        progress: 80,
        type: "tools",
        description:
            "Proficient in Visual Studio Code for development, utilizing extensions, debugging, integrated terminal, and Git integration for efficient coding and project management."
    },
    {
        id: "10",
        icon: VscCommentUnresolved,
        skill: "Problem-Solving",
        progress: 85,
        type: "soft-skills",
        description:
            "Logical and solution-oriented, skilled at analyzing problems, identifying root causes, and delivering efficient, practical, and creative solutions under pressure."
    },
    {
        id: "11",
        icon: MdGroups3,
        skill: "Collaboration",
        progress: 75,
        type: "soft-skills",
        description:
            "Team player with strong communication skills, valuing collaboration, trust, and coordination to achieve shared goals effectively."
    },
    {
        id: "12",
        icon: VscTerminalPowershell,
        skill: "Attention to Detail",
        progress: 87,
        type: "soft-skills",
        description:
            "Detail-oriented, ensuring quality and accuracy by carefully reviewing work and catching minor issues that make a big impact."
    },

]

export const ABOUT_ME = {

    content: `Passionate MERN stack fresher with 2 months of internship experience at ‘Error Makes Clever’, building responsive web apps using React.js, Node.js, Express, and MongoDB. Experienced in authentication, API integration, and deployment. Strong foundation in JavaScript, UI/UX, and backend logic. Enthusiastic about clean code, problem-solving, teamwork, and contributing to meaningful digital solutions.`,

    socialLinks: [
        { id: "01", label: "GitHub", icon: FaGithub, link: "https://github.com/RameesRaja-M" },
        { id: "02", label: "Linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/ramees-mern-stack-developer-fresher/" },
        { id: "03", label: "LeetCode", icon: SiLeetcode, link: "https://leetcode.com/u/ramees-raja-m/" },
        { id: "04", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/luvit_ramees/?igsh=MXR6cWh3MzQ0MjBheg%3D%3D" },
        
        
        
    ],

    email: "rameeswebdev@gmail.com",
    phone: "91+ 6383028770",
    role: "Mern Stack Web Developer"
}

export const jOURNEY_STEPS = [
    {
        year: "2022",
        title: "Computer Application Degree (BCA)",
        description: "Bachelor of Computer Applications graduate with a strong foundation in programming, databases, and web development.",
        
    }
]

export const PROJECTS = [
    
     {
        id: 1,
        title: "Full Stack Doctor Appointment Booking App Using MERN | Mongo DB, Express JS, React JS, Node JS",
        image: pic3,
        tags: ["React", "Express JS", "Mongo DB", "Node JS"],
        webisite: "https://prescripto-frontend-hhe4.onrender.com",
        github: "https://github.com/RameesRaja-M/Prescripto",
    },
    {
        id: 2,
        title: "Full Stack Task Manager App Using MERN | Mongo DB, Express JS, React JS, Node JS",
        image: PROJECT_IMG_1,
        tags: ["React", "Express JS", "Mongo DB", "Node JS"],
        webisite: "https://task-manager-frontend-0nt3.onrender.com/home",
        github: "https://github.com/RameesRaja-M/Task-Manager",
    },
    {
        id: 3,
        title: "Full Stack Blog  App Using MERN | Mongo DB, Express JS, React JS, Node JS",
        image: PROJECT_IMG_2,
        tags: ["React", "Express JS", "Mongo DB", "Node JS"],
        webisite: "https://blogwhiz-website-frontend.vercel.app/home",
        github: "https://github.com/RameesRaja-M/blogwhiz-website",
    },
    {
        id: 4,
        title: "Full Stack Bulk Mailer App Using MERN | Mongo DB, Express JS, React JS, Node JS",
        image: PROJECT_IMG_3,
        tags: ["React", "Express JS", "Mongo DB", "Node JS"],
        webisite: "https://mailwhiz-frontend.vercel.app/",
        github: "https://github.com/RameesRaja-M/Mailwhiz-Bulk-Mailer",
    },
    {
        id: 5,
        title: "Full Stack List Added App Using MERN | Mongo DB, Express JS, React JS, Node JS",
        image: PROJECT_IMG_4,
        tags: ["React", "Express JS", "Mongo DB", "Node JS"],
        webisite: "https://fruit-react.vercel.app/",
        github: "https://github.com/RameesRaja-M/Fruit-Website-React",
    },
    {
        id: 6,
        title: " Weather App Website Using React | HTML, CSS, JavaScript, React JS,",
        image: PROJECT_IMG_5,
        tags: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML"],
        webisite: "https://weather-app-react-blue-psi.vercel.app/",
        github: "https://github.com/RameesRaja-M/Weather-App-React",
    },
    {
        id: 7,
        title: " Udemy Clone Website Using React | HTML, CSS, Tailwind CSS, JavaScript, React JS,",
        image: PROJECT_IMG_6,
        tags: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML"],
        webisite: "https://udemy-clone-react-dusky.vercel.app/",
        github: "https://github.com/RameesRaja-M/Udemy-Clone-React",
    },
    {
        id: 8,
        title: " Perfume Website Using React | HTML, CSS, Tailwind CSS, JavaScript, React JS,",
        image: PROJECT_IMG_7,
        tags: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML"],
        webisite: "https://perfumy-react-rho-flame.vercel.app/",
        github: "https://github.com/RameesRaja-M/Perfumy-React",
    },
    {
        id: 9,
        title: " Nostra E-Commerce Website Using JavaScript | HTML, CSS, Tailwind CSS, JavaScript,",
        image: PROJECT_IMG_8,
        tags: ["JavaScript", "Tailwind CSS", "CSS", "HTML"],
        webisite: "https://rameesraja-m.github.io/Nostra-Website/",
        github: "https://github.com/RameesRaja-M/Nostra-Website",
    },
    {
        id: 10,
        title: " Greenden Website Using JavaScript | HTML, CSS, Tailwind CSS, JavaScript,",
        image: PROJECT_IMG_9,
        tags: ["JavaScript", "Tailwind CSS", "CSS", "HTML"],
        webisite: "https://rameesraja-m.github.io/Greenden/",
        github: "https://github.com/RameesRaja-M/Greenden",
    },
    {
        id: 11,
        title: "  Trip Advisor Clone Website Using HTML & CSS | HTML, CSS",
        image: PROJECT_IMG_10,
        tags: ["CSS", "HTML"],
        webisite: "https://rameesraja-m.github.io/Trip-Advisor-Clone/",
        github: "https://github.com/RameesRaja-M/Trip-Advisor-Clone",
    },

]