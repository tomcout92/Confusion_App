import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, View } from 'react-native';
import { DataTable } from 'react-native-paper';

const PacientInfos = ({route, navigation}) => {

  const any = route.params
  console.log(any)
  return (
    <>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>{any.name}</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>Gender</DataTable.Cell>
            <DataTable.Cell numeric>{any.gender}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Risk Factors</DataTable.Cell>
            <DataTable.Cell numeric>Dementia</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Delirium Diagnostic</DataTable.Cell>
            <DataTable.Cell numeric>Not defined</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      <View style={styles.container}>

        <TouchableOpacity>
          <Text style={styles.textbutton}>CAM-ICU</Text>
        </TouchableOpacity>

      </View>
    </>
  );
}

export default PacientInfos;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 100,
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#252850',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#fff',
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  textbutton: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#fff'
  },
})
