import React from 'react'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='container bg-dark-subtle bg-gradient rounded mt-3 mb-5 p-4 text-start'>
        <ContactDetails />
        <ContactForm />
    </div>
  )
}

export default Contact