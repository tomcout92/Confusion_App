import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Questionnaire from './Pages/Questionnaire';
import Home from './Pages/Home';
import PacientForm from './Pages/Formulary'



const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Formulary" component={PacientForm} />
        <Screen name="Home" component={Home} />
        <Screen name="Questionnaire" component={Questionnaire} />
      </Navigator>
    </NavigationContainer>
  );
}
