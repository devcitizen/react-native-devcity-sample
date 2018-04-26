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
    ScrollView,
    NativeModules,
    LayoutAnimation,
    VirtualizedList,
    ToolbarAndroid,
    TouchableOpacity,
    Switch,
} from 'react-native';
import Color from '../../common/Color';
import Images from '../../common/Images';
import Constant from '../../common/Images';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'

var {width, height} = Dimensions.get("window");

export default class Feedback extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            height: 40,
            anon: true
        };
    }

    componentWillMount() {
        console.log('PIXEL', PixelRatio.get())
    }

    changeInputHeight(height) {
        if(this.state.height < 100) {
            this.setState({height: height})
        }
    }

    render() {
        const {email, password} = this.state;

        return (
            <View style={Styles.container}>
                <StatusBar
                    backgroundColor='#282828'
                    barStyle="light-content"
                />
                <View style={{flex: 1, width: width*.8, flexDirection: 'row', alignItems: 'flex-end'}}>
                    <View style={{flex: 1}}>
                        <MaterialIcon name='clear' size={24} color='#ffffff' />
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{fontSize: 16, color: '#fff'}}>2 of 8</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Icon name='quote-right' size={22} color='rgba(242, 242, 242, 0.2)' />
                    </View>
                </View>
                <View style={{flex: 3, width: width*.8, justifyContent: 'center'}}>
                    <Text style={{fontSize: 24, color: '#fff'}}>
                        I have a healthy diet (with fruits, vegetables, limited sugar and oil, etc.)
                    </Text>
                    <View style={{height: 4, width: width/6, backgroundColor: '#F1C40F', marginTop: 10}} />
                </View>
                <View style={{flex: 8, width: width*.8, paddingTop: 10}}>
                    <Text style={{fontSize: 16, color: '#ffffff'}}>
                        You rated 4 out of 5
                    </Text>
                    <View style={{height: 176, width: width*.8, padding: 17, marginTop: 16, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 5, backgroundColor: '#ffffff'}}>
                        <TextInput
                            style={{height: this.state.height}}
                            placeholder={'Write your feedback here...'}
                            multiline={true}
                            maxHeight={100}
                            underlineColorAndroid={'transparent'}
                            onContentSizeChange={(event) => {this.setState({height: event.nativeEvent.contentSize.height})}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                        <View style={{height: 49, width: width*.8,flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 0, backgroundColor: '#F2F2F2', borderWidth: 1, borderColor: '#E0E0E0', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                            <View style={{flex: 1, paddingLeft: 20}}>
                                <Text style={{fontSize: 14, color: 'rgba(0, 0, 0, 0.38)'}}>
                                    <Icon name='lock' size={18} color={Color.primary} /> Anonymous
                                </Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 20}}>
                                <Switch
                                    value={this.state.anon}
                                    onTintColor={Color.primary}
                                    onValueChange={() => {this.setState({anon: !this.state.anon})}}
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableNativeFeedback>
                        <View style={{height: 49, width: width*.8, alignItems: 'center', justifyContent: 'center', marginTop: 13, borderWidth: 2, borderColor: '#fff', borderRadius: 5}}>
                            <Text style={{fontSize: 16, color: '#fff'}}>
                                SEND
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

