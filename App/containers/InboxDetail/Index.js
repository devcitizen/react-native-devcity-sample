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

export default class InboxDetail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            height: 48
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
                    titleColor='#ffffff'
                    navIconName='arrow-back'
                    onIconClicked={() => alert('back')}
                    actions={[
                        {title: 'Delete', iconName: 'delete', iconColor: '#ffffff', show: 'always'}
                    ]}
                    onActionSelected={this.onActionSelected}
                />
                <ScrollView style={{marginBottom: 48}}>
                    <View style={{height: 65, width: width, flexDirection: 'row'}}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{height: 40, width: 40, backgroundColor: '#cecece', borderRadius: 40}} />
                        </View>
                        <View style={{flex: 4, justifyContent: 'center'}}>
                            <Text style={{fontSize: 14, color: 'rgba(0, 0, 0, 0.38)'}}>
                                Walter Mongisidi
                            </Text>
                            <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.38)'}}>
                                Sun, 9 Apr 2017
                            </Text>
                        </View>
                    </View>
                    <View style={{minHeight: 65, width: width, alignItems: 'center'}}>
                        <Text style={{fontSize: 16, fontWeight: '500', color: '#000000', marginLeft: 16, marginRight: 16, marginBottom: 16}}>
                            Little reward for our achievement I think will help our contribution increasing
                        </Text>
                    </View>
                    <View style={{height: 26, width: width, justifyContent: 'center'}}>
                        <View style={{height: 1, width: width, backgroundColor: 'rgba(0, 0, 0, 0.12)'}} />
                        <View style={{height: 43, width: 127, alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, backgroundColor: '#ffffff'}}>
                            <View style={{height: 26, width: 107, alignItems: 'center', justifyContent: 'center', position: 'absolute', elevation: 2, backgroundColor: '#ffffff', borderRadius: 26}}>
                                <Text style={{fontSize: 10, fontWeight: '300', color: 'rgba(0, 0, 0, 0.38)'}}>
                                    <Icon name='unlock-alt' size={12} color='rgba(0, 0, 0, 0.38)' />  Not anonymous
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{minHeight: 69, width: width, flexDirection: 'row', paddingTop: 6, paddingBottom: 6}}>
                        <View style={{flex: 1, minHeight: 38}}>
                            <View style={{height: 40, width: 40, backgroundColor: '#cecece', borderRadius: 40, marginLeft: 16}} />
                        </View>
                        <View style={{flex: 3.7, minHeight: 38}}>
                            <Text style={{fontSize: 12, color: '#000000', marginLeft: 7}}>
                                Kristina
                            </Text>
                            <View style={{minHeight: 38, backgroundColor: '#F2F2F2', alignItems: 'center', justifyContent: 'center', borderRadius: 5, padding: 7, marginLeft: 7, marginTop: 4}}>
                                <Text style={{fontSize: 14, color: '#000000'}}>
                                    What do you think about that?
                                </Text>
                            </View>
                        </View>
                        <View style={{flex: 1.7, minHeight: 38, justifyContent: 'flex-end'}}>
                            <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.38)', marginLeft: 8}}>
                                09:00 am
                            </Text>
                        </View>
                    </View>
                    <View style={{minHeight: 38, width: width, flexDirection: 'row'}}>
                        <View style={{flex: 1, minHeight: 38}}>
                        </View>
                        <View style={{flex: 3.7, minHeight: 38}}>
                            <View style={{minHeight: 38, backgroundColor: '#F2F2F2', alignItems: 'center', justifyContent: 'center', borderRadius: 5, padding: 7, marginLeft: 7}}>
                                <Text style={{fontSize: 14, color: '#000000'}}>
                                    Should we raise this to other? I think your request seems popular right now.
                                </Text>
                            </View>
                        </View>
                        <View style={{flex: 1.7, minHeight: 38, justifyContent: 'flex-end'}}>
                            <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.38)', marginLeft: 8}}>
                                09:01 am
                            </Text>
                        </View>
                    </View>
                    <View style={{minHeight: 69, width: width, flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 6, paddingBottom: 6}}>
                        <View style={{minHeight: 38, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                            <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.38)', marginRight: 8}}>
                                09:00 am
                            </Text>
                        </View>
                        <View style={{minWidth: 32, alignItems: 'flex-end', minHeight: 38}}>
                            <Text style={{fontSize: 12, color: '#000000', marginRight: 7}}>
                                Walter Mongisidi
                            </Text>
                            <View style={{minHeight: 38, minWidth: 32, maxWidth: width/1.4, backgroundColor: '#32A18A', alignItems: 'center', justifyContent: 'center', borderRadius: 5, padding: 7, marginRight: 7, marginTop: 4}}>
                                <Text style={{fontSize: 14, color: '#ffffff'}}>
                                    We should raise this!
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 42, width: width, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 12, fontWeight: '500', color: 'rgba(0, 0, 0, 0.38)'}}>
                            Tue, 11 Apr 2017
                        </Text>
                    </View>
                    <View style={{minHeight: 69, width: width, flexDirection: 'row', paddingTop: 6, paddingBottom: 6}}>
                        <View style={{flex: 1, minHeight: 38}}>
                            <View style={{height: 40, width: 40, backgroundColor: '#cecece', borderRadius: 40, marginLeft: 16}} />
                        </View>
                        <View style={{flex: 3.7, minHeight: 38}}>
                            <Text style={{fontSize: 12, color: '#000000', marginLeft: 7}}>
                                Sandra Adams
                            </Text>
                            <View style={{minHeight: 38, backgroundColor: '#F2F2F2', alignItems: 'center', justifyContent: 'center', borderRadius: 5, padding: 7, marginLeft: 7, marginTop: 4}}>
                                <Text style={{fontSize: 14, color: '#000000'}}>
                                    This one is interesting to follow up.
                                </Text>
                            </View>
                        </View>
                        <View style={{flex: 1.7, minHeight: 38, justifyContent: 'flex-end'}}>
                            <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.38)', marginLeft: 8}}>
                                11:45 am
                            </Text>
                        </View>
                    </View>
                    <View style={{height: 10, width: width}} />
                </ScrollView>
                <View style={{minHeight: 48, width: width, flexDirection: 'row', position: 'absolute', bottom: 0, backgroundColor: '#ffffff', borderTopWidth: .5, borderTopColor: '#979797'}}>
                    <TextInput
                        style={{height: this.state.height, width: width - 53, marginLeft: 10, bottom: 0}}
                        placeholder={'Write message here'}
                        underlineColorAndroid={'transparent'}
                        multiline={true}
                        maxHeight={96}
                        // onContentSizeChange={(event) => this.setState({height: event.nativeEvent.contentSize.height})}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <TouchableNativeFeedback>
                        <View style={{height: 48, width: 53, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, right: 0}}>
                            <MaterialIcon name='send' size={21} color='rgba(0, 0, 0, 0.38)' />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

