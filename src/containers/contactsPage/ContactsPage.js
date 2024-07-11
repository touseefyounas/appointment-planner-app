import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false); 
  
  const checkDuplicates = (name) => {
    return contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!check){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    setCheck(checkDuplicates(name));
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} phone={phone} email={email} handleSubmit={handleSubmit} setName={setName} setPhone={setPhone} setEmail={setEmail}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts}/>
      </section>
    </div>
  );
};
