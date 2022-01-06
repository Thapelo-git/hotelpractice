import React,{useEffect, useState,useRef} from 'react'

import { SafeAreaView,FlatList, StyleSheet, Text, View ,Picker,
  Pressable,TextInput, Image,TouchableOpacity,Animated} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Hotels from '../onbording/Hotels'
import Flatbutton from '../styles/button'
import ConfirmScreen from './confirmScreen'
const CheckAvailability = ({navigation,route}) => {
  const [pickerindex,setpickerindex]=useState(0)
    const [sorts,setSorts]=useState('')
    const room1=route.params.room1
    const room2=route.params.room2
    const room3=route.params.room3
    const room4=route.params.room4

  const [price,setPrice]=useState([
    room1,room2,room3,room4
  ])
  // price.price.sort(function(a,b){return a-b})
// price.push(room1)
// price.push(room2)
// price.push(room3)
// price.push(room4)
    const hotel=route.params.list
   
   const [animationValue,setAnimationValue]=useState(-1000)
  const showAnimation= useRef(new Animated.Value(animationValue)).current
  
  const toggleAnimation=()=>{
    
    const val= animationValue === 0 ? -1000 : 0
    Animated.timing(showAnimation,{
      useNativeDriver: false,
      toValue:val,
      duration:350

    }).start()
    setAnimationValue(val)
  }
    return (
        <SafeAreaView style={{padding:20}}>
             <View style={{flexDirection:'row',
      height:30,justifyContent:'space-between',alignItems:'center',
      }}>
         
               <Feather name="arrow-left" size={30} color='#000'
             onPress={()=>navigation.goBack()} /> 
             
            <Text style={styles.headerTitle}>Bookingss</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.titles}>Sort By</Text>
              <Picker 
              selectedValue={sorts}
              
              onValueChange={(value,index)=>setSorts( value)}
              >
                  <Picker.Item label='Lowest Price' value='Lowest Price'/>
                  <Picker.Item label='Highest Price' value='Highest Price'/>
               
              </Picker>
              </View>
              {/* <Text style={styles.text}> {price.price}</Text> */}
              {
                price.map((item)=>
                  <View>
                    <Text></Text>
                    
                
            <View style={{borderColor:'gray',borderBottomWidth:1,flexDirection:'row'}}>
            <Image source={item.image} style={{height:120,width:120,borderRadius:20}}/>
            <Text></Text>
            <View>
              <View>
              <Text>{item.name}</Text>
              <Text style={{fontSize:20,fontWeight:'bold',marginStart:80}}>{item.bedtype}</Text>
              </View>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <Text>{item.price}</Text>
           
            <TouchableOpacity onPress={()=>{toggleAnimation()}} >
            <View style={styles.buttonstyle}  >
            <Text style={styles.buttonText}>Book Now</Text>
            </View>
        </TouchableOpacity>
            </View>
            </View>
           
            </View>
            
            </View>
                  
                  )
               }
               <ConfirmScreen
     onCancel={()=>{toggleAnimation()}}
     animation={showAnimation}/>
        </SafeAreaView>
    )
}

export default CheckAvailability

const styles = StyleSheet.create({
    buttonAdding:{
        borderWidth:1,
        width:30,
        height:30,
        borderRadius:15,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center'
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
  buttonstyle:{
    borderRadius:5,
   marginStart:80,
    width:100,
    backgroundColor:'#4A1DD6',
    

},
buttonText:{
    color:'#fff',
    fontWeight:'normal',
    // textTransform:'uppercase',
    fontSize:20,
    fontStyle:'normal',
    textAlign:'center'
},
})