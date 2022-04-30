import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [submited, setSubmited] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    textarea: '',
  });

  const inputHandle = (e) => {
    e.preventDefault();
    setFormData(e.target.value);
  };

  const isSubmited = (e) => {
    e.preventDefault();
    setSubmited(true);
  };

  return (
    <div className="main">
      <form className="form" onSubmit={isSubmited}>
        <input
          type="text"
          value={formData.firstName}
          onChange={inputHandle}
          placeholder="First name"
          maxLength="20"
          required
        />
        <input
          type="text"
          value={formData.lastName}
          onChange={inputHandle}
          placeholder="Last name"
          maxLength="20"
          required
        />
        <input
          type="email"
          value={formData.email}
          onChange={inputHandle}
          placeholder="Email"
          maxLength="20"
          required
        />
        <textarea
          value={formData.textarea}
          onChange={inputHandle}
          placeholder="Message"
          maxLength="20"
          required
        />
        <button type="submit" className="form-btn">Send</button>
      </form>
      {
        submited ? <div className="success">Succesfully sent</div> : null
      }
    </div>
  );
}

export default Form;
