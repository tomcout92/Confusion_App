import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, View, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Diagnostic(val, navi) {
  console.log(val)
  return (
    <View style={styles.resultContainer}>
      <View style={[{ flexDirection: 'column', alignItems: 'center' }]}>
        <Feather size={40} name="alert-triangle" color="#fff" />
        <Text style={styles.textContainer}>Delirium presente!</Text>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({

  resultContainer: {
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#ff0000',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#fff',
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  textContainer: {
    fontSize: 18,
    color: '#fff',
    marginTop: 32,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
}
);
