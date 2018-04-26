import {StyleSheet, Dimensions, Platform} from 'react-native';
import Color from '../../common/Color';
import Images from '../../common/Images';
var {width, height} = Dimensions.get("window");
const vw = width / 100;
const vh = height / 100;
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logoWrapper: {
        width: width, 
        height: 120, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: Color.primary
    },
    inputWrapper: {
        width: width*.85, 
        height: 45.66, 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 15, 
        borderWidth: 1, 
        borderColor: '#a7a9ad', 
        borderRadius: 5, 
        marginBottom: 14.35
    },
    pickerWrapper: {
        width: width*.85, 
        height: 45.66, 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 15, 
        borderWidth: 1, 
        borderColor: '#a7a9ad', 
        borderRadius: 5, 
        marginTop: 32
    },
    loginButton: {
        width: width*.85, 
        height: 52, 
        backgroundColor: Color.primary, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 15, 
        borderRadius: 5, 
        marginTop: 32
    },
    loginButtonEmptyField: {
        width: width*.85, 
        height: 52, 
        backgroundColor: '#a7a9ad', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 15, 
        borderRadius: 5, 
        marginTop: 32
    },
    loginProblem: {
        width: width, 
        height: 59, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#f2f2f2', 
        borderTopWidth: 1, 
        borderTopColor: '#bdbdbd', 
        position: 'absolute', 
        bottom: 0
    },
    loginText: {
        fontSize: 18, 
        fontWeight: '500', 
        color: '#ffffff'
    },
    loginProblemText: {
        fontSize: 16, 
        fontWeight: '400', 
        color: '#3498db'
    },
    picker: {
        width: width*.7, 
        height: 40, 
        marginLeft: 11,
    },
    headerText: {
        fontSize: 12, 
        fontWeight: '400', 
        color: '#ffffff'
    },
    loginInput: {
        width: width*.7, 
        height: 40, 
        marginLeft: 11, 
        marginTop: 10
    }
});
