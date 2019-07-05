import React, { useState } from 'react';
import AppContainer from './src';

function App() {
  const [cities, setCities] = useState([]);

  const addCity = (cityObject) => {
    if(!cities.find(city => city.city === cityObject.city)) {
      setCities([...cities, cityObject])
    }
  }

  return (
    <AppContainer
      screenProps={{
        cities,
        addCity
      }}
    />
  );
}

export default App;
