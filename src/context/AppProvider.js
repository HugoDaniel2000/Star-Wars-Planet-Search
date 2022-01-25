import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import apiPlanets from '../helpers/api';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState();

  useEffect(() => {
    apiPlanets().then((data) => setPlanets(data));
  }, []);

  return (
    <main>
      <AppContext.Provider value={ planets }>
        {children}
      </AppContext.Provider>
    </main>
  );
}

AppProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default AppProvider;
