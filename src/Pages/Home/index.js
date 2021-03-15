import React from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import Questionnaire from '../Questionnaire';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.backgroud}>
      <TouchableOpacity style={styles.button} title="Tests" onPress={() => navigation.navigate("Questionnaire")}>
        <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
          <Feather name="clipboard" size={24} color="#fff" />
          <Text style={styles.navgiationContainer}>Questionnaire</Text>
        </View>

      </TouchableOpacity>
    </View>
  );

}

export default Home;

const styles = StyleSheet.create({

  backgroud:{
    backgroundColor:'#252850',
    height:'100%',
  },

  button: {
    alignSelf: 'center',
    //height: '50%',
    //width: 200,
    marginTop:StatusBar.currentHeight,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#252850',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor:'#fff',
    borderEndWidth:1,
    borderTopWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderBottomWidth:1,
  },

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#333',
    alignItems: 'center',
    padding: 32,
  },

  navgiationContainer: {
    fontSize: 18,
    color: '#fff',
    marginTop: 32,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
