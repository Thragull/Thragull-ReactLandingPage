import React from 'react'

const ContactDetails = () => {
  return (
    <>
        <h1>Contact Us</h1>
        <div className='pe-4 my-4'>
            <iframe id="embedMap"
            className='pb-2pe-lg-3 float-start'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4253.14820479047!2d-0.8927131622645073!3d41.64525795766461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914dd5e618e91%3A0x49df13f1158489a8!2sZaragoza%2C%20Espa%C3%B1a!5e0!3m2!1ses!2srs!4v1707589413974!5m2!1ses!2srs" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <h4 className='text-lg-end'>Address:</h4>
            <p className='text-lg-end'>C. de Hernán Cortés, 14, 50004 Zaragoza, Spain</p>
            <h4 className='text-lg-end'>Phone Number:</h4>
            <p className='text-lg-end'>(+34) 6xx xxx xxx</p>
            <h4 className='text-lg-end'>Schedule:</h4>
            <p className='text-lg-end'>Mon: 9:00 - 14:00 & 17:00 - 20:00</p>
            <p className='text-lg-end'>Tue: 9:00 - 14:00 & 17:00 - 20:00</p>
            <p className='text-lg-end'>Wed: 9:00 - 14:00 & 17:00 - 20:00</p>
            <p className='text-lg-end'>Thu: 9:00 - 14:00 & 17:00 - 20:00</p>
            <p className='text-lg-end'>Fri: 9:00 - 14:00 & 17:00 - 20:00</p>
        </div>
    </>
  )
}

export default ContactDetails