import React, {Component} from 'react';
import {
    StyleSheet, View, Text
} from 'react-native';

class ForgotPasswordScreen extends Component {

    render() {
        return (
            <View style = {styles.container}>
                <Text>Reset your password</Text>
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
    }
});

export default ForgotPasswordScreen;