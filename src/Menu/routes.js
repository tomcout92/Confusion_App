import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import QuestionOne from '../Questionnaire/QuestionOne';
import QuestionTwo from '../Questionnaire/QuestionTwo';



const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Navigator>
                <Screen name="QuestionOne" component={QuestionOne}/>
                <Screen name="QuestionTwo" component={QuestionTwo}/>
            </Navigator>
        </NavigationContainer>
    );
}