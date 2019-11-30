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
    Animated,
    Image
} from 'react-native';

import {
    Container,
    Item,
    Input,
    Icon
} from 'native-base'

import AsyncStorage from '@react-native-community/async-storage';

const logo = require('../images/rides.png');

class SignInScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      fadeIn: new Animated.Value(0),
      fadeOut: new Animated.Value(0),
      isHidden: false
    }

    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
  }
    componentDidMount() {
      this.fadeIn()
    }

    fadeIn() {
      Animated.timing(
        this.state.fadeIn, {
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
      var { fadeIn, fadeOut, isHidden } = this.state
        return (
          <SafeAreaView style={styles.container}>
            <StatusBar/>
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                  <View style={styles.container}>
                    {
                      isHidden?
                      <Animated.Image source={logo} style={{opacity: fadeIn}}/>
                      :
                      <Animated.Image source={logo} style={{opacity: fadeOut, width: 113.46, height: 117}} />
                    }
                  </View>
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
                          onFocus={() => this.fadeOut()}
                          onEndEditing={() => this.fadeIn()}
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
                          onFocus={() => this.fadeOut()}
                          onEndEditing={() => this.fadeIn()}
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

export default SignInScreen;