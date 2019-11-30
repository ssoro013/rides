import React, {Component} from 'react';
import {
    StyleSheet, View, Text
} from 'react-native';

class HomeScreen extends Component {

    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.textStyle}>Home</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    color: "#696969",
    padding: 10,
    fontWeight: "bold"
  }
})
export default HomeScreen;