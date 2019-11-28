import React, {Component} from 'react';
import {
    StyleSheet, View, Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

import { TouchableOpacity } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';

class SettingsScreen extends Component {
    async signOut() {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Loading')
    }
    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity
                    onPress={() => this.signOut()} 
                    style={styles.button}>
                    {/* <Text style={styles.text}>Sign Out</Text> */}
                    <Icon name="sign-out" size={50}/>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        padding: 20
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    }
});

export default SettingsScreen;