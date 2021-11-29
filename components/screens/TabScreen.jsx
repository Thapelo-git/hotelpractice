import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from './HomeScreen';
import { COLORS } from '../styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HistoryScreen from './HistoryScreen';
import Bookings from './Bookings';
import ProfileScreen from './ProfileScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HotelDetails from './HotelDetails';
import GalleryScreen from './GalleryScreen';

const Stack = createNativeStackNavigator();
const combineHotel=()=> {
  return (
    
    
    <Stack.Navigator>
    <Stack.Screen name="HomeScreen" options = {{headerShown :false}} component={HomeScreen} />
      <Stack.Screen name="Hotel Details"  component={HotelDetails} />
      <Stack.Screen name="GalleryScreen"  component={GalleryScreen} />
    </Stack.Navigator>
  
  )}
    const Tab = createMaterialBottomTabNavigator();
const TabScreen = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
       
        >
            <Tab.Screen name="HomeScreen" component={combineHotel}
            options={{
                tabBarLabel:'Home',
                tarBarColor:COLORS.theme,
                tabBarIcon:({color}) =>
            <Icon name="ios-home" color={color} size={26}/>}}/>
            <Tab.Screen name="HistoryScreen" component={HistoryScreen}
            options={{
                tabBarLabel:'History',
                tarBarColor:COLORS.theme,
                tabBarIcon:({color}) =>
            <FontAwesome name="history" color={color} size={26}/>}}/>
           
            <Tab.Screen name="Bookings" component={Bookings}
            options={{
                tabBarLabel:'Bookings',
                tarBarColor:COLORS.theme,
                tabBarIcon:({color}) =>
            <Icon name="bed" color={color} size={26}/>}}/>
            <Tab.Screen name="ProfileScreen" component={ProfileScreen}
            options={{
                tabBarLabel:'Profile',
                tarBarColor:COLORS.theme,
                tabBarIcon:({color}) =>
            <FontAwesome name="user" color={color} size={26}/>}}/>
        </Tab.Navigator>
    )
}

export default TabScreen

const styles = StyleSheet.create({})
