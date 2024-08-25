import React from 'react';

function FormData({ formData, handleChange }) {
  return (
    <form>
      <input
        type='text'
        placeholder='First Name Here'
        name='firstName'
        value={formData.firstName}
        onChange={handleChange}
      />
      <br />
      <input
        type='text'
        placeholder='Last Name Here'
        name='lastName'
        value={formData.lastName}
        onChange={handleChange}
      />
      <br />
      <input
        type='text'
        placeholder='Age'
        name='age'
        value={formData.age}
        onChange={handleChange}
      />
      <br />
      <div>
        <label>
          <input
            type='radio'
            name='gender'
            value='Male'
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type='radio'
            name='gender'
            value='Female'
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type='radio'
            name='gender'
            value='Other'
            checked={formData.gender === 'Other'}
            onChange={handleChange}
          />
          Other
        </label>
      </div>
      <br />
      <label>
        Select your destination:
        <select
          name='destination'
          value={formData.destination}
          onChange={handleChange}
        >
          <option value=''>-- Please Choose a Destination --</option>
          <option value='USA'>USA</option>
          <option value='Canada'>Canada</option>
          <option value='Australia'>Australia</option>
        </select>
      </label>
      <br />
        Dietary restrictions
        <label>
          <input
            type='checkbox'
            name='nutsFree'
            checked={formData.dietaryRestrictions.nutsFree}
            onChange={handleChange}
          />
          Nuts free
        </label>
        <label>
          <input
            type='checkbox'
            name='lactoseFree'
            checked={formData.dietaryRestrictions.lactoseFree}
            onChange={handleChange}
          />
          Lactose Free
        </label>
        <label>
          <input
            type='checkbox'
            name='vegan'
            checked={formData.dietaryRestrictions.vegan}
            onChange={handleChange}
          />
          Vegan
        </label>
      <br />
      <h3>Entered Information:</h3>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Age: {formData.age}</p>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default FormData;