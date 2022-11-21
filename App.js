import { View, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
import GuestScreen from './src/routes/GuestScreen';
import HomeScreen  from './src/routes/HomeScreen';
import './src/firebase/config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  let auth = getAuth()


   useEffect(() => {
   let findOut = onAuthStateChanged(auth,(user)=>{
    if(user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  })
  return findOut
 },[auth])

  return <>
  {isLoggedIn ? <HomeScreen/> : <GuestScreen/>}
  
  </>
}