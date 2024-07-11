import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type='text' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
      </label>
    <br/>
      <label>
        Date:
        <input min={getTodayString()} type='date' value={date} onChange={(e) => {setDate(e.target.value)}}/>
      </label>
    <br/>
      <label>
        Time:
        <input type='time' value={time} onChange={(e) => {setTime(e.target.value)}}/>
      </label>
    <br/>
      <ContactPicker name='contact' contacts={contacts} value={contact} onChange={(e) => {setContact(e.target.value)}}/>
      <button type='submit'>Submit</button>
      </form>
    </>
  );
};
