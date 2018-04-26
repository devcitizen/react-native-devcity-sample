/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    PixelRatio,
    Dimensions,
    TextInput,
    Picker,
    TouchableNativeFeedback,
    ToastAndroid,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import Color from '../../common/Color';
import Images from '../../common/Images';
import Constant from '../../common/Images';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

var {width, height} = Dimensions.get("window");

export default class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password: '',
            secureTextEntry: true,
            icon: 'eye-slash',
            loading: false
        };
    }

    componentWillMount() {
        console.log('PIXEL', PixelRatio.get())
    }

    focusNextField(nextField) {
        this.refs[nextField].focus();
    }

    tooglePassword() {
        this.setState({secureTextEntry: !this.state.secureTextEntry});
    }

    emptyField() {
        ToastAndroid.showWithGravity('Please fill email and password field first!', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

    async handleLoginClick() {
        this.setState({loading: true})
        try {
            const response = await fetch('http://private-d985f6-practice23.apiary-mock.com/api/v1/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                })
            })
            let loginData =  await response.json();
            try {
                await AsyncStorage.setItem('loginData', JSON.stringify(loginData));
            } catch (error) {
                ToastAndroid.showWithGravity("expected dynamic type 'string', but had type 'object'", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            }
            this.setState({loading: false})
        } catch(error) {
            ToastAndroid.showWithGravity('Login Failed', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            this.setState({loading: false})
        }
    }

    render() {
        const {email, password} = this.state;
        return (
            <View style={Styles.container}>
                <StatusBar
                    backgroundColor={Color.primaryDark}
                    barStyle="light-content"
                />
                <View style={Styles.logoWrapper}>
                    <Image source={Images.logo} style={{marginBottom: 11}} />
                    <Text style={Styles.headerText}>
                        Your place to be safely heard at work.
                    </Text>
                </View>
                <Text style={{fontSize: 16, fontWeight: '500', color: '#000000', marginTop: 31, marginBottom: 31}}>
                    Please login
                </Text>
                <View style={Styles.inputWrapper}>
                    <Icon name='envelope' size={16} color='#a7a9ad' />
                    <TextInput
                        ref='email'
                        style={Styles.loginInput}
                        placeholder='Email'
                        keyboardType='email-address'
                        returnKeyType='next'
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        onSubmitEditing={() => this.focusNextField('password')}
                    />
                </View>
                <View style={Styles.inputWrapper}>
                    <Icon name='lock' size={21} color='#a7a9ad' />
                    <TextInput
                        ref='password'
                        style={[Styles.loginInput, {width: width*.65}]}
                        placeholder='Password'
                        secureTextEntry={this.state.secureTextEntry}
                        returnKeyType='go'
                        returnKeyLabel="Login"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        onSubmitEditing={() => this.handleLoginClick()}
                    />
                    <Icon name={this.state.secureTextEntry === true ? 'eye-slash' : 'eye'} size={21} color='#a7a9ad' onPress={() => this.tooglePassword()} />
                </View>
                {this.state.loading ?
                    <ActivityIndicator style={Styles.loadingIndicator} size="large" color={Color.primary}/>
                    :
                    <TouchableNativeFeedback onPress={email.length && password.length >> 0 ? () => {this.handleLoginClick()} : () => {this.emptyField()}}>
                        <View style={email.length && password.length >> 0 ? Styles.loginButton : Styles.loginButtonDisabled}>
                            <Text style={Styles.loginText}>
                                LOGIN
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                }
                <TouchableNativeFeedback>
                    <View style={Styles.loginProblem}>
                        <Text style={Styles.loginProblemText}>
                            Having a Problem Login?
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

