import React from "react";

import {
    Text, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native'


const Welcome = ({action, stylee, text}) => {


    return (
        <TouchableOpacity style={[styles.btn, stylee]} onPress={() => action}>
            <Text>{text}</Text>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    btn: {

    }
})

export default Welcome;