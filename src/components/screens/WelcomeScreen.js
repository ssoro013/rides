import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class WelcomeScreen extends Component {

    handleRoute = async (destination) => {
        await this.props.navigation.navigate(destination)
    }
    render() {
        return (
            <View style = {styles.container}>

                <TouchableOpacity
                    onPress = {this.handleRoute.bind(this, 'SignUp')} 
                    style = {styles.button}>
                    <Text style = {styles.text}>Sign Up</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress = {this.handleRoute.bind(this, 'SignIn')} 
                    style = {styles.button}>
                    <Text style = {styles.text}>Sign In</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress = {this.handleRoute.bind(this, 'ForgotPassword')} 
                    style = {styles.button}>
                    <Text style = {styles.text}>Forgot Password?</Text>
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

export default WelcomeScreen;