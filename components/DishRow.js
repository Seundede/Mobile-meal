import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

export default function DishRow({ key, id, name, description, price, image }) {
    const [isPressed, setIsPressed] = useState(false)
  return (
    <>
      <TouchableOpacity
        style={tw`px-4 bg-white border border-gray-200 py-2 `}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg mb-1`}>{name}</Text>
            <Text style={tw`text-gray-400`}>{description}</Text>
            <Text style={tw`mt-2 text-gray-600`}>₦{price}</Text>
          </View>
          <View>
            <Image
              style={tw`h-20 w-20 p-4 bg-gray-300 border-gray-200 border-2 mt-3`}
              source={{
                uri: urlFor(image).url(),
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View style={tw`bg-white px-4 pt-2` }>
          <View style={tw`flex-row items-center pb-3`}>
            <TouchableOpacity>
              <MinusCircleIcon size={40} color="black" />
            </TouchableOpacity>
            <Text style={tw`mx-3 text-lg`}>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon size={40} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
