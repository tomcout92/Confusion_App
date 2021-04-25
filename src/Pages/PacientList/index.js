import React, { useContext, useState, useEffect } from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import pacient from '../../Datas/Pacientinfo';
import firebase from '../../DataBase/firebasedb'
import PacientListDB from '../../PacientListDB'

const db = firebase.firestore();
const pacientRefs = db.collection('pacients');

const PacientList = () => {

  const [loaded, setLoaded] = useState(false)
  const [pacientsArray, setParray] = useState([])

  const loadPacients = async () => {
    console.log("Vai rolar")
    const pacients = (await pacientRefs.get())
    const pacientsArray = []
    pacients.forEach(doc => pacientsArray.push(doc.data()))
    setParray(pacientsArray);
  }

  useEffect(() => { loadPacients() }, [])
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Escore</DataTable.Title>
        <DataTable.Title numeric>Estado</DataTable.Title>
      </DataTable.Header>

      {pacientsArray.map((pacient, index) => (
        <TouchableOpacity>
          <DataTable.Row>
            <DataTable.Cell>{index + 1}</DataTable.Cell>
            <DataTable.Cell >
              {pacient.name}
            </DataTable.Cell>
          </DataTable.Row>
        </TouchableOpacity>
      ))}
    </DataTable >


  );
}

export default PacientList;
