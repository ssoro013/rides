import React, {Component} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    Keyboard,
    Alert,
    Animated
} from 'react-native';

import {
    Container,
    Item,
    Input,
    Icon
} from 'native-base'

import AsyncStorage from '@react-native-community/async-storage';

class SignInScreen extends Component {
    state = {
        username: '',
        password: ''
    }

    onChangeText(key, value) {
        this.setState({
            [key]: value
        })
    }
    signIn = async () => {
        await AsyncStorage.setItem('userToken', '123456789')
        this.props.navigation.navigate('Loading')
    }
    render() {
        return (
          <SafeAreaView style={styles.container}>
            <StatusBar/>
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                  <Container style={styles.infoContainer}>
                    <View style={styles.container}>
                      <Item style={styles.itemStyle}>
                        <Icon
                          active
                          name='person'
                          style={styles.iconStyle}
                        />
                        <Input
                          style={styles.input}
                          placeholder='Username'
                          placeholderTextColor='#adb4bc'
                          keyboardType={'email-address'}
                          returnKeyType='next'
                          autoCapitalize='none'
                          autoCorrect={false}
                          onSubmitEditing={(event) => {this.refs.SecondInput._root.focus()}}
                          onChangeText={value => this.onChangeText('username', value)}
                        />
                      </Item>
                      <Item style={styles.itemStyle}>
                        <Icon
                          active
                          name='lock'
                          style={styles.iconStyle}
                        />
                        <Input
                          style={styles.input}
                          placeholder='Password'
                          placeholderTextColor='#adb4bc'
                          returnKeyType='go'
                          autoCapitalize='none'
                          autoCorrect={false}
                          secureTextEntry={true}
                          ref='SecondInput'
                          onChangeText={value => this.onChangeText('password', value)}
                        />
                      </Item>
                      <TouchableOpacity
                        onPress={() => this.signIn()}
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>
                          Sign In
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </Container>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      justifyContent: 'center',
      flexDirection: 'column'
    },
    input: {
      flex: 1,
      fontSize: 17,
      fontWeight: 'bold',
      color: "#696969",
    },
    infoContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 200,
      bottom: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 30,
      backgroundColor: "#f5f5f5",
    },
    itemStyle: {
      marginBottom: 20,
    },
    iconStyle: {
      color: "#696969",
      fontSize: 28,
      marginLeft: 15
    },
    buttonStyle: {
      alignItems: 'center',
      backgroundColor: '#a9a9a9',
      padding: 14,
      marginBottom: 20,
      borderRadius: 24,
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

export default SignInScreen;