import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect, useCallback } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import {PROJECTS} from "../Utils/data"
import ProjectCard from '../Components/ProjectCard'



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
                        <IoIosArrowForward/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MyProjects