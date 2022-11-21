import { View, Text, ScrollView, FlatList, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import { onValue, ref, getDatabase } from 'firebase/database';
import userlogo from '../../assets/user-icon.png';
import bot from '../../assets/bot.png';
import { SearchBar } from 'react-native-screens';

export default function Users({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        if(loading){
            onValue(ref(getDatabase(),`users`), (users)=>{
                let usersArray = []
                users.forEach((user)=>{
                    usersArray.push(user.val())
                })
                setUsers(usersArray)
            })
            setLoading(false)
        }
    },[loading])
  return (
    <SafeAreaView style={styles.container}>
       
       
       
       
        <ScrollView>
        
        {users.map((user, index) => (
            
          
          <View  style={styles.usercontainer}
            key={index}>
            <View style={styles.userbox}>
                <View style={styles.profilepic}>
                    <Image source ={user.profilePicture ? {uri:user.profilePicture}:bot} style={styles.image}></Image>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('UserProfile')}style={styles.usertext}>
                <Text>{user.username}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.follow}>
                    <Text style={styles.friendtext}>Request</Text>
                </TouchableOpacity>
                </View>
            </View>
        ))}
        </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    usercontainer:{
        paddingBottom: 1,
        flexDirection: 'row',
    },
    userbox:{
        height: 70,
        width: '100%',
        backgroundColor: '#ffff',
    },
    follow:{
        position: 'absolute',
        marginLeft: 310,
        marginTop: 15,
        backgroundColor: '#94C0E5',
        height: 30,
        width: 70,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    usertext:{
        position:'absolute',
        marginLeft: 80,
        marginTop: 25,
        height: 45,
        width: 220,

    },
    profilepic:{
        marginTop: 10,
        width: 50,
        height: 50,
        marginLeft: 10,
        borderRadius: 10,
    },
    followarea:{
        backgroundColor:'#94C0E5'

    },
    image:{
        height: 50,
        width: 50,
    },
    searchView:{
        height: 50,
        width: '100%'
    }
    
})