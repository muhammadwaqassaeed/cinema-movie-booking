import React, {useState} from "react";
import "./App.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "Select Category",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData); 

    // Send form data to the backend (replace 'your-backend-endpoint' with the actual endpoint)
    const response = await fetch('http://localhost:5000/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle successful submission
      console.log('Form submitted successfully');
    } else {
      // Handle error
      console.error('Failed to submit form');
    }
  };
  return (
<div>
       <center>
        <div>
  <div className="row justify-content-center">
    <div className="col-md-6 text-center mb-3">
      <h3 className="heading-section-primary display-2 mt-5 text-white">Contact Form</h3>
    </div>
  </div>
  <div className="modal-body ">
    <div className="contact-form">
      <form action="" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              name="name"
              onChange={handleChange}
               value={formData.name}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
              name="subject"
              onChange={handleChange}
              value={formData.subject}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <select className="form-control"
            name="category"
            onChange={handleChange}
            value={formData.category}
            >
              <option>Select Category</option>
              <option>Bahria Cinema</option>
              <option>Emporium Cinema</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <textarea
               className="form-control"
               placeholder="Message"
               name="message"
               onChange={handleChange}
               value={formData.message}
            />
          </div>
        </div>
        <div className="col-md-12">
          <center>
            <div className="form-group">
              <button type="submit" className="btn btn-dark">Submit</button>
              <div className="submitting" />
            </div>
          </center>
        </div>
      </form>
    </div>
  </div></div>
</center>
    </div>
  );
}

export default ContactUs;
