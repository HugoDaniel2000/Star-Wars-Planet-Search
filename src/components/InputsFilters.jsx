import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

const columnFilter = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const comparisonFilter = ['maior que', 'menor que', 'igual a'];

function InputsFilters() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [sortColumn, setSortColumn] = useState('population');
  const [sort, setSort] = useState('');
  const {
    setFilterName,
    setValuesFilter,
    valuesFilter,
    setOrderFilter,
  } = useContext(AppContext);

  const filterByName = ({ target }) => {
    setFilterName(target.value);
  };

  const filterValues = () => {
    const value = valuesFilter;
    const a = value.concat({ column, comparison, number });
    setValuesFilter(a);
  };

  const filterOrder = () => setOrderFilter([{ sortColumn, sort }]);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ filterByName }
      />
      <select
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-filter"
      >
        {
          columnFilter.map((_column) => (
            !valuesFilter.find((filter) => filter.column === _column) && (
              <option>{ _column }</option>
            )
          ))
        }
      </select>

      <select
        value={ comparison }
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

      <select
        value={ sortColumn }
        data-testid="column-sort"
        onChange={ ({ target }) => setSortColumn(target.value) }
      >
        {
          columnFilter.map((_column) => (
            <option key={ _column }>{ _column }</option>
          ))
        }
      </select>
      <label htmlFor="input-radio1">
        {' '}
        Ascendente
        <input
          id="input-radio1"
          name="input-radio"
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onClick={ ({ target }) => setSort(target.value) }
        />
      </label>
      <label htmlFor="input-radio2">
        {' '}
        Descendente
        <input
          id="input-radio2"
          name="input-radio"
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onClick={ ({ target }) => setSort(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ filterOrder }
      >
        Ordenar

      </button>
    </div>
  );
}

export default InputsFilters;
