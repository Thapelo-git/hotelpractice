import React ,{useState}from 'react'
import { StyleSheet, Text, View ,Animated,TouchableOpacity,
ScrollView,Pressable,Dimensions,SafeAreaView,TextInput} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const ConfirmScreen = ({onCancel,animation}) => {
    
        const [date,setDate]=useState(Date())
          const [isDatePickerVisible,setDatePickerVisibility]= useState(false)
          const [checkin,setCheckin]=useState('')
          const [checkout,setCheckout]=useState('')
          const [adultPlus,setAdultPlus]=useState(1)
      
          const [childPlus,setChildPlus]=useState(0)
          
          const showDatePicker = () => {
              setDatePickerVisibility(true);
            };
          
            const hideDatePicker = () => {
              setDatePickerVisibility(false);
            };
            const handleConfirm = (date) => {
                const currentDate =  date;
            
              //let tempDate = new Date(currentDate)
              let tempDate =currentDate
              let checkin = tempDate.getDate()+'/'+ (tempDate.getMonth()+ 1)+'/'+tempDate.getFullYear()
              let checkout= tempDate.getDate()+'/'+ (tempDate.getMonth()+ 1)+'/'+tempDate.getFullYear()
              setCheckin(checkin)
              setCheckout(checkout)
                // console.warn("A date has been picked: ", date);
                
                hideDatePicker();
               
              };
        
    return (
        <Animated.View style={{
            width:screenWidth,
      
            backgroundColor:'#fff',
            borderTopLeftRadius:30,borderTopRightRadius:30,padding:20,
            position:'absolute',
            zIndex:3,alignItems:'center',justifyContent:'center',
            maxHeight:300,shadowColor:'#000',shadowOffset:{width:0,height:12},shadowOpacity:0.50,shadowRadius:16.80,
            bottom:animation,elevation:24, 
          }}>
            <ScrollView showsVerticalScrollIndicator={false} 
            style={{width:'100%'}}>
              <TouchableOpacity onPress={()=>onCancel()}>
                <View style={{
                  flexDirection:'row',alignItems:'center',justifyContent:"space-between"}}>
                    <Text></Text>
                  <Feather name='x' size={30}/>
                </View>
              </TouchableOpacity>
              <SafeAreaView>
              
                   
                  <View style={{
                  flexDirection:'row',alignItems:'center',justifyContent:'space-around'}} >
                    <View>
                    <Text>CHECK IN</Text>
                  <View style={styles.inputContainer}>
              <View style={styles.inputIconView}>
              <Pressable style={[
                  styles.button,
                ] }
              onPress={showDatePicker}>
                <Feather
                       name="calendar" size={22}
                       
                       />
                       </Pressable>
              </View>
                  <TextInput
                   style={styles.inputs}
                   placeholder='Enter checkin Date'
                 
                   />
              
              </View> 
              </View>
              <View>
              <Text>CHECK OUT</Text>
              <View style={styles.inputContainer}>
              <View style={styles.inputIconView}>
              <Pressable style={[
                  styles.button,
                ] }
              onPress={showDatePicker}>
                <Feather
                       name="calendar" size={22}
                      
                       />
                       </Pressable>
              </View>
                  <TextInput
                   style={styles.inputs}
                   placeholder='Enter checkout Date'
               
                   value={checkout}
                  //  onChangeText={props.handleChange('email')}
                  //  value={props.values.email}
                  //  onBlur={props.handleBlur('email')}
                   />
              
              </View>
              </View>
                  <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode='date'
                  value={checkout}
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  />
               </View>
               <View style={{flexDirection:'row' ,alignItems:'stretch',
               justifyContent:'space-between',padding:30}}>
               <View>
               <Text>No of Adults</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',
    borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
    elevation:2,}}>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setAdultPlus(Math.max(1,adultPlus+1))}>
                <Feather
                       name="plus" size={22}
                       color='black'
                       />
            
                </Pressable>
                <Text style={{fontSize:21}}> {adultPlus} </Text>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setAdultPlus(Math.max(1,adultPlus-1))}>
                <Feather
                       name="minus" size={22}
                       color='black'
                       />
            
                </Pressable>
                </View>
                </View>
                <View>
                <Text>No of Children</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',
    borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
    elevation:2,}}>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setChildPlus(Math.max(0,childPlus+1))}>
                <Feather
                       name="plus" size={22}
                       color='black'
                       />
            
                </Pressable>
               
                <Text style={{fontSize:21}}> {childPlus} </Text>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setChildPlus(Math.max(0,childPlus-1))}>
                <Feather
                       name="minus" size={22}
                       color='black'
                       />
            
                </Pressable>
                </View>
                </View>
                </View>
                <View style={{left:50}}>
                {/* <Flatbutton text='Book Now'
                   onPress={()=>
                    navigation.navigate('CheckAvailability',{
                      room1:room1,
                      room2:room2,
                      room3:room3,
                      room4:room4,
                      })}/> */}
                </View>
              </SafeAreaView>
            </ScrollView>
          </Animated.View>
    )
}

export default ConfirmScreen

const styles = StyleSheet.create({})
