import React from 'react';
import {AntDesign} from '@expo/vector-icons'; 
import {View, StyleSheet, Text} from 'react-native';

const NotFound = () => {
    return (
        <View style={[ StyleSheet.absoluteFillObject, styles.container]}>
            <AntDesign name='frowno' size={80} color='black' />
            <Text style={{marginTop:20, fontSize:20}}> Result Not Found </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.7,
        zIndex: -1,
    },

});

export default NotFound;
