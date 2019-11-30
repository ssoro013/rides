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
    Modal,
    FlatList,
    Animated,
    Image
} from 'react-native';

import {
    Container,
    Item,
    Input,
    Icon
} from 'native-base'

const logo = require('../images/rides.png')

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          phoneNumber: '',
          authCode: '',
          fadeIn: new Animated.Value(0),
          fadeOut: new Animated.Value(1),
          isHidden: false
        }
    }

    componentDidMount() {
      this.fadeIn()
    }
    fadeIn() {
      Animated.timing(
      this.state.fadeIn,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
      ).start()
      this.setState({isHidden: true})
    }
    fadeOut() {
      Animated.timing(
      this.state.fadeOut,
      {
        toValue: 0,
        duration: 700,
        useNativeDriver: true
      }
      ).start()
      this.setState({isHidden: false})
    }
    onChangeText (key, value) {
        this.setState({
            [key] : value
        })
    }
    render() {
      var { fadeIn, fadeOut, isHidden } = this.state
        return (
          <SafeAreaView style={styles.container}>
            <StatusBar/>
            <KeyboardAvoidingView 
              style={styles.container} 
              behavior='padding' 
              enabled>
              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                  <View style={styles.container}>
                    {
                      isHidden? 
                      <Animated.Image source={logo} style={{opacity: fadeIn, width: 110.46, height: 117}} />
                      :
                      <Animated.Image source={logo} style={{opacity: fadeOut, width: 110.46, height: 117}}/>
                    }
                  </View>
                  <Container style={styles.infoContainer}>
                    <View style={styles.container}>
                      {/* First Name */}
                      <Item style={styles.itemStyle}>
                        <Icon
                          active
                          name='person'
                          style={styles.iconStyle}
                        />
                        <Input
                          style={styles.input}
                          placeholder='First Name'
                          placeholderTextColor='#adb4bc'
                          keyboardType={'default'}
                          returnKeyType='next'
                          autoCapitalize='none'
                          autoCorrect={false}
                          onSubmitEditing={(event) => {this.refs.SecondInput._root.focus()}}
                          onChangeText={value => this.onChangeText('firstName', value)}
                        />
                      </Item>
                      {/* Last Name */}
                      <Item style={styles.itemStyle}>
                        <Icon
                          active
                          name='person'
                          style={styles.iconStyle}
                        />
                        <Input
                          style={styles.input}
                          placeholder='Last Name'
                          placeholderTextColor='#adb4bc'
                          keyboardType={'default'}
                          returnKeyType='next'
                          autoCapitalize='none'
                          autoCorrect={false}
                          onSubmitEditing={(event) => {this.refs.SecondInput._root.focus()}}
                          onChangeText={value => this.onChangeText('lastName', value)}
                        />
                      </Item>
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
                          returnKeyType='next'
                          autoCapitalize='none'
                          autoCorrect={false}
                          onSubmitEditing={(event) => {this.refs.SecondInput._root.focus()}}
                          onChangeText={value => this.onChangeText('username', value)}
                        />
                      </Item>
                      {/* Email */}
                      <Item style={styles.itemStyle}>
                        <Icon
                          active
                          name='mail'
                          style={styles.iconStyle}
                        />
                        <Input
                          style={styles.input}
                          placeholder='Email'
                          placeholderTextColor='#adb4bc'
                          keyboardType={'email-address'}
                          returnKeyType='next'
                          autoCapitalize='none'
                          autoCorrect={false}
                          secureTextEntry={false}
                          ref='ThirdInput'
                          onSubmitEditing={(event) => {this.refs.FourthInput._root.focus()}}
                          onChangeText={value => this.onChangeText('email', value)}
                        />
                      </Item>
                      {/* Password */}
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
                          returnKeyType='next'
                          autoCapitalize='none'
                          autoCorrect={false}
                          secureTextEntry={true}
                          // ref={c => this.SecondInput = c}
                          ref='SecondInput'
                          onSubmitEditing={(event) => {this.refs.ThirdInput._root.focus()}}
                          onChangeText={value => this.onChangeText('password', value)}
                        />
                      </Item>
                      {/* Phone Number */}
                      <Item style={styles.itemStyle}>
                        <Icon
                          active
                          name='call'
                          style={styles.iconStyle}
                        />
                        <Input
                          style={styles.input}
                          placeholder='+1(XXX)-XXX-XXXX'
                          placeholderTextColor='#adb4bc'
                          keyboardType={'phone-pad'}
                          returnKeyType='done'
                          autoCapitalize='none'
                          autoCorrect={false}
                          secureTextEntry={false}
                          ref='FourthInput'
                          value={this.state.phoneNumber}
                          onChangeText={(val) => this.onChangeText('phoneNumber', val)}
                        />
                      </Item>
                      {/* Sign Up */}
                      <TouchableOpacity
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>
                          Sign Up
                        </Text>
                      </TouchableOpacity>
                      {/* Confirmation Code  */}
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
                          onChangeText={value => this.onChangeText('authCode', value)}
                        />
                      </Item>
                      <TouchableOpacity
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>
                          Confirm Sign Up
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>
                          Resend code
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

export default SignUpScreen;