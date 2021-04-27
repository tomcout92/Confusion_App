import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import logo from '../../../assets/logoupe.jpg';
import firebase from '../../DataBase/firebasedb'

export default function QuestionOne({route}) {

  const navigation = useNavigation();
  pacient = route.params

  return (
    <View style={styles.container}>
      <>
        <ScrollView contentContainerStyle={styles.questionContainer}>
          <View style={styles.imageContainer}>
            <Image source={logo} style={styles.logoStyle} />
          </View>
          <Text style={styles.question}>O paciente apresentou mudança aguda ou flutuações no comportamento basal?</Text>
        </ScrollView>


        <View style={styles.buttonsContainer}>

          <TouchableOpacity style={styles.thumbsUp} onPress={()=>{navigation.navigate('CAM-ICU Diagnostic', {...pacient, result:"Positive"})}}>
            <Feather size={24} name="check" color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.thumbsDown}>
            <Feather size={24} name="x" color="#fff" />
          </TouchableOpacity>

        </View>

      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    padding: 32,
  },

  questionContainer: {
    alignSelf: 'baseline',
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#252850',
    flexDirection: 'column',
    alignItems: 'center',
  },

  navigationContainer: {
    fontSize: 18,
    color: '#fff',
    marginTop: 32,
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  imageContainer: {
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoStyle: {
    resizeMode: 'contain',
    height: 120,
    width: 120,
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

  button: {
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

  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 46,
  },
});
