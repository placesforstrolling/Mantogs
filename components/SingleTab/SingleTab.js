import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    } from 'react-native';

const SingleTab = ({image, title, country}) => {


    return (
        <TouchableOpacity style={styles.card}>
            <ImageBackground 
                source={{ uri: image }}
                resizeMode='cover'
                style={styles.background}
                imageStyle={{ borderRadius: 25}}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.country}>{country}</Text>
                </View>
                <TouchableOpacity style={styles.add}>
                    <Icon name="bookmarks" style={styles.addIcon}/>
                </TouchableOpacity>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    addIcon: {
        color: '#595c63',
        fontSize: 22
    },
    add: {
        position: 'absolute',
        top: 20,
        right: 20,
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    country: {
        color: '#404a4f',
        fontWeight: '500',
    },
    title: {
        color: '#404a4f',
        fontSize: 16,
        fontWeight: '700'
    },
    textWrapper: {
        position: 'absolute',
        bottom: 20,
        left: 20
    },
    background: {
        width: 200,
        height: 250,
        borderRadius: 30
    },
    card: {
        marginRight: 15,
        borderRadius: 30,
        marginTop: 20,
    }
});

export default SingleTab;