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
        <Screen name="Página inicial" component={Home} />
        <Screen name="Questionário" component={Questionnaire} />
        <Screen name="Teste de atenção" component={Attention} />
        <Screen name="Escala Richmond" component={RassTable} />
        <Screen name="Pacientes" component={PacientList} />
        <Screen name="Formulário" component={PacientForm} />
        <Screen name="Pergunta inicial" component={QuestionOne} />
        <Screen name="Informações do paciente" component={PacientInfos} />
        <Screen name="Diagnóstico" component={Diagnostic} />
      </Navigator>
    </NavigationContainer>
  );
}
