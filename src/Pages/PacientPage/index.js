import React from 'react';
import { StyleSheet, Text, StatusBar, TouchableOpacity, View, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DeleteData from '../../DataBase/deletedata'

const PacientInfos = ({ route }) => {



  const navigation = useNavigation();
  const pacient = route.params

  function pressButton() {

    DeleteData(route.params, deleteComplete());

  }

  function deleteComplete() {
    navigation.navigate("Página inicial");
  }
  return (
    <>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>{pacient.name}</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>Gênero</DataTable.Cell>
            <DataTable.Cell numeric>{pacient.gender}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row >
            <View style={{alignContent: 'center'}}>
              <Text>Fatores de risco</Text>
            </View>
            <ScrollView contentContainerStyle={{ alignItems: 'flex-end' }}>
              {pacient.riskfactors.map(risk =>
                <Text>{risk}</Text>
              )}
            </ScrollView>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Diagnóstico</DataTable.Cell>
            <DataTable.Cell numeric>{pacient.result}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      <View style={styles.container}>

        <TouchableOpacity onPress={() => { navigation.navigate("Pergunta inicial", pacient) }}>
          <Text style={styles.textbutton}>CAM-ICU</Text>
        </TouchableOpacity>

      </View>

      <View style={{ ...styles.container, backgroundColor: 'red' }}>
        <TouchableOpacity onPress={() => pressButton()}>
          <Text style={styles.textbutton}>
            Remover
              </Text>
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
