import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Questionnaire from './Pages/Questionnaire';
import Home from './Pages/Home';



const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Questionnaire" component={Questionnaire} />
        <Screen name="Home" component={Home}/>
      </Navigator>
    </NavigationContainer>
  );
}
