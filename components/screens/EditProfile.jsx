import React,{useState} from 'react'
import { StyleSheet, Text, View ,StatusBar,SafeAreaView,TextInput,Image,
    TouchableOpacity} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { COLORS } from '../styles/Colors'
import Flatbutton from '../styles/button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { FONTS } from '../styles/Font'
import { Formik } from 'formik'
import * as yup from 'yup'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from 'expo-image-picker';

const EditProfile = ({navigation}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPasswordShow,setPasswordShow]=useState(false)
    const ReviewSchem=yup.object({
        name:yup.string().required().min(2),
        phonenumber:yup.string().required().min(10).max(10),
        email:yup.string().required().min(6),
        password:yup.string().required().min(6),
        confirmpassword:yup.string().required().min(6).oneOf([yup.ref('password'),null],'password does not match')
    })
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
          }
      
          setSelectedImage({ localUri: pickerResult.uri });
      }
    //   if (selectedImage !== null) {
    //     return (
    //       <View style={styles.container}>
    //         <Image
    //           source={{ uri: selectedImage.localUri }}
    //           style={{height:120,width:120,borderRadius:60,}}
    //         />
             
           
             
            
        
 
    //       </View>
    //     );
    //   }
      
    return (
        <SafeAreaView>
             <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
            <View style={styles.headerContainer} 
            >
               
               <Feather name="arrow-left" size={30} 
             onPress={()=>navigation.goBack()} /> 
            
            <Text style={styles.headerTitle}></Text>
            </View>
            <View style={{marginLeft:110}}>
                {
                   selectedImage?(<Image
              source={{ uri: selectedImage.localUri }}
              style={{height:120,width:120,borderRadius:60,}}
            />
                   ):(
                    <Image source={{ uri: 'https://image.shutterstock.com/image-vector/male-avatar-profile-picture-use-600w-193292033.jpg'}}
                    style={{height:120,width:120,borderRadius:60,}}/>
                   ) 
                }
            {/* <Image source={{ uri: 'https://image.shutterstock.com/image-vector/male-avatar-profile-picture-use-600w-193292033.jpg'}}
                style={{height:120,width:120,borderRadius:60,}}/> */}
                <TouchableOpacity style={{marginLeft:80}}
               mode="contained" onPress={openImagePickerAsync}>
                <FontAwesome name='camera' size={29} color='grey'/>
                </TouchableOpacity>
            </View>
           
            <View style={{padding:20}}>
            <Formik
        initialValues={{name:'',phonenumber:'',email:'',password:'',confirmpassword:''}}
        validationSchema={ReviewSchem}
        >

        {(props)=>(
         <KeyboardAwareScrollView
           >
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
            <Flatbutton text='UPDATE' />
      
            </View>
            </KeyboardAwareScrollView>
            )}</Formik>
        </View>
        </SafeAreaView>
        
    )
}

export default EditProfile

const styles = StyleSheet.create({
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
