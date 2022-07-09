import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

export default function CategoryCard({ imageUrl, title }) {
  return (
    <TouchableOpacity style={tw`mr-2 relative`}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={tw`h-20 w-20 rounded`}
      />
      <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>{title}</Text>
    </TouchableOpacity>
  );
}
