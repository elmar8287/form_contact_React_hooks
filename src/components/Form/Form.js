import React, {useState} from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textarea: "",
  })

  const inputHandle = (e) => {
    e.preventDefault();
    setFormData(e.target.value)
  }
  return (
    <div className="main">
      <form className="form">
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
      <div className="success">Succesfully sent</div>
    </div>
  );
}

export default Form;
