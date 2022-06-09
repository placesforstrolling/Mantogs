import React from "react";

import {
    Text, 
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from 'react-native'

import Header from "../../components/Header/Header";

const Home = ({navigation}) => {


    return (
        <SafeAreaView style={styles.body}>
            <Header/>
            <ScrollView>
                
            </ScrollView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        paddingBottom: 50
    },
    text: {
        fontFamily: 'Dosis',
        fontWeight: '800',
        fontSize: 30
    }
})

export default Home;