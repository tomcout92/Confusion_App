import React from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import Questionnaire from '../Questionnaire';
import Formulary from '../Formulary'

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.background}>
        <TouchableOpacity style={styles.button} title="Tests" onPress={() => navigation.navigate("Questionnaire")}>
          <View style={[{ flexDirection: 'column', alignItems: 'center' }]}>
            <Feather name="clipboard" size={40} color="#fff" />
            <Text style={styles.navgiationContainer}>Add New Pacient</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} title="Tests" onPress={() => navigation.navigate("Formulary")}>
          <View style={[{ flexDirection: 'column', alignItems: 'center' }]}>
            <Feather name="align-left" size={40} color="#fff" />
            <Text style={styles.navgiationContainer}>Pacient List</Text>
          </View>
        </TouchableOpacity>

      </View>
    </>
  );

}

export default Home;

const styles = StyleSheet.create({

  background: {
    backgroundColor: '#252850',
    height: '100%',
  },

  button: {
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#252850',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#fff',
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#333',
    alignItems: 'center',
    padding: 32,
  },

  navgiationContainer: {
    fontSize: 18,
    color: '#fff',
    marginTop: 32,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
