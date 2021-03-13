import React, {useState} from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import logo from '../../../assets/logoupe.jpg'
import QuestionTwo from '../QuestionTwo';

export default function QuestionOne() {
    const navigation = useNavigation();
    const pergunta1 = "Existem peixes no mar?";
    const pergunta2 = "Uma folha pode flutuar na água";
    const pergunta3 = "Um quilo pesa mais do que dois quilos?";
    const pergunta4 = "Pode-se usar um martelo para pesar uma agulha?";
    const [index,setIndex] = useState(0);
    const questions = [{id:0, question: pergunta1,ans: true}, 
                       {id:1, question: pergunta2, ans: true},
                       {id:2, question: pergunta3, ans: false},
                       {id:3, question: pergunta4, ans: false},
                       {question: "Fim"}];
    const [answers,setAnswers] = useState([]);

    return  (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <View style={styles.imageContainer}>
                    <Image source={logo} style={styles.logoStyle}/>
                </View>
                <Text style={styles.question}>{questions[index].question}</Text>
            </View>

            {index<=3 ?
            <View style={styles.buttonsContainer}>

                <TouchableOpacity style={styles.thumbsUp} onPress = {() => {setIndex(index+1)}}>
                    <Feather size={24} name="check" color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.thumbsDown} onPress={() => {setIndex(index+1)}}>
                    <Feather size={24} name="x" color="#fff" />
                </TouchableOpacity>
                
            </View>: 

            <View>
                <TouchableOpacity style={styles.thumbsDown} title="Fim" onPress={() => navigation.navigate("QuestionTwo")}>
                    <Feather size={24} name="x" color="#fff" />
                </TouchableOpacity>
            </View>} 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#333',
        alignItems: 'center',
        padding: 32,
    },

    questionContainer: {
        alignSelf: 'baseline',
        height: 300,
        width: '100%',
        padding: 16,
        borderRadius: 20,
        backgroundColor: '#eead2d',
        flexDirection: 'column',
        alignItems: 'center',
    },

    imageContainer: {
        height: 200,
        width: 200,
        borderRadius: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    logoStyle: {
        resizeMode: 'contain',
        height: 150,
        width: 150,
    },

    question: {
        fontSize: 24,
        color: '#fff',
        marginTop: 32,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
     
    thumbsUp: {
        height: 80,
        width: 100,
        borderRadius: 4,
        backgroundColor: '#2e856e',       
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    
    thumbsDown: {
        height: 80,
        width: 100,
        borderRadius: 4,
        backgroundColor: '#c62121',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 46,
    },
});