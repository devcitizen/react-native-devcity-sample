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
    ToolbarAndroid
} from 'react-native';
import Color from '../../common/Color';
import Images from '../../common/Images';
import Constant from '../../common/Images';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

var {width, height} = Dimensions.get("window");

export default class Home extends Component {
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
                <Icon.ToolbarAndroid
                    style={{height: 56, width: width, backgroundColor: Color.primary, elevation: 5}}
                    logo={Images.toolbarLogo}
                    title=""
                    actions={[{title: 'Settings', icon: Images.userIcon, show: 'always'}]}
                    onActionSelected={this.onActionSelected}
                />
                <ScrollView style={{flex: 1, marginBottom: 56}}>
                    <Image source={Images.homeBanner} style={{marginBottom: 32}} />
                    <Text style={{fontSize: 24, fontWeight: '700', textAlign: 'center', color: Color.primaryDark}}>
                        YOUR VOICE
                    </Text>
                    <View style={{height: 224, width: width*.9, alignSelf: 'center', backgroundColor: Color.primary, marginTop: 28, borderRadius: 10}}>
                        <View style={{flex: 0.6, flexDirection: 'row', alignItems: 'flex-end', paddingLeft: 30, paddingTop: 32, paddingRight: 23}}>
                            <Text style={{fontSize: 24, fontWeight: '500', color: 'rgba(255, 255, 255, 0.8)'}}>
                                Question left
                            </Text>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Icon name='quote-right' size={24} color='rgba(242, 242, 242, 0.2)' />
                            </View>
                        </View>
                        <View style={{flex: 2.8, flexDirection: 'row', alignItems: 'center', paddingLeft:30, paddingRight: 23,}}>
                            <Icon name='paper-plane' size={80} color='rgba(242, 242, 242, 0.2)' />
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Text style={{fontSize: 96, fontWeight: '400', color: '#ffffff', textShadowColor: 'rgba(0, 0, 0, 0.2)', textShadowOffset: {width: .1, height: .1}, textShadowRadius: 25}}>
                                    8
                                </Text>
                            </View>
                        </View>
                        <TouchableNativeFeedback>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Color.primaryDark, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                                <Text style={{fontSize: 14, fontWeight: '400', color: '#ffffff'}}>
                                    Let's start!
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{height: 129, width: width*.9, alignSelf: 'center', backgroundColor: '#3498DB', marginTop: 17, borderRadius: 10}}>
                        <View style={{flex: 2, flexDirection: 'row', alignItems: 'center', paddingLeft: 30, paddingRight: 23}}>
                            <Text style={{fontSize: 24, fontWeight: '500', color: 'rgba(255, 255, 255, 0.8)'}}>
                                Feedback
                            </Text>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Icon name='comment' size={24} color='rgba(242, 242, 242, 0.2)' />
                            </View>
                        </View>
                        <TouchableNativeFeedback>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2e88c5', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                                <Text style={{fontSize: 14, fontWeight: '400', color: '#ffffff'}}>
                                    I have something to say
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <TouchableNativeFeedback>
                        <View style={{height: 38, width: width/3, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#E0E0E0', margin: 17, borderRadius: 100}}>
                            <Text style={{fontSize: 14, color: '#000000'}}>
                                FAQ
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </ScrollView>
                <BottomNavigation
                    labelColor='#929292'
                    rippleColor={Color.primaryDark}
                    style={{height: 56, width: width, elevation: 8, position: 'absolute', bottom: 0}}
                    onTabChange={(newTabIndex) => console.log(`New Tab at position ${newTabIndex}`)}
                    activeLabelColor={Color.primary}
                >
                    <Tab
                        label='Home'
                        icon={<Icon size={28} color="#929292" name='home' />}
                        activeIcon={<Icon size={28} color={Color.primary} name='home' />}
                    />
                    <Tab
                        label='Inbox'
                        icon={<Icon size={24} color="#929292" name='envelope' />}
                        activeIcon={<Icon size={24} color={Color.primary} name='envelope' />}
                    />
                    <Tab
                        label='Notification'
                        icon={<Icon size={24} color="#929292" name='bell' />}
                        activeIcon={<Icon size={24} color={Color.primary} name='bell' />}
                    />
                </BottomNavigation>
            </View>
        );
    }
}

