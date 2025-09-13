import React from 'react'
import { IoMdMail } from 'react-icons/io'
import { ABOUT_ME } from '../Utils/data'
import ContactCard from '../Components/ContactCard'

import { IoPhonePortraitOutline } from 'react-icons/io5'
import { MdOutlineWeb } from 'react-icons/md'

const ContactMe = () => {
  return (
    <section id='contact'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title'>Contact Me</h4>
          <p className='text-sm text-center mt-4 leading-6'>A Vercetile developer with hands-on expertise in modern technologies
            ,tools,frameworks, dedicated to building efficient, scalable and user centric soluations.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16'>
          <div>
            <ContactCard icon={<MdOutlineWeb />} text={ABOUT_ME.role} />
            <ContactCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.phone} />
          </div>
          <div>
            <h5 className='md:hidden text-secondary text-lg font-medium mt-4 pb-5'>Contact Form</h5>
            <form action="https://api.web3forms.com/submit" method="POST" target='blank' className='flex flex-col'>
            <input type="hidden" name="access_key" value="f096e5d4-5bb1-445c-adcc-1709ced32622"></input>
              <input
                type="text"
                name='Full Name'
                placeholder='Full Name'
                id=''
                className='input-box'
                autoComplete='off'
              />

              <input
                type="text"
                name='E-mail '
                placeholder='E-mail '
                id=''
                className='input-box'
                autoComplete='off'
              />

              <textarea
                type="text"
                name='Message '
                placeholder='Message '
                rows={3}
                id=''
                className='input-box'
                autoComplete='off'
              />
              <button className='action-btn btn-scale-anim'>
                SUBMIT
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactMe