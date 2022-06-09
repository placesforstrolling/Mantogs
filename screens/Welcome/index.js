import React, {useState, useEffect} from "react";

import {
    Text, 
    SafeAreaView,
    StyleSheet,
} from 'react-native'

import Button from '../../components/Button/Button'

const Welcome = ({navigation}) => {

    return (
        <SafeAreaView style={styles.body}>
            <Text style={styles.welcomeTitle}>Welcome to Mantogs</Text>
            <Text style={styles.welcomeDesc}>Find places and explore your favourite destination with us</Text>

            <Button 
                text/>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({

    body: {
        backgroundColor: '#fff',
        paddingBottom: 50
    },
})

export default Welcome;