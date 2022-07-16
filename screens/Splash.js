import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import * as Animatable from "react-native-animatable";
import tw from "twrnc";
import { ArrowRightIcon } from "react-native-heroicons/solid";

export default function Splash({navigation}) {
  return (
    <View style={tw`w-full h-full relative`}>
      <Animatable.Image
        source={require("../assets/splash_image.jpg")}
        animation="slideInUp"
        iterationCount={1}
        style={tw`h-full w-full`}
      />
      <Animatable.View
        animation="slideInDown"
        iterationCount={1}
        style={tw`z-50 absolute inset-x-0 bottom-0 h-16 w-full`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Signin")}
          style={tw`absolute bottom-8 right-8  bg-[#008080] rounded-lg flex-row items-center p-5`}
        >
          <Text style={tw`text-white text-lg  tracking-wide pr-2`}>
            Get Started
          </Text>
          <ArrowRightIcon color="white" />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}