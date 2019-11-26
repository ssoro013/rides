import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

class SignInScreen extends Component {

    signIn = async () => {
        await AsyncStorage.setItem('userToken', '123456789')
        this.props.navigation.navigate('Loading')
    }
    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity
                    onPress = {this.signIn}
                    style = {styles.button}
                >
                <Text style = {styles.text}>Sign In</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
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

export default SignInScreen;