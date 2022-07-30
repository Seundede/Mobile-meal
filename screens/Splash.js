import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import tw from "twrnc";
import { ArrowRightIcon } from "react-native-heroicons/solid";

export default function Splash({ navigation }) {
  return (
    <View style={tw`w-full h-full relative bg-black`}>
      <Animatable.Image
        source={require("../assets/splash_image.jpg")}
        animation="slideInUp"
        iterationCount={1}
        style={tw`w-full h-full`}
      />
      <Animatable.View
        animation="slideInDown"
        iterationCount={1}
        style={tw`z-50 absolute inset-x-0 bottom-0 h-16 w-full`}
      >
        <View style={tw`absolute bottom-38 right-8 ml-10`}>
          <Text style={tw`text-white font-extrabold text-2xl mb-2 text-black`}>
            Fast delivery at your doorstep
          </Text>
          <Text style={tw`text-white font-bold text-lg text-black`}>
            Home delivery and online reservation system for restaurants and cafe.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signin")}
          style={tw`absolute bottom-9 right-8  bg-[#008080] rounded-lg flex-row items-center p-3`}
        >
          <Text style={tw`text-white text-lg  tracking-wide pr-2 text-black`}>
            Let's Explore
          </Text>
          <ArrowRightIcon color="black" />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
