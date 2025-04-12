import React from 'react'

const ProjectCard = ({ imgUrl, title, tags, website, github }) => {
    return (
        <div className='h-full bg-white rounded-xl overflow-hidden shadow-md mx-2 md:p-2'>
            <img src={imgUrl} alt="Project Image" className='w-full h-72 md:h-80  ' />
            <div className='px-4 py-5'>
                <h3 className='text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis'>{title}</h3>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {tags.map((tag, index) => (
                        <span key={index} className='text-xs text-secondary bg-orange-100 px-3 py-1 rounded'>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className='flex gap-4 mt-4'>
                    <a
                        href={website}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-sm text-white bg-primary px-4 py-1.5 rounded hover:bg-opacity-90 transition'
                    >
                        Demo
                    </a>
                    <a
                        href={github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-sm text-white bg-gray-800 px-4 py-1.5 rounded hover:bg-opacity-90 transition'
                    >
                        Code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard