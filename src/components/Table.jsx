import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const header = [
  'Name', 'Rotation Period',
  'Orbital Period', 'Diameter',
  'Climate', 'Gavity',
  'Terrain', 'Surface Water',
  'Population', 'Films',
  'Created', 'Edited',
  'URL',
];

function Table() {
  const {
    data,
    filterName,
    valuesFilter,
    setValuesFilter,
    orderFilter,
  } = useContext(AppContext);
  const planets = data;

  const showPlanet = (planet) => {
    const { name } = planet;

    if (!name.toLowerCase().includes(filterName.toLowerCase())) {
      return false;
    }
    const result = Object.keys(valuesFilter).every(
      (index) => {
        const { column, comparison, number } = valuesFilter[index];

        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(number);
        }

        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(number);
        }

        return Number(planet[column]) === Number(number);
      },
    );

    return result;
  };

  let displayPlanets = planets.filter((value) => showPlanet(value))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (orderFilter.length > 0) {
    if (orderFilter[0].sort === 'ASC') {
      displayPlanets = displayPlanets
        .sort((a, b) => a[orderFilter[0].sortColumn] - b[orderFilter[0].sortColumn]);
    } else {
      displayPlanets = displayPlanets
        .sort((a, b) => b[orderFilter[0].sortColumn] - a[orderFilter[0].sortColumn]);
    }
  }

  const removeFilter = (index) => {
    const arrayFilter = valuesFilter.filter((value, i) => index !== i);
    return setValuesFilter(arrayFilter);
  };

  return (
    <div>
      <div>
        {valuesFilter.map(({ column, comparison, number }, index) => (
          <div
            data-testid="filter"
            key={ index }
          >
            <p>{`${column}, ${comparison}, ${number}`}</p>
            <button
              type="button"
              onClick={ () => removeFilter(index) }
            >
              X

            </button>
          </div>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            {
              header.map((item) => (<th key={ item }>{ item }</th>))
            }
          </tr>
        </thead>
        <tbody>
          { displayPlanets.map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
