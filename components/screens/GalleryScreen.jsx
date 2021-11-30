import React,{useState,useEffect} from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'


const GalleryScreen = ({route}) => {

    // console.log(route.params.galary)
     const galaryArr=route.params.galary
    const index=route.params.index
    const [myGalary,setMyGalary]=useState(0);
    const [myIndex,setMyIndex]=useState(index);

   
   

    useEffect(()=>{
        var temp=[]
        const changeImg=()=>{
            temp=galaryArr.filter((img,index)=>index!==myIndex)
        }
        changeImg()
        setMyGalary(temp)
    },[myIndex])

    const list = route.params
    const Gallery=({pic})=>(
        <Image source={pic} style={{height:120,width:120}}/>
    )
    return (
        <View>
            <ImageBackground source={}>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={myGalary}
            renderItem={({item})=><Gallery pic={item} />}/>
            </ImageBackground>
        </View>
    )
}

export default GalleryScreen

const styles = StyleSheet.create({})
