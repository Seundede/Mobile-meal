import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {/**Header */}
      <View>
        <Image
        style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          source={{
            uri: "https://images.unsplash.com/photo-1542295856-082da537cda4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb2QlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
          }}
        />
        <View></View>
      </View>
    </SafeAreaView>
  );
}
