import React, {Component} from 'react';
import {
    StyleSheet, View, Text
} from 'react-native';

class SignUpScreen extends Component {

    render() {
        return (
            <View style = {styles.container}>
                <Text>Sign Up</Text>
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

export default SignUpScreen;