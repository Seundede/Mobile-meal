import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";


export default function RestaurantCard({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  longitude,
  latitude,
}) {
  return (
    <TouchableOpacity style={tw`bg-white shadow mr-4`}>
      <Image
        source={{
          uri: urlFor(imageUrl).url(),
        }}
        style={tw`h-36 w-64 rounded-sm`}
      />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
        <View style={tw`flex-row items-center`}>
          <StarIcon color="green" />
          <Text style={tw`text-xs text-gray-500 ml-1`}>
            <Text style={tw`text-green-600`}>{rating}</Text>. {genre}
          </Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text style={tw`text-xs text-gray-500 ml-1`}> Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
