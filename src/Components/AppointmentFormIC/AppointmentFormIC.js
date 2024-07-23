import React, { useState } from 'react'

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
    };

    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;  
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
        <label htmlFor="date">Date of Appointment:</label>
            <input type="date" id="start" name="trip-start"
            value={{ today }}
            min={{ today }} max="2025-12-31"></input>
        </div>

        <div>
        <label htmlFor="select">Book a Time Slot:</label>
        <select>
            <option >Select a time slot</option>
            <option value="7:30AM">7:30AM</option>
            <option value="8:00AM">8:00AM</option>
            <option value="8:30AM">8:30AM</option>
            <option value="9:00AM">9:00AM</option>
            <option value="9:30AM">9:30AM</option>
        </select>
            
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormIC
