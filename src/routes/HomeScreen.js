import * as React from 'react';
import {View, Text, Image, style, StyleSheet,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../AfterLogged/Profile';
import Home from '../AfterLogged/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Users from '../AfterLogged/Users';
import Edit from '../hidden/Edit';
import ChatRoom from '../AfterLogged/ChatRoom';
import UserProfile from '../AfterLogged/UserProfile';
import Comment from '../hidden/Comment';


const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Account" component={Profile} 
      options={{
        headerShown: true
      }}/>
      <ProfileStack.Screen name="Edit" component={Edit}
      options={{
        headerShown: true
      }}/>
    </ProfileStack.Navigator>
  );
}
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home}
      options={{
        headerShown: true
      }} />
      <HomeStack.Screen name="UserProfile" component={UserProfile} />
      <HomeStack.Screen name="Comments" component={Comment}/>
    </HomeStack.Navigator>
  );
}
const ChatStack = createNativeStackNavigator();
function ChatStackScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="Chat" component={ChatRoom}
      options={{
        headerShown: true
      }} />
    </ChatStack.Navigator>
  );
}
const UserStack = createNativeStackNavigator();
function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="Users" component={Users} options={{
        headerShown: true
      }} />
      <HomeStack.Screen name="UserProfile" component={UserProfile} />
    </UserStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer><Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Posts" component={HomeStackScreen} options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 35,
            height: 35}}
            source={require('../../assets/homepage.png')                  
            }/>
       ),             
      }}/>
    <Tab.Screen name="People" component={UserStackScreen}
    options={{
      tabBarIcon: ({ color }) => (
        <Image
          style={{ width: 35,
          height: 35}}
          source={require('../../assets/contacts.png')                  
          }/>
     ),             
    }}/>
    <Tab.Screen name="Chat Room" component={ChatStackScreen}  options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 35,
            height: 35}}
            source={require('../../assets/name.png')                  
            }/>
       ),             
      }} />
    <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
        headerShown: false,
        
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 35,
            height: 35}}
            source={require('../../assets/name.png')                  
            }/>
       ),             
      }}/>
  </Tab.Navigator></NavigationContainer>
  );
}