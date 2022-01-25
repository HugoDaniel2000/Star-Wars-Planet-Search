import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function InputsFilters() {
  const { setFilterName } = useContext(AppContext);

  const filterByName = ({ target }) => {
    setFilterName(target.value);
  };
  return (
    <input
      type="text"
      data-testid="name-filter"
      placeholder="Filtrar por nome"
      onChange={ filterByName }
    />
  );
}

export default InputsFilters;
