import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Questionnaire from './Pages/Questionnaire';
import Home from './Pages/Home';
import PacientForm from './Pages/Formulary'
import PacientList from './PacientListDB'
import PacientInfo from './Pages/PacientPage'



const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Escala Richmond" component={PacientList} />
        <Screen name="Questionnaire" component={Questionnaire} />
        <Screen name="Pacient Infos " component={PacientInfo} />
        <Screen name="Home" component={Home} />
        <Screen name="Formulary" component={PacientForm} />
      </Navigator>
    </NavigationContainer>
  );
}
