import React from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logo from '../../assets/logoupe.jpg'


export default function Questionnaire() {
    return  (
        <View style={styles.container}>
            <Image source={logo} style={styles.logoStyle}/>
            <Text>Existem peixes no mar?</Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.thumbsUp}>
                    <Feather name="thumbs-up" color="#fff" />
                    <Text>Sim</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.thumbsDown}>
                    <Feather name="thumbs-down" color="#fff" />
                    <Text>Não</Text> 
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
    },
    
    logoStyle: {
        height: 30,
        width: 60,
     },
     
    thumbsUp: {
        height: 50,
        width: 80,
        borderRadius: 4,
        backgroundColor: '#2e856e',       
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    
    thumbsDown: {
        height: 50,
        width: 80,
        borderRadius: 4,
        backgroundColor: '#c62121',
        alignItems: 'center',
    },

    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});