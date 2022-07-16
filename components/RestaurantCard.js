import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`bg-white shadow mr-4`}
      onPress={() => {
        navigation.navigate("Restaurant", {
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
        });
      }}
    >
      <Image
        source={{
          uri: urlFor(imageUrl).url(),
        }}
        style={tw`h-36 w-64 rounded-sm`}
      />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
        <View style={tw`flex-row items-center`}>
          <StarIcon color="#008080" />
          <Text style={tw`text-xs text-gray-500 ml-1`}>
            <Text style={tw`text-[#008080]`}>{rating}</Text>. {genre}
          </Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text style={tw`text-xs text-gray-500 ml-1`}>
            {" "}
            Nearby . {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
