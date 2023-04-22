import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Henry',
    admin: false,
  });

  // const [firstName, setFirstName] = useState('John');
  // const [lastName, setLastName] = useState('Henry');

  function handleChange(e) {
    // name is the KEY in of the formData object we're trying to update
    const name = e.target.name;
    let value = e.target.value;
    // const value = e.target.type === 'checked' ? e.target.checked : e.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData);
  }

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.lastName}
      />

      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
