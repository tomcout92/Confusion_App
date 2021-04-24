import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Questionnaire from './Pages/Questionnaire';
import Home from './Pages/Home';
import PacientForm from './Pages/Formulary'
import PacientInfo from './Pages/PacientPage'



const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Formulary" component={PacientForm} />
        <Screen name="Questionnaire" component={Questionnaire} />
        <Screen name="Pacient Infos " component={PacientInfo} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
