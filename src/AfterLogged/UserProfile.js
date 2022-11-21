import { View, Text, StyleSheet,TouchableOpacity, SafeAreaView } from 'react-native'
import React , {useState, useEffect} from 'react';
import { onValue, ref, getDatabase } from 'firebase/database';

export default function UserProfile({navigation}) {
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
    <SafeAreaView>
        <View>
        {users.map((user, index) => (
            <View style={styles.profileWrapper}
            key={index}>
            <View style={styles.circle}/>
            <Text style={styles.friends}>Friends</Text>
            <Text style={styles.postcount}>125</Text>
            <Text style={styles.friendcount}>10,000</Text>
            <Text style={styles.posts}>Posts</Text>
            <Text style={styles.username}>{user.username}</Text>
            <TouchableOpacity  style={styles.editprofile}>
                <Text style={styles.addusertext}>Add Friend</Text>
            </TouchableOpacity>

        </View>
            ))}
        </View>
    </SafeAreaView>
  )
}
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
        backgroundColor: '#8aaccf',
        marginLeft: 15,
        marginTop: 25,
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
        marginTop: 130,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 150,
        backgroundColor: '#72a9e0',
        marginLeft: 220,
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
    addusertext:{
        color:'#fff',
        fontStyle: 'italic',
        fontSize: 15
    },
})
