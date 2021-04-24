// @refresh reset
import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { useAsyncStorage, AsyncStorageStatic, AsyncStorage } from '@react-native-async-storage/async-storage'
import { View, Text, StyleSheet, LogBox } from 'react-native';
import firebase from '../DataBase/firebasedb'

LogBox.ignoreLogs(['Setting a time for a long period of time'])

const db = firebase.firestore();
const pacientRefs = db.collection('pacients');

const PacientListDB = () => {
  const [pacient, setPacient] = useState(null);

  useEffect(() => {
    pacientRefs.onSnapshot(querySnapshot => {
      const pacientFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === 'added')
        .map(({ doc }) => {
          const pacientData = doc.data();
          return pacientData;
        }
        );
      console.log(pacientFirestore);
    })
  }, []);

  return null;
}
export default PacientListDB;
