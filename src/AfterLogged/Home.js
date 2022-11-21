import { View, Text, SafeAreaView, ScrollView, style, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import { useNavigation, NavigationAction, navigate, navigation } from '@react-navigation/native';
import image from '../../assets/person.png';
import bot from '../../assets/bot.png';
import like from '../../assets/thumb-up.png';
import comment from '../../assets/comment.png';
import post from '../../assets/scene.jpeg';
import { onValue, ref, getDatabase } from 'firebase/database';

export default function HomePageScreen({ navigation }) {
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
          
        <ScrollView horizontal={true} style={styles.storytab}>
          <View style={styles.storyview}>
              <View style={styles.usercircle}>
                <Image source={image} style={{
                  width: 50,
                  height: 50
                }}></Image>
              </View>
          </View>
        </ScrollView>
        
        
        <ScrollView>
          {users.map((user, index)=>(

            <View style={styles.postWrapper} key={index}>
                <View style={styles.profileview}>
                  <Image source={bot} style={styles.postprofile}></Image>
                  <TouchableOpacity onPress={()=> navigation.navigate('UserProfile')} style={styles.usernamewrapper}  >
                    <Text style={styles.usernametext}>{user.username}</Text>
                    </TouchableOpacity>
                </View>

                <Image source={post} style={
                  {
                    width: '100%',
                    height: 335,
                  }
                }>

                </Image>


                <View style={styles.posttab}>
                  <TouchableOpacity style={styles.likeWrapper}><Image source={like} style={{
                    width: 40,
                    height: 40,
                    marginLeft: 5,
                  }}></Image>
                  </TouchableOpacity>
                  <Text style={{
                    marginLeft: 15,
                    marginTop: 15,
                    fontSize: 20
                  }}>0</Text>
                  <TouchableOpacity onPress={()=>navigation.navigate('Comments')} style={styles.commentWrapper}>
                    <Image source={comment} style={{
                      height: 40,
                      width: 40,
                      marginLeft: 5
                    }}></Image>
                  </TouchableOpacity>
                  <Text style={{
                    marginLeft: 15,
                    marginTop: 15,
                    fontSize: 20
                  }}>0</Text>
                  
                  
                </View>
          </View>

          ))}
          
        </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container:{
      backgroundColor: '#E8EBEE'
    },
    storyview:{
      backgroundColor: '#EAECEE',
      height: 80,
      width: '100%',
    },
    storytab:{
      backgroundColor: '#EAECEE',
    },
    usercircle:{
      backgroundColor: '#fff',
      height: 60,
      width: 60,
      marginTop: 7,
      marginLeft: 5,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.2,
      borderColor:'#E8EBEE'
    },
    postWrapper:{
      height: 450,
      width: '100%',
      backgroundColor: '#fff',
      marginTop: 1,
    },
    profileview:{
      flexDirection: 'row',
      backgroundColor: '#fff',
      height: 65,
      width: '100%'
    },
    postprofile:{
      backgroundColor: '#ffff',
      height: 50,
      width: 50,
      marginTop: 5,
      marginLeft: 5,
      borderRadius: 10,
      
      justifyContent: 'center',
      alignContent: 'center',
    },
    usernametext:{
      marginLeft: 20,
      marginTop: 20,
      fontSize: 20
      
    },
    usernamewrapper:{
      height: 65,
      width: 335
    },
    posttab:{
      height: 50,
      width: '100%',
      backgroundColor: '#ffff',
      flexDirection: 'row'
    },
    likeWrapper:{
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: 5,
      width: 40,
      height: 45,

    },
    commentWrapper:{
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: 5,
      width: 40,
      height: 45,

      marginLeft: 50
    }
  })