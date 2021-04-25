// @refresh reset
import React from 'react'
import { useState, useEffect } from 'react';
import {LogBox } from 'react-native';
import firebase from '../DataBase/firebasedb'

LogBox.ignoreLogs(['Setting a time for a long period of time'])

const db = firebase.firestore();
const pacientRefs = db.collection('pacients');

const PacientListDB = () => {
  const [pacientsArray, setParray] = useState([])

  const loadPacients = async () => {
    const pacients = (await pacientRefs.get())
    const pacientsArray = []
    pacients.forEach(doc => {
      let currentID = doc.id
      let appObj = {...doc.data(), ['id']:currentID}
      pacientsArray.push(appObj)})
    setParray(pacientsArray);
  }

  useEffect(() => { loadPacients() }, [])

  return pacientsArray;
}

export default PacientListDB;
