import React from 'react';

const OptionList = ({ value, sagas, handleChange }) => {
  return (
    <select name='saga' value={value} onChange={handleChange}>
      <option value='' defaultValue hidden>
        Seleccionar Saga
      </option>
      {sagas.map((saga, index) => (
        <option value={saga.title} key={index}>
          {saga.title}
        </option>
      ))}
    </select>
  );
};

export default OptionList;
