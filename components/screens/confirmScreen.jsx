import React ,{useState}from 'react'
import { StyleSheet, Text, View ,Animated,TouchableOpacity,
ScrollView,Pressable,Dimensions,SafeAreaView,TextInput, Image} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Flatbutton from "../styles/button"
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const ConfirmScreen = ({navigation,route}) => {
    
       const room=route.params.room
          const [roomnumber,setRoomnumber]=useState(0)  
          const hotelinfor=route.params.hotelinfor
          const diff=route.params.diff
          
          
        
    return (
        
      <SafeAreaView >
              
                <View style={{
                  flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                   <TouchableOpacity onPress={()=>navigation.goBack()}> 
                  <Feather name="arrow-left" size={30}/>
                  </TouchableOpacity>
                  <Text style={styles.headerTitle}>Room</Text>
                </View>
                <View style={{padding:10,width:screenWidth}}>
                <Image source={{uri:room.roomurl}} style={{height:190,width:'100%',borderRadius:7}}/>
                </View>
                
             
              <View style={{
                  flexDirection:'row',alignItems:'center',justifyContent:'space-around',}} >
                    <View>
                    <Text style={{color:'grey'}}>Room Type</Text>
                    <View style={{paddingVertical:10}}>
                    <Text>{room.bedType}</Text>
                    </View>
              </View>
              <View>
              <Text style={{color:'grey'}}>Capacity</Text>
              <View style={{paddingVertical:10}}>
                  
                  <Text>{room.roomname}</Text>
              </View>
              </View>
               
               </View>
              
                   
                  <View style={{
                  flexDirection:'row',alignItems:'center',justifyContent:'space-around'}} >
                    <View>
                    <Text style={{color:'grey'}}>Your Reservation</Text>
                  
              </View>
              <View>
              <Text style={{color:'grey'}}>Guests</Text>
              
              </View>
               
               </View>
               <View style={{flexDirection:'row' ,alignItems:'stretch',
               justifyContent:'space-between',padding:30}}>
               <View>
               <Text style={{fontSize:21,color:'gray'}}>No of Room needed</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',
    borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
    elevation:2,}}>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setRoomnumber(Math.max(0,roomnumber+1))}>
                <Feather
                       name="plus" size={22}
                       color='black'
                       />
            
                </Pressable>
                <Text style={{fontSize:21}}> {roomnumber} </Text>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setRoomnumber(Math.max(0,roomnumber-1))}>
                <Feather
                       name="minus" size={22}
                       color='black'
                       />
            
                </Pressable>
                </View>
                </View>
               
                </View>
                <View style={{paddingVertical:18,paddingHorizontal:18}}>
                <Text style={{fontSize:21,fontWeight:'bold'}}>PRICE   R</Text>
                <View style={{justifyContent:'space-between',
    borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
    elevation:2,}}>
      <Text style={{fontSize:25}}>{room.beds * roomnumber}</Text>
    </View>
    </View>
                <View style={{left:50}}>
                <Flatbutton text='Book Now'
                   onPress={()=>navigation.navigate('PaymentScreen')}/>
                </View>
                
              </SafeAreaView>
            
    )
}

export default ConfirmScreen

const styles = StyleSheet.create({
  headerTitle:{
    marginLeft:130
  }
})
