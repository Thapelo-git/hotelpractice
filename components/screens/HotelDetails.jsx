import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View ,
    TouchableOpacity,Image,ScrollView,FlatList,ImageBackground} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const HotelDetails = ({navigation,route}) => {
    const list =route.params.data
    const galary=route.params.data.innerimages
    
    const Imageslist =({images,index})=>{
        return <View style={{marginRight:20}} >
         <TouchableOpacity onPress={()=>navigation.navigate('GalleryScreen',{galary:galary,index:index})}>
               <Image source={images} style={{height:120,width:120}}/> 
        </TouchableOpacity>
        </View>
    }
    
    
       
        const Aminities =({aminity})=>{
            return <ScrollView horizontal 
            showsHorizontalScrollIndicator={false} >
             <MaterialIcons name={aminity}/>
                
                  
            </ScrollView>
        }
    return (<SafeAreaView>
        
        <Image source={list._image} style={{width:'100%',height:180,}}/>
        <View style={styles.cardBox}>
        
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
        renderItem={({item,index})=><Imageslist images={item} index={index}/>}
        />
        
         <Text>{list._price}</Text>
        </View>
        </SafeAreaView>
    )
}

export default HotelDetails

const styles = StyleSheet.create({
    cardBox:{
        // paddingTop:30,
        borderTopRightRadius:60,
        padding:10,
        // flex:1,
        marginTop:60,


    }
})
