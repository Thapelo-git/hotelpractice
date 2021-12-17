import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View ,Pressable,TextInput} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
const CheckAvailability = ({navigation}) => {
    const [date,setDate]=useState(Date())
    const [isDatePickerVisible,setDatePickerVisibility]= useState(false)
    const [checkin,setCheckin]=useState('')
    const [checkout,setCheckout]=useState('')
    const [adultPlus,setAdultPlus]=useState(0)

    const [childPlus,setChildPlus]=useState(0)
    const [childMinus,setChildMinus]=useState(0)
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
        <SafeAreaView>
             <View style={{width:30,flexDirection:'row',
      height:30,justifyContent:'center',alignItems:'center',
      }}>
         
               <Feather name="arrow-left" size={30} color='#000'
             onPress={()=>navigation.goBack()} /> 
             
            <Text style={styles.headerTitle}>Bookingss</Text>
            </View>
            <View>
            <View style={styles.inputContainer}>
        <View style={styles.inputIconView}>
        <Pressable style={[
            styles.button,
          ] }
        onPress={showDatePicker}>
          <Feather
                 name="calendar" size={22}
                 color='white'
                 />
                 </Pressable>
        </View>
            <TextInput
             style={styles.inputs}
             placeholder='Enter checkin Date'
             keyboardType='email-address'
             value={checkin}
            //  onChangeText={props.handleChange('email')}
            //  value={props.values.email}
            //  onBlur={props.handleBlur('email')}
             />
        
        </View>
        <View style={styles.inputContainer}>
        <View style={styles.inputIconView}>
        <Pressable style={[
            styles.button,
          ] }
        onPress={showDatePicker}>
          <Feather
                 name="calendar" size={22}
                 color='white'
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
            <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode='date'
            value={checkout}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            />
            <Pressable style={[
            styles.button,{backgroundColor: 'blue',flexDirection:"row"}
          ] }
        onPress={showDatePicker}>
          <Feather
                 name="calendar" size={22}
                 color='black'
                 />
      <Text>
        checkin
      </Text>
          </Pressable>
          <Pressable style={[
            styles.button,{backgroundColor: 'blue',flexDirection:"row"}
          ] }
        onPress={showDatePicker}>
          <Feather
                 name="calendar" size={22}
                 color='black'
                 />
      <Text>
       checkout
      </Text>
          </Pressable>

          <Pressable style={[
            styles.buttonAdding,{backgroundColor: 'blue',flexDirection:"row"}
          ] }
        onPress={()=>setAdultPlus(Math.min(5,adultPlus+1))}>
          <Feather
                 name="plus" size={22}
                 color='black'
                 />
      
          </Pressable>
          <Text>{adultPlus}</Text>
          <Pressable style={[
            styles.buttonAdding,{backgroundColor: 'blue',flexDirection:"row"}
          ] }
        onPress={()=>setAdultPlus(Math.max(0,adultPlus-1))}>
          <Feather
                 name="minus" size={22}
                 color='black'
                 />
      
          </Pressable>
            </View>
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
