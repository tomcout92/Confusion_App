import React, { useContext} from 'react';
import { StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import RiskFactor from '../../Components/Riskfactor';
import PacientContext from '../../Context/pacient';
import firebase from '../../DataBase/firebasedb'

const PacientForm = () => {

  const riskFactor = [{ id: 1, factor: "Depression/Anxiety" },
  { id: 2, factor: "Dementia" },
  { id: 3, factor: "Smoker" },
  { id: 3, factor: "Alcohol Abuse" }];

  const navigation = useNavigation();

  //Pacient infos
  const { pacient, setPacient } = useContext(PacientContext);
  //Pacient infos end

  const db = firebase.firestore();
  const pacientRefs = db.collection('pacients');

  /*********************************End form executed function **************************************** */
  const onPress = () => {
    pacientRefs.add(pacient);
    navigation.navigate("Home")
  };
  /*********************************End form executed function **************************************** */

  return (
    <View style={styles.backgroud}>
      <Text style={{ color: '#a9a9a9', fontSize: 18 }}>Enter pacient name:</Text>
      <TextInput style={styles.input}
        placeholder='e.g Antônio Carlos Belchior Fontenelle Fernandes'
        onChangeText={(val) => setPacient(prev=>({...prev, name:val}))
        } />

      <Text style={{ color: '#a9a9a9', fontSize: 18 }}>Enter pacient age:</Text>
      <TextInput style={styles.input}
        placeholder='e.g 25'
        onChangeText={(val) => setPacient(prev=>({...prev, age:val}))} />

      <Picker
        style={styles.dropDown}
        mode='dropdown'
        selectedValue={pacient.gender}
        onValueChange={(itemValue, itemIndex) =>
          setPacient(prev=>({...prev, gender:itemValue}))
        }>
        <Picker.Item color="grey" label="Pacient Gender" value="" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>


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

  dropDown: {
    width: '70%',
    backgroundColor: '#fff',
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


