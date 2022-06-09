import React from "react";

import {
    Text, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native'


const Welcome = ({stylee, text, target, navigation}) => {


    return (
        <TouchableOpacity style={[styles.btn, stylee]} onPress={() => navigation.navigate(target)}>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    btnText: {
        textAlign: 'center',
        fontWeight: '600',
        color: '#fff'
    },
    btn: {
        borderRadius: 15,
        padding: 15,
        backgroundColor: '#00baa2'
    }
})

export default Welcome;