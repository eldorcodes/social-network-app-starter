import  React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, ImageBackground, Alert,Platform } from 'react-native';
import '../firebase/config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

let date = new Date().toString()

export default function Signup(props) {
    const {navigation} = props;
    
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const  profile = () =>{
      if (!username || !email || !password) {
        Alert.alert('Please fill out your information')
      }else {
        createUserWithEmailAndPassword(getAuth(), email,password)
        .then(()=>{
          
          set(ref(getDatabase(), `users/${getAuth().currentUser.uid}`),{
            username,
            email,
            date:date,
            profilePicture:''
        
          })
          Alert.alert('Account created!')
        }).catch((e)=> Alert.alert(e.message))
      }
    }

    return (
      <View style={styles.container }>
    
        <Text style={styles.title}>ChatUz

        </Text>
        <TextInput 
        style={styles.input} 
        placeholder='Username'
        value = {username}
        onChangeText={text => setUsername(text)}
        ></TextInput>
        <TextInput 
        style={styles.input} 
        placeholder='Email'
        value = {email}
        onChangeText={text => setEmail(text)}
        ></TextInput>
        <TextInput 
        style={styles.input} 
        placeholder='Password'
        value = {password}
        onChangeText={text => setPassword(text)}
        
        ></TextInput>
        <TouchableOpacity onPress={profile} style={styles.button} >
            <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.ortxt}>or</Text>
        <TouchableOpacity style={styles.button} onPress ={()=> navigation.navigate('Login')}>
        <Text  style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    input:{
        width: 300,
        height: 40,
        borderRadius: 8,
        margin: 5,
        padding: 5,
        backgroundColor: '#fff'
    },
    button:{
      width: 300,
      height: 35,
      borderWidth:0,
      borderRadius: 10,
      marginTop: 20,
      padding: 5,
      backgroundColor: '#6495ed',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text:{
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold'
    },
    title:{
      marginBottom: 40,
      fontSize: 50,
      color: '#6495ed'
    },
    ortxt:{
      padding: 5

    }
})


