import React, { useState } from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, View, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import pacientModel from '../Pacientinfo';

const PacientForm = () => {
  const [pname, setPname] = useState("");
  const [pacientAge, setPage] = useState(null);
  const [pacient, setPacient] = useState(pacientModel)
  console.log(pacient)

  return (
    <View style={styles.backgroud}>
      <Text style={{ color: '#a9a9a9', fontSize: 18 }}>Enter pacient name:</Text>
      <TextInput style={styles.input}
        placeholder='e.g Antônio Carlos Belchior Fontenelle Fernandes'
        onChangeText={(val) => setPname(val)} />

      <Text style={{ color: '#a9a9a9', fontSize: 18 }}>Enter pacient age:</Text>
      <TextInput style={styles.input}
        placeholder='e.g 25'
        onChangeText={(val) => setPage(val)} />

      <TouchableOpacity style={styles.button} title="Fim" onPress={() => setPacient(prev => ({ ...prev, name: pname, age: pacientAge, id: (prev.id + 1) }))}>
        <Text style={styles.navgiationContainer}>OK</Text>
      </TouchableOpacity>

    </View>
  );
}

export default PacientForm;

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: '#252850',
    height: '100%',
  },

  input: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#a9a9a9',
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  navgiationContainer: {
    fontSize: 18,
    color: '#fff',
    //marginTop: 32,
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  button: {
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight,
    padding: 16,
    //borderRadius: 20,
    backgroundColor: '#a9a9a9',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#fff',
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

}
);


