import React, { useContext, useState, useEffect } from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import pacient from '../../Datas/Pacientinfo';
import firebase from '../../DataBase/firebasedb'
import {useNavigation } from '@react-navigation/native';
import PacientListDB from '../../PacientListDB'
import PacientInfos from '../PacientPage'

const PacientList = () => {

    const navigation = useNavigation();
    const pacients = PacientListDB();

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Pacient number</DataTable.Title>
        <DataTable.Title numeric>Pacient name</DataTable.Title>
      </DataTable.Header>

      {pacients.map((pacient, index) => (
        <TouchableOpacity
          onPress={() => {
                      navigation.navigate("Pacient Infos", pacient)}
            }
        >
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
