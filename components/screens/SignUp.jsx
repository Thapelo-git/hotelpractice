import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View,ImageBackground ,TextInput} from 'react-native'
import { COLORS } from '../styles/Colors'
import Flatbutton from '../styles/button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { FONTS } from '../styles/Font'
import { Formik } from 'formik'
import {auth} from './firebase'
import {db} from './firebase'
import * as yup from 'yup'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const SignUp = ({navigation}) => {
    const [isPasswordShow,setPasswordShow]=useState(false)
    const ReviewSchem=yup.object({
        name:yup.string().required().min(2),
        phonenumber:yup.string().required().min(10).max(10),
        email:yup.string().required().min(6),
        password:yup.string().required().min(6),
        confirmpassword:yup.string().required().min(6).oneOf([yup.ref('password'),null],'password does not match')
    })
    const addUser= async (data)=>{
        try{
          const {uid,email,password,name,Phonenumber} =data
        const user = await auth
        .createUserWithEmailAndPassword(
          email.trim().toLowerCase(),password
        ).then(res =>{
          db.ref(`/user`).child(res.user.uid).set({
            name:name,
            email:email,
            Phonenumber:Phonenumber,
            uid:res.user.uid
          })
          })
        
   
  
        }
        catch(error){
          if(error.code === 'auth/email-already-in-use'){
            Alert.alert(
              'That email adress is already inuse'
            )
          }
          if(error.code === 'auth/invalid-email'){
            Alert.alert(
              'That email address is invalid'
            )
          }
          else{
            Alert.alert(error.code)
          }
          
        }
        
      }
  
    return (
        <SafeAreaView>
             <ImageBackground style={styles.imageBackground} source={require('../images/hotel.jpg')}>
             <View style={styles.container}>
            <Text style={{fontFamily:FONTS.extraBold,fontWeight:'bold',fontSize:30,
        color:COLORS.theme}}>Register</Text>
        <Formik
        initialValues={{name:'',phonenumber:'',email:'',password:'',confirmpassword:''}}
        validationSchema={ReviewSchem}
        onSubmit={(values,action)=>{
            action.resetForm()
         addUser(values)
        }}
       >

        {(props)=>(
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
             onChangeText={props.handleChange('name')}
             value={props.values.name}
             onBlur={props.handleBlur('name')}
             />
        
        </View>
        <Text style={{color:'red',marginTop:-10}}>{props.touched.name && props.errors.name}</Text>
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
             onChangeText={props.handleChange('phonenumber')}
             value={props.values.phonenumber}
             onBlur={props.handleBlur('phonenumber')}
             />
        
        </View>
        <Text style={{color:'red',marginTop:-15}}>{props.touched.phonenumber && props.errors.phonenumber}</Text>
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
             onChangeText={props.handleChange('email')}
             value={props.values.email}
             onBlur={props.handleBlur('email')}
             />
        
        </View>
        <Text style={{color:'red',marginTop:-15}}>{props.touched.email && props.errors.email}</Text>
        <View style={styles.inputContainer}>
        <View style={styles.inputIconView}>
            <Icon name='lock'
            style={{color:'#fff',textAlign:'center',
        fontSize:18}}
            />
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <TextInput
            secureTextEntry={isPasswordShow? false :true}
             style={styles.inputs}
             placeholder='Enter Password'
             onChangeText={props.handleChange('password')}
             value={props.values.password}
             onBlur={props.handleBlur('password')}
             />
         <Icon name={isPasswordShow?'eye-off':"eye"}
            style={{color:'black',textAlign:'center',
        fontSize:18,}}
           onPress={()=>setPasswordShow(!isPasswordShow)} />
            </View>
        </View>
        <Text style={{color:'red',marginTop:-15}}>{props.touched.password && props.errors.password}</Text>
        <View style={styles.inputContainer}>
        <View style={styles.inputIconView}>
            <Icon name='lock'
            style={{color:'#fff',textAlign:'center',
        fontSize:18}}
            />
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <TextInput
            secureTextEntry={isPasswordShow? false :true}
             style={styles.inputs}
             placeholder='Confirm Password'
             onChangeText={props.handleChange('confirmpassword')}
             value={props.values.confirmpassword}
             onBlur={props.handleBlur('confirmpassword')}
             />
         <Icon name={isPasswordShow?'eye-off':"eye"}
            style={{color:'black',textAlign:'center',
        fontSize:18,}}
           onPress={()=>setPasswordShow(!isPasswordShow)} />
            </View>
        </View>
        <Text style={{color:'red',marginTop:-15}}>{props.touched.confirmpassword && props.errors.confirmpassword}</Text>
        
        <View style={{marginTop:20,alignItems:'center',justifyContent:'center'}}>
            <Flatbutton text='REGISTER' />
            <View style={styles.signupContainer}>
               <Text style={styles.accountText}>Already have account?</Text>
               <Text style={styles.signupText}
               onPress={()=>navigation.navigate('SignIn')}>Sign In</Text>
            </View>
            </View>
            </KeyboardAwareScrollView>
            )}</Formik>
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
        marginVertical:10,
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
