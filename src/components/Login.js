import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import '../firebase/config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';
import AppHome from '../routes/HomeScreen'; 


export default function Login(props) {
    const {navigation} = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function logUserIn(){
      signInWithEmailAndPassword(getAuth(), email, password)
      .catch(e => Alert.alert(e.message))
    }

    return (
      <View style={styles.container }>
        <TextInput style={styles.input} placeholder='Email' onChangeText={(text)=>setEmail(text)}></TextInput>
        <TextInput style={styles.input} placeholder='Password' onChangeText={(text)=>setPassword(text)}></TextInput>
        <TouchableOpacity>
        <Text style={styles.forgot} onPress ={()=> navigation.navigate('Forgot')}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logUserIn} style={styles.button}>
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <Text onPress ={()=> navigation.navigate('Signup')} style={styles.link}>Need an account?</Text>
      </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    forgot:{
      
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
    link:{
      marginTop: 10,
    }
})



