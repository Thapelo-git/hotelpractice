import React,{useEffect, useState} from 'react'

import { SafeAreaView,FlatList, StyleSheet, Text, View ,Picker,
  Pressable,TextInput, Image} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Hotels from '../onbording/Hotels'
import Flatbutton from '../styles/button'
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
   console.log(price)
   
    return (
        <SafeAreaView>
             <View style={{flexDirection:'row',
      height:30,justifyContent:'center',alignItems:'center',
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
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                
            <View style={{borderColor:'gray',borderBottomWidth:1,flexDirection:'row'}}>
            <Image source={item.image} style={{height:80,width:80,borderRadius:20}}/>
            <View>
              <View>
              <Text>{item.name}</Text>
              <Text style={{fontSize:20,fontWeight:'bold'}}>{item.bedtype}</Text>
              </View>
            <View>
            <Text>{item.price}</Text>
            <Flatbutton text='Book Now' onPress={()=>navigation.navigate('confirmScreen')} size={10}/>
            </View>
            </View>
           
            </View>
            
            </View>
                  
                  )
               }
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
})
