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
    TouchableWithoutFeedback
} from 'react-native';
import Color from '../../common/Color';
import Images from '../../common/Images';
import Constant from '../../common/Images';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

var {width, height} = Dimensions.get("window");

export default class Inbox extends Component {
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
                <MaterialIcon.ToolbarAndroid
                    style={{height: 56, width: width, backgroundColor: Color.primary, elevation: 5}}
                    title='Inbox'
                    titleColor='white'
                    actions={[
                        {title: 'Settings', iconName: 'search', iconColor: '#ffffff', show: 'always'}
                    ]}
                    onActionSelected={this.onActionSelected}
                />
                <View style={{height: 53, width: width, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333333'}}>
                    <Icon name='envelope' size={36} color='rgba(255, 255, 255, 0.3)' style={{position: 'absolute', top: -8, left: 20}} />
                    <Text style={{fontSize: 12, fontWeight: '300', color: '#ffffff'}}>
                        THIS IS YOUR PRIVATE INBOX
                    </Text>
                    <Text style={{fontSize: 12, fontWeight: '700', color: '#ffffff'}}>
                        ONLY YOU CAN SEE THESE MESSAGES
                    </Text>
                </View>
                <TouchableWithoutFeedback onLongPress={() => alert('longpress')}>
                    <View style={{height: 88, width: width, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.12)'}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <View style={{height: 40, width: 40, marginTop: 16, backgroundColor: '#cecece', borderRadius: 40}} />
                        </View>
                        <View style={{flex: 3, paddingTop: 13, paddingBottom: 13}}>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 16, fontWeight: '700', color: 'rgba(0, 0, 0, 0.87)'}}>
                                    Cannot focus
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 14, fontWeight: '700', color: 'rgba(0, 0, 0, 0.87)'}}>
                                    Sandra Adams
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 14, fontWeight: '300'}}>
                                    year in which you get the chance…
                                </Text>
                            </View>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end', paddingTop: 13, paddingBottom: 13}}>
                            <View style={{flex: 1, marginRight: 16}}>
                                <Text style={{fontSize: 12, fontWeight: '700', color: '#EB5757'}}>
                                    3 unread
                                </Text>
                            </View>
                            <View style={{flex: 1, marginRight: 16}}>
                                <Text style={{fontSize: 12, fontWeight: '300'}}>
                                    yesterday
                                </Text>
                            </View>
                            <View style={{flex: 1, marginRight: 16}}>
                                
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onLongPress={() => alert('longpress')}>
                    <View style={{height: 88, width: width, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.12)'}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <View style={{height: 40, width: 40, marginTop: 16, backgroundColor: '#cecece', borderRadius: 40}} />
                        </View>
                        <View style={{flex: 3, paddingTop: 13, paddingBottom: 13}}>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 16, fontWeight: '300', color: 'rgba(0, 0, 0, 0.87)'}}>
                                    Little reward for our achieve...
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 14, fontWeight: '300'}}>
                                    Anonymous (You)
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 14, fontWeight: '300'}}>
                                    year in which you get the chance…
                                </Text>
                            </View>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end', paddingTop: 13, paddingBottom: 13}}>
                            <View style={{flex: 1, marginRight: 16}}>
                            </View>
                            <View style={{flex: 1, marginRight: 16}}>
                                <Text style={{fontSize: 12, fontWeight: '300'}}>
                                    5/28
                                </Text>
                            </View>
                            <View style={{flex: 1, marginRight: 16}}>
                                <Icon name='lock' size={12} color='rgba(0, 0, 0, 0.38)' />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onLongPress={() => alert('longpress')}>
                    <View style={{height: 88, width: width, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.12)'}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <View style={{height: 40, width: 40, marginTop: 16, backgroundColor: '#cecece', borderRadius: 40}} />
                        </View>
                        <View style={{flex: 3, paddingTop: 13, paddingBottom: 13}}>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 16, fontWeight: '300', color: 'rgba(0, 0, 0, 0.87)'}}>
                                    Always be like this
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 14, fontWeight: '300'}}>
                                    Sandra Adams
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 14, fontWeight: '300'}}>
                                    year in which you get the chance…
                                </Text>
                            </View>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end', paddingTop: 13, paddingBottom: 13}}>
                            <View style={{flex: 1, marginRight: 16}}>
                            </View>
                            <View style={{flex: 1, marginRight: 16}}>
                                <Text style={{fontSize: 12, fontWeight: '300'}}>
                                    3/12
                                </Text>
                            </View>
                            <View style={{flex: 1, marginRight: 16}}>
                                
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
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

