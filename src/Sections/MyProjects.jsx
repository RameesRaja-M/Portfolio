import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect, useCallback } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import ProjectCard from '../Components/ProjectCard'

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

const MyProjects = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
    const [canscrollprev, setCanScrollPrev] = useState(false);
    const [canscrollnext, setCanScrollNext] = useState(false);

    const updateScrollButtons = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());

    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", updateScrollButtons);
        updateScrollButtons();
    }, [emblaApi, updateScrollButtons]);

    const PROJECTS = [

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

    return (
        <section id='projects' className='bg-background mt-14 md:p-6'>
            <div className='container mx-auto px-8 md:px-10 py-10'>
                <div className='w-full lg:w-[60vw] mx-auto'>
                    <h4 className='section-title'>Recent Projects</h4>
                    <p className='text-sm text-center mt-4 leading-6'>From Concept to deployment, these Projects showcase my technical expertise.I focus on clean code, Perfomance, and User experience</p>
                </div>
                <div className='relative'>
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex pt-14 pb-8'>
                            {PROJECTS.map((projects) => (
                                <div key={projects.id}
                                    className='min-w-[100%] sm:min-w[50%] lg:min-w-[33%]'
                                >
                                    <ProjectCard
                                        key={projects.id}
                                        imgUrl={projects.image}
                                        title={projects.title}
                                        tags={projects.tags}
                                        website={projects.webisite}
                                        github={projects.github}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Navigation Button */}
                    <button className={`arrow-btn -left-5 ${!canscrollprev ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={() => emblaApi && emblaApi.scrollPrev()}
                        disabled={!canscrollprev}
                    >
                        <IoIosArrowForward className='rotate-180' />
                    </button>

                    <button className={`arrow-btn -right-5 ${!canscrollprev ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={() => emblaApi && emblaApi.scrollNext()}
                        disabled={!canscrollprev}
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MyProjects