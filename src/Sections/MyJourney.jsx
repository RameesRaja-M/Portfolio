import React from 'react'
import { Timeline } from 'antd';

const MyJourney = () => {
  return (
    <section id='journey' className='container mx-auto px-8 md:px-32 py-16 mt-5'>
    <div className='p-6'>
        <h2 className='section-title mb-16 text-center'>My Journey</h2>
       
        <Timeline className='flex flex-col gap-20 mt-6'
            mode="alternate"
            items={[
                {
                    label: '2022-Completed 🎓',
                    children: (
                        <p className='text-[18px] font-medium text-primary'>
                             Bachelor of Computer Application From Alagappa University
                        </p>
                    ),
                    color: 'orange',
                },
                {
                    label: 'Oct 2024-Joined 👨‍💻',
                    children: (
                        <p className='text-[18px] font-medium text-primary'>
                             Full Stack Web Development Course From Error Makes Clever
                        </p>
                    ),
                    color: 'orange',
                },
                {
                    label: 'Jan 2025-Completed ✅',
                    children: (
                        <p className='text-[18px] font-medium text-primary'>
                             Full Stack Web Development Course From Error Makes Clever
                        </p>
                    ),
                    color: 'orange',
                },
                {
                    label: 'Feb 2025 -Joined-Present 👨‍💻',
                    children: (
                        <p className='text-[18px] font-medium text-primary'>
                            Internship MERN Stack Web Developer From Error Makes Clever
                        </p>
                    ),
                    color: 'orange',
                },
               
            ]}
        />
    </div>
</section>
  )
}

export default MyJourney