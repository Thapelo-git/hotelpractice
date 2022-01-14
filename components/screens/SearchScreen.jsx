import React from 'react'
import { SafeAreaView, StyleSheet, Text, View,TextInput,FlatList ,TouchableOpacity,Image} from 'react-native'
import NearHotels from '../onbording/NearHotels'
import { COLORS } from '../styles/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchScreen = ({navigation}) => {
    const Card =({Hotels,index})=>{
        return(
        <TouchableOpacity onPress={()=>navigation.navigate('Hotel Details',{data:Hotels,index:index})}>
        <View style={{flex:1,flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'space-between',padding:10}}>
            <Image source={Hotels._image} style={{width:'40%',height:120,borderRadius:10,marginTop:10}}/>
            <View style={{flex:1,flexDirection:'column',paddingHorizontal:15, marginTop:'5%'}}>
                <Text>{Hotels.hotelname}</Text>
                <View style={{flexDirection:'row'}}>
                    <Ionicons name='location-sharp' size={20}/>
                    <Text>{Hotels._location}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Ionicons name='star' size={20} color='orange'/>
                    <Text>{Hotels.rating}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>)
    }
    return (
        <SafeAreaView >
        
             {/* <View style={{
            marginTop:20,
            flexDirection:'row',
            paddingHorizontal:20,
        }}>
        <View style={styles.inputContainer}>
           
        <Ionicons name="search" size={24}/>
       
        <TextInput 
        style={{fontSize:18,flex:1,marginLeft:10}}
        placeholder="Where to go ?"/>
        </View>
        </View> */}
        {/* <FlatList
            keyExtractor={(_,key)=>key.toString()}
          
             showsVeticalScrollIndicator={false}
             
            data={NearHotels}
            renderItem={({item,index})=><Card Hotels={item} index={index}/>}
            /> */}
                {/* <View style={styles.container}> */}
            {/* <View style={styles.headerContainer} 
            >
               
               <Feather name="arrow-left" size={30} color='black'
             onPress={()=>navigation.goBack()} /> 
           
            <Text style={styles.headerTitle}></Text>
            </View> */}
            
            {/* <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
    
      onPress={(data, details = null) => {
       
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyD1oU6YlQOAAv9e8NsErGZLIizIDnbWmxw',
        language: 'en',
        
      }}
      
    
    styles={{ container: {
        marginTop: 95,
        zIndex: 9999,
        width: '100%',
        borderWidth: 1,
        margin: 0,
        padding: 0,
        position: 'absolute',
        backgroundColor: 'white',
        
        },
        textInput: {
            color: 'balck',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            borderWidth: 0,
            height: 44,
            },
           
           textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0
            },
            listView: {
            position: 'absolute',
            b4ckgroundColor: "white",
            borderWidth: 1,
            borderColor:'red',
            width: '100%',
            zIndex: 9999,
            height:120
            },
            }}
    /> */}
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAfevgpvPNjRALaz3jPJhNgE040p9GnH5o',
        language: 'en',
      }}
    />
    {/* </View> */}
        </SafeAreaView>
    )
}

export default SearchScreen

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
    container:{
        // padding:20,
        // height:'100%',
        // marginTop:20,
    },
    // headerContainer:{
    //     marginTop:20,
    // }
})
