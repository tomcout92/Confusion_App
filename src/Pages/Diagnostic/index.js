import React, { useState } from 'react';
import { StyleSheet, Text, StatusBar, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UpdateDB from '../../DataBase/updatedb';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function Diagnostic({ route }) {

  const navigation = useNavigation();
  const [pacient, setPacient] = useState(route.params)


  function pressButton(){
    setPacient(prev=>({...prev, result: "Positive"}));
    UpdateDB(pacient, updateComplete())
    console.log(pacient)
  }

  function updateComplete(){
    navigation.navigate("Home");
  }



  return (
    <View style={styles.resultContainer}>
      <TouchableOpacity onPress={()=>pressButton()}>
        <View style={[{ flexDirection: 'column', alignItems: 'center' }]}>
          <Feather size={40} name="alert-triangle" color="#fff" />
          <Text style={styles.textContainer}>Delirium presente!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({

  resultContainer: {
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#ff0000',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#fff',
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  textContainer: {
    fontSize: 18,
    color: '#fff',
    marginTop: 32,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
}
);
