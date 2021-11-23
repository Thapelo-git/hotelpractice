import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View,ImageBackground ,TextInput} from 'react-native'
import { COLORS } from '../styles/Colors'
import Flatbutton from '../styles/button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { FONTS } from '../styles/Font'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const SignUp = ({navigation}) => {
    const [isPasswordShow,setPasswordShow]=useState(false)
    return (
        <SafeAreaView>
             <ImageBackground style={styles.imageBackground} source={require('../images/hotel.jpg')}>
             <View style={styles.container}>
            <Text style={{fontFamily:FONTS.extraBold,fontWeight:'bold',fontSize:30,
        color:COLORS.theme}}>Register</Text>
         <KeyboardAwareScrollView
             style={styles.innerContainer}>
                           <View style={styles.inputContainer}>
        <View style={styles.inputIconView}>
            <FontAwesome name='user'
            style={{color:'#fff',textAlign:'center',
        fontSize:18}}
            />
        </View>
            <TextInput
             style={styles.inputs}
             placeholder='Enter Last Name'
             
             />
        
        </View>
                 <View style={styles.inputContainer}>
        <View style={styles.inputIconView}>
            <Icon name='phone'
            style={{color:'#fff',textAlign:'center',
        fontSize:18}}
            />
        </View>
            <TextInput
             style={styles.inputs}
             placeholder='Enter Phone Number'
             keyboardType='numeric'
             />
        
        </View>
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
             placeholder='Confirm Password'
             />
         <Icon name={isPasswordShow?'eye-off':"eye"}
            style={{color:'black',textAlign:'center',
        fontSize:18,}}
           onPress={()=>setPasswordShow(!isPasswordShow)} />
            </View>
        </View>
        
        <View style={{marginTop:20,alignItems:'center',justifyContent:'center'}}>
            <Flatbutton text='REGISTER' />
            <View style={styles.signupContainer}>
               <Text style={styles.accountText}>Already have account?</Text>
               <Text style={styles.signupText}
               onPress={()=>navigation.navigate('SignIn')}>Sign In</Text>
            </View>
            </View>
            </KeyboardAwareScrollView>
        </View>
        </ImageBackground>
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    imageBackground:{
        width:'100%',
        height:'100%'
    },
    container:{
        backgroundColor:'#fff',
        padding:20,
        width:'100%',
        height:'90%',
        marginTop:80,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    innerContainer:{
        marginTop:20
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
    signupContainer:{
        marginTop:10,
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
