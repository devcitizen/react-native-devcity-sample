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
} from 'react-native';
import Color from '../../common/Color';
import Images from '../../common/Images';
import Constant from '../../common/Images';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

var {width, height} = Dimensions.get("window");
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Onboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            dotSize1: 12,
            dotSize2: 6,
            dotSize3: 6,
            page: 1,
            nextBtn: 'NEXT'
        };
    }

    componentWillMount() {
        console.log('PIXEL', PixelRatio.get())
    }

    animation(event) {
        LayoutAnimation.spring();
        if(this.state.page == 1) {
            this.setState({page: 2, dotSize1: 6, dotSize2: 12});
            this.refs._scrollVIew.scrollTo({x: width, y: 0, animated: true})
        }

        if(this.state.page == 2) {
            this.setState({dotSize2: 6, dotSize3: 12, nextBtn: 'FINISH'});
            this.refs._scrollVIew.scrollTo({x: width*2, y: 0, animated: true})
        }

        if(this.state.nextBtn === 'FINISH') {
            console.log('finish')
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
                <ScrollView
                    ref='_scrollVIew'
                    style={{flex: 1, width: width}}
                    scrollEnabled={false}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollBegin={() => {this.animation()}}
                >
                    <View style={Styles.container}>
                        <View style={{flex: 1, width: width, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 24, fontWeight: '500', width: width/1.5, textAlign: 'center', marginBottom: 15, color: 'rgba(0, 0, 0, 0.87)'}}>
                                Welcome
                            </Text>
                            <Text style={{fontSize: 16, fontWeight: '400', width: width/1.5, textAlign: 'center', color: 'rgba(0, 0, 0, 0.87)'}}>
                                Welcome message here greeting our user
                            </Text>
                        </View>
                        <View style={{flex: 1, width: width}}>
                            <Image source={Images.onboardBg1} />
                        </View>
                    </View>
                    <View style={Styles.container}>
                        <View style={{flex: 1, width: width, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 24, fontWeight: '500', width: width/1.5, textAlign: 'center', marginBottom: 15, color: 'rgba(0, 0, 0, 0.87)'}}>
                                Reason Why We Exist
                            </Text>
                            <Text style={{fontSize: 16, fontWeight: '400', width: width/1.5, textAlign: 'center', color: 'rgba(0, 0, 0, 0.87)'}}>
                                Description
                            </Text>
                        </View>
                        <View style={{flex: 1, width: width}}>
                            <Image source={Images.onboardBg2} />
                        </View>
                    </View>
                    <View style={Styles.container}>
                        <View style={{flex: 1, width: width, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 24, fontWeight: '500', width: width/1.5, textAlign: 'center', marginBottom: 15, color: 'rgba(0, 0, 0, 0.87)'}}>
                                The Impact That Employee Will Have
                            </Text>
                            <Text style={{fontSize: 16, fontWeight: '400', width: width/1.5, textAlign: 'center', color: 'rgba(0, 0, 0, 0.87)'}}>
                                Description
                            </Text>
                        </View>
                        <View style={{flex: 1, width: width}}>
                            <Image source={Images.onboardBg3} />
                        </View>
                    </View>
                </ScrollView>
                <View style={{position: 'absolute', bottom: 0, width: width, height: 48, flexDirection: 'row', alignItems: 'center', backgroundColor: Color.primaryDark}}>
                    <View style={{flex: 1, padding: 24}}>
                        <View style={{width: 50, height: 13, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                            <View style={{width: this.state.dotSize1, height: this.state.dotSize1, borderRadius: 100, backgroundColor: '#ffffff', elevation: 1}} />
                            <View style={{width: this.state.dotSize2, height: this.state.dotSize2, borderRadius: 100, backgroundColor: '#ffffff', elevation: 1}} />
                            <View style={{width: this.state.dotSize3, height: this.state.dotSize3, borderRadius: 100, backgroundColor: '#ffffff', elevation: 1}} />
                        </View>
                    </View>
                    <View style={{flex: 1, padding: 24}}>
                        <Text style={{alignSelf: 'flex-end', fontSize: 14, fontWeight: '400', color: '#ffffff'}} onPress={() => {this.animation()}}>
                            {this.state.nextBtn}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

