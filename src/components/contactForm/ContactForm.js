import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
      </label>
    <br/>
      <label>
        Phone:
        <input type='text' value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
      </label>
    <br/>
      <label>
        Email:
        <input type='text' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
      </label>
    <br/>
      <button type='submit'>Submit</button>
    </form>
    </>
  );
};

