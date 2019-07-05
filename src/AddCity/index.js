import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import uuidV4 from 'uuid/v4';
import { colors } from '../theme';


function AddCity({ screenProps }) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  onChangeText = (key, value) => {
    if(key === 'city') {
      setCity(value);
    } else {
      setCountry(value);
    }
  }

  onSubmit = () => {
    if(!city || !country) {
      return;
    }

    const cityObject = {
      city,
      country,
      locations: [],
      id: uuidV4()
    };

    screenProps.addCity(cityObject);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add City</Text>
      <TextInput
        placeholder='City Name'
        style={styles.input}
        value={city}
        onChangeText={val => onChangeText('city', val)}
      />
      <TextInput
        placeholder='Country Name'
        style={styles.input}
        value={country}
        onChangeText={val => onChangeText('country', val)}
      />
      <TouchableOpacity onPress={this.onSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Add City
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    margin: 10,
    paddingHorizontal: 8,
    height: 50
  },
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: '#fff'
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center'
  },
  heading: {
    color: '#fff',
    textAlign: 'center',
    margin: 10,
    fontSize: 40
  }
});

export default AddCity;