import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Questionnaire from './Pages/CamICU/Questionnaire';
import Home from './Pages/Home';
import PacientForm from './Pages/Formulary'
import PacientInfos from './Pages/PacientPage'
import PacientList from './Pages/PacientList'
import Diagnostic from './Pages/Diagnostic'
import QuestionOne from './Pages/CamICU/initialquestion'
import Attention from './Pages/CamICU/attetiontest'
import RassTable from './Pages/CamICU/rasstable'


const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Questionnaire" component={Questionnaire} />
        <Screen name="Inattetion Test" component={Attention} />
        <Screen name="Escala Richmond" component={RassTable} />
        <Screen name="Pacient List" component={PacientList} />
        <Screen name="Formulary" component={PacientForm} />
        <Screen name="Initial Question" component={QuestionOne} />
        <Screen name="Pacient Infos" component={PacientInfos} />
        <Screen name="CAM-ICU Diagnostic" component={Diagnostic} />
      </Navigator>
    </NavigationContainer>
  );
}
