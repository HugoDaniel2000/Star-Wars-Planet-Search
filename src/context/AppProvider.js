import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import apiPlanets from '../helpers/api';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    apiPlanets().then((planets) => setData(planets));
  }, []);

  return (
    <main>
      <AppContext.Provider value={ data }>
        {children}
      </AppContext.Provider>
    </main>
  );
}

AppProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default AppProvider;
