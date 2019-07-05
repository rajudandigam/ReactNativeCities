import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';

import { colors } from '../theme';

function Cities({ screenProps, navigation }) {

  viewCity = (city) => {
    navigation.navigate('City', { city });
  }

  return (
    <ScrollView>
      <View>
        {
          screenProps.cities.map((city, index) => (
            <View>
              <TouchableWithoutFeedback
                onPress={() => viewCity(city)}
              >
                <View style={styles.cityContainer}>
                  <Text>{city.city}</Text>
                  <Text>{city.country}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          ))
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  city: {
    fontSize: 20,
  },
  country: {
    color: 'rgba(0, 0, 0, 0.5)'
  },
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  }
})

export default Cities;