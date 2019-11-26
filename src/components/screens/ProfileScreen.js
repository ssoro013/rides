import React, {Component} from 'react';
import {
    StyleSheet, View, Text
} from 'react-native';

class ProfileScreen extends Component {

    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.text}>Profile</Text>
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

export default ProfileScreen;