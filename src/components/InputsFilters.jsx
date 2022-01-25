import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

const columnFilter = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const comparisonFilter = ['maior que', 'menor que', 'igual a'];

function InputsFilters() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);

  const {
    setFilterName,
    setValuesFilter,
  } = useContext(AppContext);

  const filterByName = ({ target }) => {
    setFilterName(target.value);
  };

  const filterValues = () => {
    setValuesFilter([column, comparison, number]);
  };
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ filterByName }
      />
      <select
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-filter"
      >
        {columnFilter.map((value) => <option key={ value }>{ value }</option>)}
      </select>

      <select
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        {comparisonFilter.map((value) => <option key={ value }>{ value }</option>)}
      </select>

      <input
        type="number"
        value={ number }
        data-testid="value-filter"
        onChange={ ({ target }) => setNumber(target.value) }

      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterValues }
      >
        Filtrar

      </button>
    </div>
  );
}

export default InputsFilters;
