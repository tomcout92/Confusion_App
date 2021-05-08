import React from 'react'
import { StyleSheet, Text, StatusBar, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function InattetionTest({ route }) {

  const pacient = route.params
  const navigation = useNavigation();


  return (

    <View style={styles.container}>
      <View>
        <Text style={styles.orientContainer}>Fale as letras abaixo, com um intervalo de 3 segundos entre uma e outra,
        pedindo para um paciente apertar a sua mão a cada vez que ouvir a letra 'A'.
        {'\n\n'}
        </Text>
        <Text style={styles.orientContainer}>
          S   A   V   E   A   H   A   A   R   T
          </Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.orientContainer}>
          O paciente cometeu mais de dois erros?
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.thumbsDown} onPress={()=>{navigation.navigate('Escala Richmond', pacient)}}>
          <Text style={{ fontSize: 20, color: '#fff', }}>Sim!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.thumbsUp} onPress={()=>{navigation.navigate('Diagnóstico', {...pacient, result: "Negativo"})}}>
          <Text style={{ fontSize: 20, color: '#fff', }}>Não!</Text>
        </TouchableOpacity>
      </View>
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    marginBottom: 'auto',
    backgroundColor: '#252850',
    alignItems: 'center',
    padding: 32,
  },

  orientContainer: {
    fontSize: 16,
    color: '#d3d3d3',
    textAlign: 'center'
  },

  questionContainer: {
    marginTop: StatusBar.currentHeight,
    marginBottom: 'auto',
    backgroundColor: '#252850',
    alignItems: 'center',
    padding: 32,
  },

  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 46,
  },

  thumbsUp: {
    height: 80,
    width: 100,
    borderRadius: 4,
    backgroundColor: '#a9a9a9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  thumbsDown: {
    height: 80,
    width: 100,
    borderRadius: 4,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
