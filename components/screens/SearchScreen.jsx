import React from 'react'
import { SafeAreaView, StyleSheet, Text, View,TextInput,FlatList ,TouchableOpacity,Image} from 'react-native'
import NearHotels from '../onbording/NearHotels'
import { COLORS } from '../styles/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
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
        <SafeAreaView>
            <View style={styles.headerContainer} 
            >
               
               <Feather name="arrow-left" size={30} color='black'
             onPress={()=>navigation.goBack()} /> 
           
            <Text style={styles.headerTitle}></Text>
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
        placeholder="Where to go ?"/>
        </View>
        </View>
        <FlatList
            keyExtractor={(_,key)=>key.toString()}
          
             showsVeticalScrollIndicator={false}
             
            data={NearHotels}
            renderItem={({item,index})=><Card Hotels={item} index={index}/>}
            />
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
})
