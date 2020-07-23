import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import EditScreen from '../screens/EditScreen'
import SettingScreen from '../screens/SettingScreen'
import Mci from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import SearchScreen from '../screens/SearchScreen';
import DirectMessage from '../screens/DirectMessage';
import GenreScreen from '../screens/GenreScreen'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeTabsNavigator =()=>{
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Mci name="home" size={24} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: () => <Mci name="account-search" size={24} />,
          }}
        />
        <Tab.Screen
          name="DirectMessage"
          component={DirectMessage}
          options={{
            tabBarIcon: () => <AntDesign name="message1" size={24} />,
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarIcon: () => <AntDesign name="setting" size={24} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => <FontAwesome name="user-circle" size={24} />,
          }}
        />
      </Tab.Navigator>
    );
}

const AppNavigator = ()=>{

    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeTabsNavigator}
          options={{
            headerStyle: {
              backgroundColor: '#efb1ff',
            },
            headerTintColor: 'black',
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#e534eb',
            },
            headerTintColor: 'white',
          }}
        />
        <Drawer.Screen
          name="Edit"
          component={EditScreen}
          options={{
            title: 'Edit',
            headerStyle: {
              backgroundColor: '#e534eb',
            },
            headerTintColor: 'white',
          }}
        />
        <Drawer.Screen
          name="Genre"
          component={GenreScreen}
          options={{
            title: 'genre',
            headerStyle: {
              backgroundColor: '#e534eb',
            },
            headerTintColor: 'white',
          }}
        />
      </Drawer.Navigator>
    );

}

export default AppNavigator
