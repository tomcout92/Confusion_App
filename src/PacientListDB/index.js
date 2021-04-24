// @refresh reset
import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { useAsyncStorage, AsyncStorageStatic, AsyncStorage } from '@react-native-async-storage/async-storage'
import { View, Text, StyleSheet, LogBox } from 'react-native';
import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_UrSQxeGOvbqAYMO6xXP3s54Iybpvht8",
  authDomain: "delirium-app.firebaseapp.com",
  projectId: "delirium-app",
  storageBucket: "delirium-app.appspot.com",
  messagingSenderId: "669458289670",
  appId: "1:669458289670:web:3f94294c72e9e215d79f87",
  measurementId: "G-B2W4N2MW2D"
}

LogBox.ignoreLogs(['Setting a time for a long period of time'])

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const pacientRefs = db.collection('pacients');

const PacientListDB = () => {
  const [pacient, setPacient] = useState(null);

  useEffect(() => {
    fetchList()
    const newPatients = pacientRefs.onSnapshot(querySnapshot => {
      const pacientList = querySnapshot.docChanges().filter(({ type }) => type === 'added')})
    }, []);

    async function fetchList() {
      const pacientList = await AsyncStorage.getItem('pacient');

      if (pacient) {
        setPacientList(JSON.parse(pacient));
      }
    }

    async function handlePress() {
      await AsyncStorage.SetItem('pacient', JSON.stringify(pacient))
      setPacientList(pacient)
    }


    if (!pacient) {
      return (
        <View>
          <Text>Ainda não temos pacientes</Text>
        </View>
      )
    }
    return (

      <View>
        <Text>Temos Pacientes</Text>
      </View>
    )
  }
export default PacientListDB;
