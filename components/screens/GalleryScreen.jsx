import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'


const GalleryScreen = ({route}) => {
    const list = route.params
    const Gallery=({pic})=>{
        <Image source={pic} style={{height:120,width:120}}/>
    }
    return (
        <View>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={list.images}
            renderItem={({item})=><Gallery pic={item} />}/>
        </View>
    )
}

export default GalleryScreen

const styles = StyleSheet.create({})
