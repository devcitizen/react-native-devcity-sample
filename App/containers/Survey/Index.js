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
    TouchableOpacity
} from 'react-native';
import Color from '../../common/Color';
import Images from '../../common/Images';
import Constant from '../../common/Images';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

var {width, height} = Dimensions.get("window");

export default class Survey extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            
        };
    }

    componentWillMount() {
        console.log('PIXEL', PixelRatio.get())
    }

    render() {
        const {email, password} = this.state;

        return (
            <View style={Styles.container}>
                <StatusBar
                    backgroundColor={Color.primaryDark}
                    barStyle="light-content"
                />
                <View style={{flex: 1, width: width*.8, flexDirection: 'row', alignItems: 'flex-end'}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 14, color: '#fff'}} onPress={() => console.log('PREVIOUS')}>
                            PREVIOUS
                        </Text>
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
                <View style={{flex: 4}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <View style={{height: 64, width: 91, backgroundColor: 'yellow'}} />
                        </View>
                        <View style={{flex: 1,  justifyContent: 'center'}}>
                            <View style={{height: 64, width: 91, backgroundColor: 'yellow', alignSelf: 'flex-end'}} />
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{height: 64, width: width*.8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: 10}}>
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(Color.primary, true)}>
                                <View style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#fff', borderRadius: 40}} >
                                    <Text style={{fontSize: 16, color: '#fff'}}>
                                        1
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(Color.primary, true)}>
                                <View style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#fff', borderRadius: 40}}>
                                    <Text style={{fontSize: 16, color: '#fff'}}>
                                        2
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(Color.primary, true)}>
                                <View style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#fff', borderRadius: 40}}>
                                    <Text style={{fontSize: 16, color: '#fff'}}>
                                        3
                                    </Text>
                                </View> 
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(Color.primary, true)}>
                                <View style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#fff', borderRadius: 40}}>
                                    <Text style={{fontSize: 16, color: '#fff'}}>
                                        4
                                    </Text>
                                </View>
                            </TouchableNativeFeedback> 
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(Color.primary, true)}>
                                <View style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#fff', borderRadius: 40}}>
                                    <Text style={{fontSize: 16, color: '#fff'}}>
                                        5
                                    </Text>
                                </View> 
                            </TouchableNativeFeedback>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', width: width*.8, marginTop: 10}}>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.3)'}}>
                                    Strongly disagree
                                </Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.3)'}}>
                                    Strongly agree
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex: 4, paddingTop: 15}}>
                    <TouchableNativeFeedback>
                        <View style={{height: 49, width: width*.8, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F1C40F', borderRadius: 5}}>
                            <Text style={{fontSize: 16, color: 'rgba(0, 0, 0, 0.5)'}}>
                                I HAVE SOMETHING TO SAY
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={{height: 49, width: width*.8, alignItems: 'center', justifyContent: 'center', marginTop: 10, borderWidth: 2, borderColor: '#fff', borderRadius: 5}}>
                            <Text style={{fontSize: 16, color: '#fff'}}>
                                NEXT
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

