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
    Alert
} from 'react-native';

import {
    Container,
    Item,
    Input,
    Icon
} from 'native-base'

// import Icon from 'react-native-vector-icons/FontAwesome'

// import { TouchableOpacity } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';

class SettingsScreen extends Component {
    state = {
        password1: '',
        password2: '',
    }

    onChangeText (key, value) {
        this.setState({
            [key]: value
        })
    }

    async signOut() {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Loading')
    }
    render() {
        return (
          <SafeAreaView style={styles.container}>
            <StatusBar/>
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                  {/*Infos*/}
                  <Container style={styles.infoContainer}>
                    <View style={styles.container}>
                      <View 
                        style={
                          [styles.buttonStyle, {borderRadius: 4, marginBottom: 20}]
                        }>
                        <Text style={styles.buttonText}>Change password</Text>              
                      </View>
                      {/* Old password */}
                      <Item style={styles.itemStyle}>
                        <Icon
                          active
                          name='lock'
                          style={styles.iconStyle}
                        />
                        <Input
                          style={styles.input}
                          placeholder='Old password'
                          placeholderTextColor='#adb4bc'
                          returnKeyType='next'
                          autoCapitalize='none'
                          autoCorrect={false}
                          secureTextEntry={true}
                          onSubmitEditing={(event) => { this.refs.SecondInput._root.focus()}}
                          onChangeText={value => this.onChangeText('password1', value)}
                        />
                      </Item>    
                      {/* New password */}              
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
                          returnKeyType='go'
                          autoCapitalize='none'
                          autoCorrect={false}
                          secureTextEntry={true}
                          ref='SecondInput'
                          onChangeText={value => this.onChangeText('password2', value)}
                        />
                      </Item>
                      <TouchableOpacity
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>
                          Submit
                        </Text>
                      </TouchableOpacity>
                      <View 
                        style={
                          {
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            paddingBottom: 100
                          }
                        }
                       />
                      <TouchableOpacity
                        style={
                          [styles.buttonStyle, 
                            {
                              flexDirection: 'row', 
                              justifyContent: 'center'
                            }
                          ]
                        }
                        onPress={() => this.signOut()}>
                        <Icon name='md-power' style={{color: '#fff', paddingRight: 10}}/>
                        <Text style={styles.buttonText}>
                          Sign out
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
    height: 45
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

export default SettingsScreen;