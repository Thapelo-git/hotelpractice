import React ,{useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View,ImageBackground,TextInput,} from 'react-native'
import Flatbutton from '../styles/button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FONTS } from '../styles/Font'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Checkbox } from 'react-native-paper'
import { COLORS } from '../styles/Colors'
const SignIn = ({navigation}) => {
    const [isSelected,setSelection]=useState(false)
    const [isPasswordShow,setPasswordShow]=useState(false)
    return (
        <SafeAreaView>
            <ImageBackground style={styles.imageBackground} source={require('../images/hotel.jpg')}>
        <View style={styles.container}>
            <Text style={{fontFamily:FONTS.extraBold,fontWeight:'bold',fontSize:30,
        color:COLORS.theme}}>Login</Text>
            <KeyboardAwareScrollView
             style={styles.innerContainer}>
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
             keyboardType='email-address'
             />
        
        </View>
        <View style={styles.inputContainer}>
        <View style={styles.inputIconView}>
            <Icon name='lock'
            style={{color:'#fff',textAlign:'center',
        fontSize:18}}
            />
        </View>
        <View style={{flexDirection:'row',alignItems:'center',}}>
            <TextInput
            secureTextEntry={isPasswordShow? false :true}
             style={styles.inputs}
             placeholder='Enter Password'
             />
         <Icon name={isPasswordShow?'eye-off':"eye"}
            style={{color:'black',textAlign:'center',
        fontSize:18,}}
           onPress={()=>setPasswordShow(!isPasswordShow)} />
            </View>
        </View>
        <View style={styles.forgetPasswordContainer}>
        <View style={styles.toggleContainer}>
        <Checkbox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}/>
         <Text style={styles.rememberMeText}>remember me</Text>
        
        </View>
        <Text style={styles.forgetPasswordText}
        onPress={()=>navigation.navigate('ForgetPassword')}>ForgetPassword</Text>
        </View>
        <View style={{marginTop:20,alignItems:'center',justifyContent:'center'}}>
            <Flatbutton text='LOGIN' onPress={()=>navigation.navigate('Dashboard')} />
            <View style={styles.signupContainer}>
               <Text style={styles.accountText}>Don't have account?</Text>
               <Text style={styles.signupText}
               onPress={()=>navigation.navigate('SignUp')}>Sign Up</Text>
            </View>
            </View>
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
        padding:20,
        width:'100%',
        height:'90%',
        marginTop:210,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    imageBackground:{
        width:'100%',
        height:'100%'
    },
    inputs:{
        borderBottomColor:'black',
        
         flex:0.8,
        paddingLeft:10,
        fontFamily:FONTS.Regular,
    },
    inputContainer:{
        borderRadius:30,
        height:48,
        marginVertical:12,
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
    },
    forgetPasswordContainer:{
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',

    },
    toggleContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:-10
    },
    forgetPasswordText:{
        fontWeight:'bold',
        color:COLORS.theme,

    },
    innerContainer:{
        marginTop:20
    },
    signupContainer:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    accountText:{
        // marginLeft:-30,
    },
    signupText:{
        color:COLORS.theme,
        // marginRight:40,
    }
})
