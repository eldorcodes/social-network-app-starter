import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import '../firebase/config';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';


export default function Forgot(props) {


    const {navigation} = props;
    const [email, setEmail] = useState('');

    function link(){
      sendPasswordResetEmail(getAuth(), email)
      .then (() => Alert.alert(`Link was sent to ${email}`))
      .catch(e => Alert.alert(e.message));
    } 

    return (
      <View style={styles.container }>
        <Text style={styles.title}>Enter an email that is associated with your account.</Text>
        <TextInput style={styles.input} placeholder='Email' onChangeText={(text)=>setEmail(text)}></TextInput>

        <TouchableOpacity onPress = {link} style={styles.button}>
            <Text style={styles.text}>Send</Text>
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
    title:{
        marginVertical: 20,
        marginLeft: 25,
        marginRight: 30,
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