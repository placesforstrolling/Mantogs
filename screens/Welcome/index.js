import React, {useState, useEffect} from "react";

import {
    Text, 
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    View,
} from 'react-native'

import Button from '../../components/Button/Button';

const link = 'https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-may-day-labor-day-driving-out-travel-cartoon-minimalist-background-image_221989.jpg';

const Welcome = ({navigation}) => {

    return (
        <SafeAreaView style={styles.body}>
            <ImageBackground source={{ uri: "https://i.pinimg.com/originals/5d/a1/50/5da150ccc6d86d7822751f9fd81d6cce.jpg" }} resizeMode='cover' style={styles.background}>
                <View style={styles.textWrapper}>
                    <Text style={styles.welcomeTitle} uppercase={true}>Welcome to Mantogs</Text>
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