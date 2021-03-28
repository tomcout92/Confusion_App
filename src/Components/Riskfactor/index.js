import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import pacientModel from '../../Pages/Pacientinfo'
import { usePacient } from '../../Context/pacient';

const FactorsView = ({ value }) => {
  const [isSelected, setSelection] = useState(false);
  const {pacient, setPacient} = usePacient();
  const onValueChange = () => {isSelected ? setPacient(prev => ({ ...prev, riskfactors: [...prev.riskfactors, {value}]})): setPacient(prev => ({ ...prev, riskfactors: [...prev.riskfactors]}))};
  console.log(pacient);
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        style={styles.checkbox}
        disabled={false}
        value={isSelected}
        onValueChange={setSelection, onValueChange}
      />
      <Text style={styles.label}>{value}</Text>
    </View>)
};

export default FactorsView;

const styles = StyleSheet.create({

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },

  checkbox: {
    alignSelf: "center",
    tintColor: '#fff',
    backgroundColor: '#fff',
  },

  label: {
    margin: 8,
    color: '#fff',
    fontSize: 18,
  },

}
);

