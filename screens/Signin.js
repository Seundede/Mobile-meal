import { View, TextInput, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowLeftIcon,
  InboxIcon,
  LockClosedIcon,
} from "react-native-heroicons/solid";
import tw from "twrnc";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,

} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import Home from "./Home";
import * as Animatable from "react-native-animatable";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const signIn =  () => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
        }
      );
     
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    } finally {
      return <Home />;
    }
  };

  const signUp = () => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
        
        }
      );
     
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    } finally {
      return <Home />;
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center w-full `}>
      <TouchableOpacity
        style={tw`absolute top-12 left-5 bg-white rounded-full p-4`}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon color="#008080" />
      </TouchableOpacity>
      <Animatable.Image
        source={require("../assets/signInImage.jpeg")}
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={tw`h-25 w-25 mb-5`}
      />

      <View
        style={tw`w-80 bg-white py-3 mt-3 rounded-lg flex-row items-center`}
      >
        <InboxIcon color="gray" style={tw`mx-2`} />
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCorrect={false}
        />
      </View>
      <View
        style={tw`w-80 bg-white py-3 mt-3 rounded-lg flex-row items-center`}
      >
        <LockClosedIcon color="gray" style={tw`mx-2`} />
        <TextInput
          autoCapitalize="none"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={tw`w-80 mt-4 bg-[#008080] rounded-lg`}
        onPress={signIn}
      >
        <Text style={tw`text-center py-4 text-white`}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`w-80 mt-4 bg-white rounded-lg border-2 border-[#008080]`}
        onPress={signUp}
      >
        <Text style={tw`text-center py-4 text-[#008080]`}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
