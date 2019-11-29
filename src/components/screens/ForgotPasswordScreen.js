import React, {Component} from 'react';
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
} from 'native-base';

class ForgotPasswordScreen extends Component {
    state = {
        username: '',
        authCode: '',
        newPassword: ''
    }

    onChangeText(key, value) {
        this.setState({
            [key]: value
        })
    }
    render() {
        return (
          <SafeAreaView style={styles.container}>
            <StatusBar/>
            <KeyboardAvoidingView 
              style={styles.container} 
              behavior='padding' 
              enabled 
              keyboardVerticalOffset={23}>
              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                  {/* Infos */}
                  <Container style={styles.infoContainer}>
                    <View style={styles.container}>
                      {/* Username */}
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
                          returnKeyType='go'
                          autoCapitalize='none'
                          autoCorrect={false}
                          onChangeText={value => this.onChangeText('username', value)}
                        />
                      </Item>
                      <TouchableOpacity
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>
                          Send Code
                        </Text>
                      </TouchableOpacity>
                      {/* the New password section  */}
                      <Item style={styles.itemStyle}>
                        <Icon
                          active
                          name='lock'
                          style={styles.iconStyle}
                        />
                        <Input
                          style={styles.input}
                          placeholder='New password'
                          placeholderTextColor='#adb4bc'
                          returnKeyType='next'
                          autoCapitalize='none'
                          autoCorrect={false}
                          secureTextEntry={true}
                          onSubmitEditing={(event) => { this.refs.SecondInput._root.focus()}}
                          onChangeText={value => this.onChangeText('newPassword', value)}
                        />
                      </Item>
                      {/* Code confirmation section  */}
                      <Item style={styles.itemStyle}>
                        <Icon
                          active
                          name='md-apps'
                          style={styles.iconStyle}
                        />
                        <Input
                          style={styles.input}
                          placeholder='Confirmation code'
                          placeholderTextColor='#adb4bc'
                          keyboardType={'numeric'}
                          returnKeyType='done'
                          autoCapitalize='none'
                          autoCorrect={false}
                          secureTextEntry={false}
                          ref='SecondInput'
                          onChangeText={value => this.onChangeText('authCode', value)}
                        />
                      </Item>
                      <TouchableOpacity
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>
                          Confirm the new password
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </Container>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </SafeAreaView>
        );
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

export default ForgotPasswordScreen;