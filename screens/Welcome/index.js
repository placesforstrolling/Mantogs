import React, {useState, useEffect} from "react";

import {
    Text, 
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    View,
} from 'react-native'

import Button from '../../components/Button/Button';

const link = 'https://clck.ru/qF8U5';

const Welcome = ({navigation}) => {

    return (
        <SafeAreaView style={styles.body}>
            <ImageBackground source={{ uri: "https://clck.ru/qF8fj" }} resizeMode='cover' style={styles.background}>
                <View style={styles.textWrapper}>
                    <Text style={styles.welcomeTitle}>Welcome to Mantogs</Text>
                    <Text style={styles.welcomeDesc}>Find places and explore your favourite destination with us</Text>
                </View>
                
                <Button
                    text='Get started'
                    target='Home'
                    stylee={{bottom: 30, position: 'absolute', width: '80%'}}
                    navigation={navigation}/>
            </ImageBackground>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    welcomeDesc: {
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        color: '#404a4f',
        marginTop: 10,
        fontFamily: 'Dosis'
    },
    welcomeTitle: {
        fontSize: 32,
        fontWeight: '800',
        textAlign: 'center',
        color: '#404a4f',
        fontFamily: 'Dosis',
        textTransform: 'uppercase'
    },
    textWrapper: {
        width: '70%',
        marginTop: 70
    },
    background: {
        flex: 1,
        alignItems: 'center'
    },
    body: {
        backgroundColor: '#fff',
        flex: 1,
    },
})

export default Welcome;