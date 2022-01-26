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
  const { data, filterName, valuesFilter } = useContext(AppContext);
  const planets = data;

  const canShowPlanet = (planet) => {
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

  const displayPlanets = planets.filter((value) => canShowPlanet(value));

  return (
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
            <td>{ planet.name }</td>
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
  );
}

export default Table;
