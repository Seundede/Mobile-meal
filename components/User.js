import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { auth } from '../firebase';
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from 'firebase/auth';
import tw from "twrnc";
import Signin from '../screens/Signin';
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const User = () => {
  const navigation = useNavigation()
onAuthStateChanged(auth, (user) => {
  if (user) {
 
    const uid = user.uid;
   console.log(uid, 1);
    console.log(user, 2);
  } else {
    // User is signed out
    // ...
  }
});
  const signnOut = () => {
 signOut(auth)
   .then(() => {

  navigation.navigate("Splash" );
   })
   
  };
  
  return (
    <SafeAreaView style={tw`m-5`}>
      <TouchableOpacity
        style={tw`rounded-lg p-4 bg-[#008080] mt-4`}
        onPress={signnOut}
      >
        <Text style={tw`text-white text-center font-bold text-lg`}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default User