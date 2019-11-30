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
      flex: 1,
      backgroundColor: "#f5f5f5",
      justifyContent: 'center',
      flexDirection: 'column'
    },
    input: {
      flex: 1,
      fontSize: 15,
      fontWeight: 'bold',
      color: "#696969",
    },
    infoContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 400,
      bottom: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 30,
      backgroundColor: "#f5f5f5",
    },
    itemStyle: {
      marginBottom: 5,
      height: 40
    },
    iconStyle: {
      color: "#696969",
      fontSize: 28,
      marginLeft: 15
    },
    buttonStyle: {
      alignItems: 'center',
      backgroundColor: '#a9a9a9',
      padding: 10,
      marginBottom: 5,
      borderRadius: 10,
      height: 40
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#696969",
    },
    logoContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 400,
      bottom: 180,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
})

export default ProfileScreen;