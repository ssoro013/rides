import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

class LoadingScreen extends Component {
    componentDidMount = async () => {
        await this.loadApp();
      }

    loadApp = async () => {
        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate(userToken ? 'App' : 'Authentication')
    }

    render () {
        return (
            <View style = {styles.container}>
                <ActivityIndicator size="large" color="#000000"></ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default LoadingScreen;