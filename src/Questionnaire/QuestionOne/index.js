import React from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import logo from '../../../assets/logoupe.jpg'
import QuestionTwo from '../QuestionTwo';

export default function QuestionOne() {
    const navigation = useNavigation();

    return  (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <View style={styles.imageContainer}>
                    <Image source={logo} style={styles.logoStyle}/>
                </View>
                <Text style={styles.question}>Existem peixes no mar?</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.thumbsUp} onPress={()=>navigation.navigate("QuestionTwo")}>
                    <Feather size={24} name="check" color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.thumbsDown} onPress={()=>navigation.navigate("QuestionTwo")}>
                    <Feather size={24} name="x" color="#fff" />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 32,
    },

    questionContainer: {
        height: 300,
        width: '100%',
        padding: 16,
        borderRadius: 20,
        backgroundColor: '#187bcd',
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
        height: 100,
        width: 100,
    },

    question: {
        fontSize: 24,
        color: '#fff',
        marginTop: 32,
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