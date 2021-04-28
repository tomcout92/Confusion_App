import React from 'react';
import { TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function RassTable({route}){

  const navigation = useNavigation();
  const pacient = route.params

  const PressButton = () => {navigation.navigate('CAM-ICU Diagnostic', {...pacient, result: "Positive"})}

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Escore</DataTable.Title>
        <DataTable.Title numeric>Estado</DataTable.Title>
      </DataTable.Header>

      <TouchableOpacity onPress={PressButton}>
        <DataTable.Row>
          <DataTable.Cell>+4</DataTable.Cell>
          <DataTable.Cell>Combativo</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity onPress={PressButton}>
        <DataTable.Row>
          <DataTable.Cell>+3</DataTable.Cell>
          <DataTable.Cell>Muito agitado</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity onPress={PressButton}>
        <DataTable.Row>
          <DataTable.Cell>+2</DataTable.Cell>
          <DataTable.Cell>Agitado</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity onPress={PressButton}>
        <DataTable.Row>
          <DataTable.Cell>+1</DataTable.Cell>
          <DataTable.Cell>Ansioso</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> {navigation.navigate('Questionnaire', pacient)}}>
        <DataTable.Row>
          <DataTable.Cell>0</DataTable.Cell>
          <DataTable.Cell>Alerta e Calmo</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity onPress={PressButton}>
        <DataTable.Row>
          <DataTable.Cell>-1</DataTable.Cell>
          <DataTable.Cell>Sonolento</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity onPress={PressButton}>
        <DataTable.Row>
          <DataTable.Cell>-2</DataTable.Cell>
          <DataTable.Cell>Sedação leve</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity onPress={PressButton}>
        <DataTable.Row>
          <DataTable.Cell>-3</DataTable.Cell>
          <DataTable.Cell>Sedação moderada</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity onPress={PressButton}>
        <DataTable.Row>
          <DataTable.Cell>-4</DataTable.Cell>
          <DataTable.Cell>Sedação profunda</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

      <TouchableOpacity onPress={PressButton}>
        <DataTable.Row>
          <DataTable.Cell>-5</DataTable.Cell>
          <DataTable.Cell>Incapaz de ser despertado</DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>

    </DataTable >
  );
}
