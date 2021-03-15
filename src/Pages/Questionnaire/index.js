import React, { useState } from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import data from '../../Datas'
import { Feather } from '@expo/vector-icons';
import logo from '../../../assets/logoupe.jpg'
import pacientModel from '../Answers'

export default function QuestionOne() {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [pacient, setPacient] = useState(pacientModel);
  console.log(pacient);

  return (
    <View style={styles.container}>
      {index <= 3 ?
        <>
          <View style={styles.questionContainer}>
            <View style={styles.imageContainer}>
              <Image source={logo} style={styles.logoStyle} />
            </View>
            <Text style={styles.question}>{data[index].question}</Text>
          </View>


          <View style={styles.buttonsContainer}>

            <TouchableOpacity style={styles.thumbsUp} onPress={() => {
              setIndex(index + 1)
              data[index].ans == true ? setPacient(prev => ({ ...prev, result: [...prev.result, { [data[index].id]: "Correct" }] }))
                : setPacient(prev => ({ ...prev, result: [...prev.result, { [data[index].id]: "Incorrect" }] }))
            }}>
              <Feather size={24} name="check" color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.thumbsDown} onPress={() => {
              setIndex(index + 1)
              data[index].ans == false ? setPacient(prev => ({ ...prev, result: [...prev.result, { [data[index].id]: "Correct" }] }))
                : setPacient(prev => ({ ...prev, result: [...prev.result, { [data[index].id]: "Incorrect" }] }))
            }}>
              <Feather size={24} name="x" color="#fff" />
            </TouchableOpacity>

          </View>
        </>
        :

        <View>
          <TouchableOpacity style={styles.thumbsDown} title="Fim" onPress={() => navigation.navigate("Home", { params: pacient })}>
            <Feather size={24} name="x" color="#fff" />
          </TouchableOpacity>
        </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#333',
    alignItems: 'center',
    padding: 32,
  },

  questionContainer: {
    alignSelf: 'baseline',
    height: 300,
    width: '100%',
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#eead2d',
    flexDirection: 'column',
    alignItems: 'center',
  },

  imageContainer: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoStyle: {
    resizeMode: 'contain',
    height: 150,
    width: 150,
  },

  question: {
    fontSize: 24,
    color: '#fff',
    marginTop: 32,
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  thumbsUp: {
    height: 80,
    width: 100,
    borderRadius: 4,
    backgroundColor: '#2e856e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  thumbsDown: {
    height: 80,
    width: 100,
    borderRadius: 4,
    backgroundColor: '#c62121',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 46,
  },
});
