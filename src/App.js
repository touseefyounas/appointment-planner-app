import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const [contact, setContact] = useState([]);
  const [appointment, setAppointment] = useState([]);

  
  const addContact = (name, phone, email) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email
    }
    setContact (prev => [...prev, newContact]);
  }

  const addAppointment = (name, contact, date, time) => {
    const newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time
    }
    setAppointment(prev => [...prev, newAppointment]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contact} addContact={addContact}/>  }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contact} appointments={appointment} addAppointment={addAppointment}/>  }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
