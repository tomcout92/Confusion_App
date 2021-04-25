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
  const [pacientsArray, setParray] = useState([])

  const loadPacients = async () => {
    const pacients = (await pacientRefs.get())
    const pacientsArray = []
    pacients.forEach(doc => pacientsArray.push(doc.data()))
    setParray(pacientsArray);
  }

  useEffect(() => { loadPacients() }, [])

  return pacientsArray;
}

export default PacientListDB;
