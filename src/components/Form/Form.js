import React from 'react';
import "./Form.css";

function Form() {
  return (
    <div className='main'>
      <form className='form'>
        <input type="text" placeholder="First name" maxLength="50" required/>
        <input type="text" placeholder="Last name" maxLength="50" required/>
        <input type="email" placeholder="Email" maxLength="50" required/>
        <textarea placeholder="Message" maxLength="50"/>
        <button type="submit" className='form-btn'>Send</button>
      </form>
    </div>
  );
}

export default Form;
