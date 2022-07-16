import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import tw from "twrnc";
import {
  ArrowLeftIcon,
  StarIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketBottom from "../components/BasketBottom";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";

const Restaurant = ({ navigation }) => {
  const {
    params: {
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
    },
  } = useRoute();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, []);

  return (
    <>
      {items.length > 0 && <BasketBottom />}

      <ScrollView style={tw`bg-white`}>
        <View style={tw`relative`}>
          <Image
            source={{
              uri: urlFor(imageUrl).url(),
            }}
            style={tw`w-full h-55 bg-gray-300 p-4`}
          />
          <TouchableOpacity
            style={tw`top-13 left-5 absolute p-2 bg-gray-100 rounded-full`}
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={tw`bg-white`}>
          <View style={tw`px-4 pt-4`}>
            <Text style={tw`text-3xl font-bold`}>{title}</Text>
            <View style={tw`flex-row my-1`}>
              <View style={tw`flex-row items-center `}>
                <StarIcon color="#008080" opacity={0.5} size={22} />
                <Text style={tw`text-xs text-gray-500 ml-1 mr-3`}>
                  <Text style={tw`text-[#008080] `}>{rating}</Text>
                </Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <LocationMarkerIcon color="gray" opacity={0.4} size={20} />
                <Text style={tw`text-xs text-gray-500 ml-1`}>
                  <Text style={tw`text-gray-600 `}>Nearby </Text>
                  {address}
                </Text>
              </View>
            </View>
            <Text style={tw`text-gray-500 mt-3 pb-4`}>{shortDescription}</Text>
          </View>
          <TouchableOpacity
            style={tw`flex-row items-center p-4 border-2 border-gray-300`}
            onPress={() => navigation.navigate("Allergy")}
          >
            <QuestionMarkCircleIcon color="gray" opacity={0.5} size={22} />
            <Text style={tw`flex-1 px-2 text-sm font-bold`}>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="black" />
          </TouchableOpacity>
          <View style={tw`pb-36`}>
            <Text style={tw`px-4 pt-6 pb-3 font-bold text-xl bg-gray-100`}>
              Menu
            </Text>
            {dishes.map((item) => (
              <DishRow
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.short_description}
                price={item.price}
                image={item.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Restaurant;
