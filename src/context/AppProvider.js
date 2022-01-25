import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import apiPlanets from '../helpers/api';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [valuesFilter, setValuesFilter] = useState([]);

  useEffect(() => {
    apiPlanets().then((planets) => setData(planets));
  }, []);

  console.log(valuesFilter);
  // console.log(data);

  return (
    <main>
      <AppContext.Provider
        value={ {
          data,
          filterName,
          setFilterName,
          setValuesFilter,
          valuesFilter,
        } }
      >
        {children}
      </AppContext.Provider>
    </main>
  );
}

AppProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default AppProvider;
