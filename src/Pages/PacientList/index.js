import React, { useContext, useState } from 'react';
import { Image,StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import PacientListDB from '../../PacientListDB'

const PacientList = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Escore</DataTable.Title>
        <DataTable.Title numeric>Estado</DataTable.Title>
      </DataTable.Header>

      <TouchableOpacity>
        <DataTable.Row>
          <DataTable.Cell>+4</DataTable.Cell>
          <DataTable.Cell numeric>Combativo</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity>
        <DataTable.Row>
          <DataTable.Cell>+3</DataTable.Cell>
          <DataTable.Cell numeric>Muito agitado</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity>
        <DataTable.Row>
          <DataTable.Cell>+2</DataTable.Cell>
          <DataTable.Cell numeric>Agitado</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity>
        <DataTable.Row>
          <DataTable.Cell>+1</DataTable.Cell>
          <DataTable.Cell numeric>Ansioso</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity>
        <DataTable.Row>
          <DataTable.Cell>0</DataTable.Cell>
          <DataTable.Cell numeric>Alerta e Calmo</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity>
        <DataTable.Row>
          <DataTable.Cell>-1</DataTable.Cell>
          <DataTable.Cell numeric>Sonolento</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity>
        <DataTable.Row>
          <DataTable.Cell>-2</DataTable.Cell>
          <DataTable.Cell numeric>Sedação leve</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity>
        <DataTable.Row>
          <DataTable.Cell>-3</DataTable.Cell>
          <DataTable.Cell numeric>Sedação moderada</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity>
        <DataTable.Row>
          <DataTable.Cell>-4</DataTable.Cell>
          <DataTable.Cell numeric>Sedação profunda</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity>
        <DataTable.Row>
          <DataTable.Cell>-5</DataTable.Cell>
          <DataTable.Cell numeric>Incapaz de ser despertado</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

    </DataTable>
  );
}

export default PacientList;
