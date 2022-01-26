import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import apiPlanets from '../helpers/api';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [valuesFilter, setValuesFilter] = useState([]);
  const [orderFilter, setOrderFilter] = useState([]);

  useEffect(() => {
    apiPlanets().then((planets) => setData(planets));
  }, []);

  return (
    <main>
      <AppContext.Provider
        value={ {
          data,
          filterName,
          setFilterName,
          setValuesFilter,
          valuesFilter,
          orderFilter,
          setOrderFilter,
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
