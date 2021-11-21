import React from 'react'
import { SafeAreaView, StyleSheet, Text, View,ImageBackground,TextInput} from 'react-native'
import Flatbutton from '../styles/button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FONTS } from '../styles/Font'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const SignIn = () => {
    return (
        <SafeAreaView>
            <ImageBackground style={styles.imageBackground} source={require('../images/dinnig.jpg')}>
        <View style={styles.container}>
            <KeyboardAwareScrollView
            style={{padding:20}}>
        <View style={styles.inputContainer}>
        <View style={styles.inputIconView}>
            <Icon name='email'
            style={{color:'#fff',textAlign:'center',
        fontSize:18}}
            />
        </View>
            <TextInput
             style={styles.inputs}
             placeholder='Enter Email'
             />
        
        </View>
            <Flatbutton/>
            </KeyboardAwareScrollView>
        </View>
        </ImageBackground>
        </SafeAreaView>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        padding:10,
        width:'100%',
        height:'90%',
        marginTop:210,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
    },
    imageBackground:{
        width:'100%',
        height:'100%'
    },
    inputs:{
        borderBottomColor:'#fff',
        flex:1,
        paddingLeft:10,
        fontFamily:FONTS.Regular,
    },
    inputContainer:{
        borderRadius:30,
        height:48,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        elevation:2,

    },
    inputIconView:{
        width:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4A1DD6',
        height:'100%',
        borderRadius:30,
        alignSelf:'center',
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        elevation:2,
    }
})
