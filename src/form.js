import React, { useState } from 'react';

const Form = () => {
  const [klass, setKlass] = useState('');
  const [title, setTitle] = useState(null);
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [departure, setDeparture] = useState('');
  const [destination, SetDestination] = useState('');
  const departureHnadler = (e) => {
    setDeparture(e.target.value);
  };
  const destinationHnadler = (e) => {
    SetDestination(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (
      firstName &&
      lastName &&
      isChecked &&
      numberOfTickets &&
      departure &&
      destination &&
      title &&
      klass
    ) {
      const newticket = {
        firstName,
        lastName,
        klass,
        isChecked,
        title,
        numberOfTickets,
        destination,
        departure,
      };

      console.log(newticket);
    }
  };

  const handleSelect = (e) => {
    setTitle(e.target.value);
  };

  const handleKlass = (e) => {
    setKlass(e.target.name);
  };

  return (
    <>
      <div className='container'>
        <select onChange={departureHnadler}>
          <option>From</option>
          <option value='Srockholm'>Stockholm</option>
          <option value='Guthenburg'>Guthenburg</option>
          <option value='Uppsala'>Uppsala</option>
        </select>
        <select onChange={destinationHnadler}>
          <option>To</option>
          <option value='Srockholm'>Stockholm</option>
          <option value='Guthenburg'>Guthenburg</option>
          <option value='Uppsala'>Uppsala</option>
        </select>
      </div>
      <div className='radio-container'>
        <div>
          <input
            type='radio'
            value={klass}
            onChange={handleKlass}
            name='first klass'
          />
          1 klass
        </div>
        <div>
          <input
            type='radio'
            value={klass}
            onChange={handleKlass}
            name='secand Klass'
          />
          2 klass
        </div>
      </div>
      <div className='info'>
        <div>
          <h5>number of tickets</h5>
          <input
            className='tickets'
            type='number'
            step='1'
            min='1'
            max='10'
            value={numberOfTickets}
            onChange={(e) => setNumberOfTickets(e.target.value)}
          ></input>
        </div>
        <div className='title'>
          <h5>title</h5>
          <select onChange={handleSelect}>
            <option>Select</option>
            <option value='Mr'>Mr</option>
            <option value='Ms'>Ms</option>
          </select>
        </div>
      </div>
      <form action='' className='form-container'>
        <div>
          <label htmlFor=''> first name</label>
          <input
            type='text'
            name='firstname'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=''>Last name</label>
          <input
            type='text'
            name='firstname'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </form>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      approve
      <button type='submit' className='btn' onClick={submithandler}>
        buy
      </button>
    </>
  );
};

export default Form;
