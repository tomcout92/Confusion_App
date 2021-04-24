import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import pacientModel from '../../Datas/Pacientinfo'
import PacientContext from '../../Context/pacient';

const FactorsView = ({ value }) => {
  const [isSelected, setSelection] = useState(false);
  const { pacient, setPacient } = useContext(PacientContext);

  const onValueChange = () => {
    isSelected ? setPacient(prev => ({ ...prev, riskfactors: [...prev.riskfactors, value] }))
      : setPacient(prev => ({ ...prev, riskfactors: prev.riskfactors.filter(val => value != val) }))
  };

  useEffect(() => { onValueChange() }, [isSelected]);

  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        style={styles.checkbox}
        disabled={false}
        value={isSelected}
        onValueChange={(value) => { setSelection(value) }}
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

