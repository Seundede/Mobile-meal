import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/solid";

const User = ({ setAppState }) => {

  const navigation = useNavigation();

  const signnOut = () => {
    signOut(auth).then(() => {
      setAppState(false);
    });
  };
 
  return (
    <SafeAreaView style={tw`m-5`}>
      <Text style={tw`text-center text-xl font-bold my-5`}>Mobile Meal</Text>

      <View style={tw`bg-white mb-11`}>
        <TouchableOpacity
          style={tw`flex-row items-center p-4 border-b border-gray-300`}
          onPress={() => navigation.navigate("Allergy")}
        >
          <QuestionMarkCircleIcon color="gray" opacity={0.5} size={22} />
          <Text style={tw`flex-1 px-2 text-sm font-bold`}>
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center p-4 border-b border-gray-300`}
        >
          <QuestionMarkCircleIcon color="gray" opacity={0.5} size={22} />
          <Text style={tw`flex-1 px-2 text-sm font-bold`}>
            Payments & Refunds
          </Text>
          <ChevronRightIcon color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row items-center p-4 border-b border-gray-300`}
        >
          <QuestionMarkCircleIcon color="gray" opacity={0.5} size={22} />
          <Text style={tw`flex-1 px-2 text-sm font-bold`}>Membership</Text>
          <ChevronRightIcon color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-row items-center p-4 border-gray-300`}>
          <QuestionMarkCircleIcon color="gray" opacity={0.5} size={22} />
          <Text style={tw`flex-1 px-2 text-sm font-bold`}>Contact Us</Text>
          <ChevronRightIcon color="black" />
        </TouchableOpacity>
      </View>
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
};

export default User;
