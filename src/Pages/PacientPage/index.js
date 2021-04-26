import React from 'react';
import { StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const PacientInfos = ({route}) => {

  const navigation = useNavigation();
  const pacient = route.params
  return (
    <>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>{pacient.name}</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>Gender</DataTable.Cell>
            <DataTable.Cell numeric>{pacient.gender}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Risk Factors</DataTable.Cell>
            <DataTable.Cell numeric>{pacient.riskfactors}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Delirium Diagnostic</DataTable.Cell>
            <DataTable.Cell numeric>{pacient.result}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      <View style={styles.container}>

        <TouchableOpacity onPress={()=>{navigation.navigate("Initial Question", pacient)}}>
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
