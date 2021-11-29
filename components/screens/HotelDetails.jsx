import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View ,
    TouchableOpacity,Image,ScrollView,FlatList} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const HotelDetails = ({navigation,route}) => {
    
    const list = route.params
    
    const Imageslist =({images})=>{
        return <ScrollView horizontal 
        showsHorizontalScrollIndicator={false} >
         <TouchableOpacity onPress={()=>navigation.navigate('GalleryScreen',images)}>
               <Image source={images} style={{height:120,width:120}}/> 
        </TouchableOpacity>
        </ScrollView>
    }
    
    
       
        const Aminities =({aminity})=>{
            return <ScrollView horizontal 
            showsHorizontalScrollIndicator={false} >
             <MaterialIcons name={aminity}/>
                
                  
            </ScrollView>
        }
    return (<SafeAreaView>
        <View>
        <FlatList
        keyExtractor={(_,key)=>key.toString()}
        horizontal 
         showsHorizontalScrollIndicator={false}
        
        data={list.Aminities}
        renderItem={({item})=><Aminities aminity={item}/>}
        />
         <FlatList
         keyExtractor={(_,key)=>key.toString()}
        horizontal 
         showsHorizontalScrollIndicator={false}
        
        data={list.innerimages}
        renderItem={({item})=><Imageslist images={item}/>}
        />
        
         <Text>{list._price}</Text>
        </View>
        </SafeAreaView>
    )
}

export default HotelDetails

const styles = StyleSheet.create({})
