
import React,{useState,useEffect,useRef} from 'react'
import { StyleSheet, Text, View,FlatList,TextInput, Image, ScrollView ,
  Animated, TouchableOpacity} from 'react-native'
import { SearchBar } from 'react-native-elements';
import Hotels from '../onbording/Hotels.jsx'
import NearHotels from '../onbording/NearHotels.jsx';
import { COLORS } from '../styles/Colors'

import Entypo from 'react-native-vector-icons/Entypo'
import { } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Cancellation from './Cancellation.jsx';
const Bookings = () => {
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
    const [searchtext,setSearchtext] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
    useEffect(() => {
        setFilteredDataSource(NearHotels);
        setMasterDataSource(NearHotels);
    }, [])

    const searchFilterFunction =(text)=>{
        if(text){
            const newData = masterDataSource.filter(function(item){
                const itemData = item.hotelname ? item.hotelname.toUpperCase()
                :''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf( textData)>-1;

            })
            setFilteredDataSource(newData);
            setSearchtext(text)
        }else {
            setFilteredDataSource(masterDataSource);
            setSearchtext(text)
        }
    }
    const ItemView = ({item}) => {
        return (
          // Flat List Item
          <View >
            <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <Text></Text>
          {/* <Text
            style={{color:'#032B7A'}}
            onPress={() => getItem(item)}>
              
              {item.hotelname.toUpperCase()}

          </Text> */}
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{padding:10}}>
          <Image source={item._image} style={{height:120,width:120,borderRadius:10}}/>
          </View>
          <View style={{marginTop:20,}}>
          <Text
            style={{color:'#032B7A',fontWeight:'bold'}}
            onPress={() => getItem(item)}>
              
              {item.hotelname.toUpperCase()}

          </Text>
            <View style={{flexDirection:'row'}}>
              <Ionicons name='location-sharp' size={21}/>
          <Text>{item._location}</Text>
          </View>
          <Text>Successfully paid booking</Text>
       
              
          <Text>Price  {item._price}</Text>
          <TouchableOpacity style={{backgroundColor:'#AA0303',height:30,width:70,justifyContent:'center',
          alignItems:'center',}}  onPress={()=>{toggleAnimation()}}>
          <Text style={{color:'#fff'}}>Cancel</Text>
          </TouchableOpacity>
          
          </View>
          </View>
          </ScrollView>
          </View>
        );
      };
    
      const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };
    
      const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.name);
      };
    
    return (
        <View>
           {/* <SearchBar
           placeholder="Looking for your bookings?"
           onChangeText={(text) => searchFilterFunction(text)}
           onClear={(text) => searchFilterFunction('')}
           value={searchtext}
           round
     
           /> */}
           <View style={styles.header}>
                <Text style={{color:'#fff'}}>My Bookings</Text>
                </View>
           <View style={{
            marginTop:20,
            flexDirection:'row',
            paddingHorizontal:20,
        }}>
        <View style={styles.inputContainer}>
        <Ionicons name="search" size={24}/>
        <TextInput 
        style={{fontSize:18,flex:1,marginLeft:10}}
        placeholder="Looking for previews hotel?"
        onChangeText={(text) => searchFilterFunction(text)}
        />
        {/* <TouchableOpacity onPress={(text) => searchFilterFunction('')}>
       <Entypo name='circle-with-cross' size={20}/>
       </TouchableOpacity> */}
        </View>
        </View>
           <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
         <Cancellation
     onCancel={()=>{toggleAnimation()}}
     animation={showAnimation}/>
        </View>
    )
}

export default Bookings

const styles = StyleSheet.create({
  inputContainer:{
    flex:1,
    height:50,
    borderRadius:10,
    flexDirection:'row',
    backgroundColor:COLORS.lightgray,
    alignItems:'center',
    paddingHorizontal:20, 
},
header: {
  width:'100%',
  height:50,
  paddingVertical: 10,
  // borderRadius:10,
  alignItems:'center',
  backgroundColor: '#0225A1',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  marginBottom:12,
  justifyContent:'center',
 
  },
})


