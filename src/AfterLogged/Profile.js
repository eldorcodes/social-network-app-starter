import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Alert, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import '../firebase/config';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation, NavigationAction, navigate, navigation } from '@react-navigation/native';
import HomePageScreen from './Home';
import edit from '../hidden/Edit';
import bot from '../../assets/bot.png';


function Profile({ navigation }) {

    function logUserOut(){
        signOut(getAuth())

        .then(()=>{
            console.log('Logged out');
        }).catch((e)=> Alert.alert(e.message));
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.profileWrapper}>
            <View style={styles.circle}>
            <Image  source={bot} style={{
                width: 100,
                height: 100,
                
                
            }}></Image>
            </View>
            <Text style={styles.friends}>Friends</Text>
            <Text style={styles.postcount}>125</Text>
            <Text style={styles.friendcount}>10,000</Text>
            <Text style={styles.posts}>Posts</Text>
            <Text style={styles.username}>@akmal_azizkulov</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Edit') } style={styles.editprofile}>
                <Text style={styles.editprofiletext}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logUserOut} style={styles.logout}>
                <Text style={styles.logouttext}>Log out</Text>
            </TouchableOpacity>
        </View>
      </View>

    );
  }
export default Profile;


const styles = StyleSheet.create({
    profileWrapper:{
        backgroundColor: '#FFF',
        height: 250,
        width: '100%',
        position: 'absolute'

    },
    circle:{
        height: 100,
        width: 100,
        borderRadius: 70,
        marginLeft: 15,
        marginTop: 25,
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 0.2,
        borderColor:'#E8EBEE'
    },
    friends:{
        position: 'absolute',
        marginLeft: 280,

        marginTop: 45,
        fontSize: 18
    },
    username:{
        position: 'absolute',
        marginLeft: 15,
        marginTop: 138,
    },
    posts:{
        position: 'absolute',
        marginLeft: 180,

        marginTop: 45,
        fontSize: 18
    },
    editprofile:{
        position: 'absolute',
        marginTop: 190,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 150,
        backgroundColor: '#72a9e0',
        marginLeft: 30,
        borderRadius: 20,
    },
    logout:{
        position: 'absolute',
        marginTop: 190,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 150,
        backgroundColor: '#72a9e0',
        marginLeft: 200,
        borderRadius: 20,
        
    },
    postcount:{
        position: 'absolute',
        marginLeft: 192,

        marginTop: 70,
        fontSize: 20

    },
    friendcount:{
        position: 'absolute',
        marginLeft: 280,
        marginTop: 70,
        fontSize: 20
    },
    editprofiletext:{
        color:'#fff',
        fontStyle: 'italic',
        fontSize: 15
    },
    logouttext:{
        color:'#fff',
        fontStyle: 'italic',
        fontSize: 15
    }
})

