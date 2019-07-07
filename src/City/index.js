import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { colors } from '../theme';

function City({ navigation, screenProps }) {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');

  onChangeText = (key, value) => {
    if(key === 'name') {
      setName(value);
    } else {
      setInfo(value);
    }
  }

  addLocation = () => {
    if(name === '' || info === '') {
      return;
    }

    screenProps.addLocation(navigation.state.params.city.id, {
      name,
      info
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.name}>Welcome to {navigation.state.params.city.city}</Text>
      <ScrollView>
        <View style={{ flex: 1 }}>
          {
            navigation.state.params.city.locations.map((location, index) => (
              <View key={index} style={styles.locationContainer}>
                <Text style={styles.name}>{location.name}</Text>
                <Text style={styles.info}>{location.info}</Text>
              </View>
            ))
          }
        </View>
      </ScrollView>
      <TextInput
        placeholder='Location Name'
        style={styles.input}
        value={name}
        onChangeText={val => onChangeText('name', val)}
      />
      <TextInput
        placeholder='Location Info'
        style={[styles.input, styles.input2]}
        value={info}
        onChangeText={val => onChangeText('info', val)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={this.addLocation}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Location</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    position: 'absolute',
    height: 50,
    backgroundColor: colors.primary,
    width: '100%',
    bottom: 104,
    left: 0,
    color: 'white'
  },
  input2: {
    bottom: 52
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
})

export default City; 