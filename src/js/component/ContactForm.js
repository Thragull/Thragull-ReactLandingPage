import React from 'react'

const ContactForm = () => {
  return (
    <>
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
    </>
  )
}

export default ContactForm