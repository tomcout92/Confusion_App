import React, {useContext, useState } from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, View, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import pacientModel from '../Pacientinfo';
import RiskFactor from '../../Components/Riskfactor';
import PacientContext from '../../Context/pacient';

const PacientForm = () => {

  const riskFactor = [{ id: 1, factor: "Fumante" },
  { id: 2, factor: "Dementia" }];

  const navigation = useNavigation();
  const [pname, setPname] = useState("");
  const [pacientAge, setPage] = useState(null);
  const {pacient, setPacient} = useContext(PacientContext);
  console.log(pacient);

  /*********************************End form executed function **************************************** */
  const onPress = () => {
    setPacient(prev => ({ ...prev, name: pname, age: pacientAge, id: (prev.id + 1) })),
      navigation.navigate("Home")
  };
  /*********************************End form executed function **************************************** */

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

      { riskFactor.map((value, index) => <RiskFactor key={index} value={value.factor} pacient={pacient} />)}

      <TouchableOpacity style={styles.button} title="Fim" onPress={onPress}>
        <Text style={styles.navgiationContainer}>OK</Text>
      </TouchableOpacity>

    </View >
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
    marginBottom: 20,
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


