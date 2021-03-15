import React from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import Questionnaire from '../Questionnaire';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.button} title="Tests" onPress={() => navigation.navigate("Questionnaire")}>
        <li>
          <Feather name="clipboard" size={24} />
          <span>Questionnaire</span>
        </li>
      </TouchableOpacity>
    </View>
  )

}

export default Home;

const styles = StyleSheet.create({

  button: {
    alignSelf: 'center',
    height: '100%',
    width: 200,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#eead2d',
    flexDirection: 'column',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#333',
    alignItems: 'center',
    padding: 32,
  },
});
