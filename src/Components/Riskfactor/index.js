import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const FactorsView = ({ value }) => {
  const [isSelected, setSelection] = useState(false);
  console.log(isSelected)
  return (

    <View style={styles.checkboxContainer}>
      <CheckBox
        style={styles.checkbox}
        disabled={false}
        value={isSelected}
        onValueChange={setSelection}
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

