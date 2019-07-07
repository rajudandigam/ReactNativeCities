import React, { useState } from 'react';
import AppContainer from './src';

function App() {
  const [cities, setCities] = useState([]);

  const addCity = (cityObject) => {
    if(!cities.find(city => city.city === cityObject.city)) {
      setCities([...cities, cityObject])
    }
  }

  const addLocation = (cityId, location) => {
    const currentCity = cities.find(city => city.id === cityId);

    currentCity.locations.push(location);

    setCities([...cities]);
  }

  return (
    <AppContainer
      screenProps={{
        cities,
        addCity,
        addLocation
      }}
    />
  );
}

export default App;
