import React ,{useEffect,useState}from 'react'
import { StyleSheet, Text, View ,StatusBar,Image,SafeAreaView,TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ListItem from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import { auth,db } from './firebase';
const ProfileScreen = ({navigation}) => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phonenumber,setPhonenumber]=useState('')
    const [img,setImg]=useState('')
    const user = auth.currentUser.uid;
    useEffect(()=>{
        db.ref(`/users/`+ user).on('value',snap=>{
          
          setName(snap.val() && snap.val().name);
      setEmail(snap.val().email)
      setPhonenumber(snap.val().phonenumber)
      setImg(snap.val().img)
        })
      
        
      },[])
     
      
        
      

    const onSignout =()=>{
        
        auth
        .signOut()
        
    }
    return (
        <SafeAreaView style={styles.page}>
            <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
        <View style={styles.header}>
            
                <View>
                <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,
            marginTop:18}}>{name}</Text>
             <Text style={{fontSize:18,marginLeft:10,
            }}>{email}</Text>
             </View>
             <TouchableOpacity onPress={()=>navigation.navigate('EditProfile',{
                   email:email,name:name,Phonenumber:Phonenumber
             })}>
                
            <Image source={{url:img}}
                style={{height:80,width:80,borderRadius:40}}/>
                </TouchableOpacity>
        </View>
        <View style={styles.editBox}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',
        paddingRight:20}}>
            <Text></Text>
            <TouchableOpacity onPress={()=>navigation.navigate('EditProfile',{
                   email:email,name:name,phonenumber:phonenumber
             })}>
            
             <Ionicons name='pencil' size={20}/>
            </TouchableOpacity>
                
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <View>
        <Text style={{fontSize:17}}>Name</Text>
        <Text style={{fontSize:17}}>Contact</Text>
        <Text style={{fontSize:17}}>Email</Text>  
            </View>
        <View>
        <Text>{name}</Text>
        <Text>0745823169</Text>
        <Text>{email}</Text>
        </View>
        </View>
        </View>
        <View style={{top:30}}>
        <View style={styles.pagelist}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Icon name="heart" size={20}  /> 
            <Text>     Favorites</Text>
            </View>
            <Icon name="chevron-right" size={15}  />
        </View>
       
        <View style={styles.pagelist}>
        
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Icon name="credit-card-alt" size={15}  /> 
            <Text>     My Cards</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Creditcard'
            )}>
            <Icon name="chevron-right" size={15}  />
            </TouchableOpacity>
        </View>
        
        <View style={styles.pagelist}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Entypo name="help" size={15}  /> 
            <Text>     Help</Text>
            </View>
            <Icon name="chevron-right" size={15}  />
        </View>
        <View style={styles.pagelist}>
            <TouchableOpacity  onPress={()=>onSignout() }>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Entypo name="log-out" size={15}  /> 
            <Text>     Log Out</Text>
            </View>
            </TouchableOpacity>
            <Icon name="chevron-right" size={15}  />
        </View>
        </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    page:{
        padding:10
    },
    header:{
        // marginTop:1,
        flexDirection:'row',
        justifyContent:'space-between',
        // paddingHorizontal:10,
        borderColor:'grey',
        borderBottomWidth:1.5,
        
    },
    editBox:{
        borderWidth:1,
        borderRadius:10,
        height:110,
        top:40
        
    },
    pagelist:{
        justifyContent:'space-between',
        padding:15,
        flexDirection:'row',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'grey',
        top:70
    }
})
