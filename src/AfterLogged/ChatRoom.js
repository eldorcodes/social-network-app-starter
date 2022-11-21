import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, style, StyleSheet } from 'react-native'
import React from 'react';
import bot from '../../assets/bot.png';


export default function ChatRoom() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View  style={styles.usercontainer}>
            
            <View style={styles.userbox}>
                <View style={styles.profilepic}>
                    <Image source ={bot} style={styles.image}></Image>
                </View>
                <TouchableOpacity style={styles.usernameclick}>
                <Text style={styles.username}>
                  @Akmal2
                </Text>
                </TouchableOpacity>
                
            </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
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
      flexDirection: 'row'
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

  image:{
      height: 50,
      width: 50,
  },
  username:{
    marginLeft: 20,
    marginTop: 30,
  },
  usernameclick:{
    width: '100%'
  }
  
})