import React from 'react'

const Contact = () => {
  return (
    <div className='container bg-dark-subtle bg-gradient rounded mt-3 mb-5 p-4 text-start'>
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
        <div className="alert alert-warning" role="alert">
            Fill up the following form and we will contact you soon.
        </div>
        <div className="completeForm container mt-4">
            <div className="personalDetails row mb-3">
                <fieldset className="col-12 col-lg-4">
                    <label for="name" className="form-label">First Name *</label>
                    <input id="name" className="form-control" type="text" placeholder="Enter your Name" required/>
                </fieldset>
                <fieldset className="col-12 col-lg-4">
                    <label for="midName" className="form-label">Middle Name</label>
                    <input id="midName" className="form-control" type="text" placeholder="Enter your Middle Name (optional)"/>
                </fieldset>
                <fieldset className="col-12 col-lg-4">
                    <label for="surname" className="form-label">Last Name *</label>
                    <input id="surname" className="form-control" type="text" placeholder="Enter your Surname" required/>
                </fieldset>
            </div>
            <div className="contactInfo row mb-3">
                <fieldset className="col-12 col-lg-6">
                    <label for="email" className="form-label">E-Mail *</label>
                    <input id="email" className="form-control" type="email" placeholder='Enter your e-mail' required/>
                </fieldset>
                <fieldset className="col-4 col-lg-2">
                    <label for="intCode" className="form-label">Country Code</label>
                    <input id="intCode" className="form-control" type="number" placeholder="+34" min={0}/>
                </fieldset>
                <fieldset className="col-8 col-lg-4">
                    <label for="phone" className="form-label">Phone Number</label>
                    <input id="phone" className="form-control" type="number" placeholder='6xx xxx xxx' min={0} />
                </fieldset>
            </div>
            <div className="row">
                <fieldset className="col-12">
                    <label for="message" className="form-label">Message</label>
                    <textarea id="message" className="form-control" maxLength={3000} rows="4"></textarea>
                    <p className="text-secondary">Add your message here. Max 3000 characters.</p>
                </fieldset>
            </div>
            <div className="d-grid gap-1 justify-content-end d-flex buttons p-4">
                <button type="button" className="btn btn-secondary">Cancel</button>
                <button type="button" className="btn btn-primary">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact