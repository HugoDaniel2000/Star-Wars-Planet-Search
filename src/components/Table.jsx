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
  const { data, filterName } = useContext(AppContext);
  let planets = data;
  if (filterName !== '') {
    planets = data.filter((value) => value.name
      .toLowerCase().includes(filterName.toLowerCase()));
  }

  return (
    <table>
      <thead>
        <tr>
          {
            header.map((item, i) => (<th key={ i }>{ item }</th>))
          }
        </tr>
      </thead>
      <tbody>
        {planets.length > 0 && planets.map((planet, i) => (
          <tr key={ i }>
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
