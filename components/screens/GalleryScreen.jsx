import React,{useState,useEffect} from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'


const GalleryScreen = ({route}) => {

    // console.log(route.params.galary)
     const galaryArr=route.params.galary
    const index=route.params.index
    const [myGalary,setMyGalary]=useState(0);
    const [backImg,setBackImg]=useState()
    const [myIndex,setMyIndex]=useState(index);

   
   

    useEffect(()=>{
        var temp=[]
        
        const changeImg=()=>{
            temp=galaryArr.filter((img,index)=>index!==myIndex)
        }
        const getBackgroundImg=()=>{
            setBackImg(galaryArr[myIndex])
        }
        changeImg()
        getBackgroundImg()
        setMyGalary(temp)
    },[myIndex])

    const list = route.params
    const Gallery=({pic})=>(
        // <ImageBackground source={}>
        <Image source={pic} style={{height:120,width:120}}/>
        // </ImageBackground>
    )
    return (
        <ImageBackground source={backImg} style={{flex:1}}>
           
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={myGalary}
            renderItem={({item})=><Gallery pic={item} />}/>
            
        </ImageBackground>
    )
}

export default GalleryScreen

const styles = StyleSheet.create({})
