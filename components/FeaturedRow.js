import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

export default function FeaturedRow({ title, description, id }) {
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    client.fetch(
      `
   *[_type == "featured" && _id == $id] {
     ...,
     restaurants[]->{
       ...,
       dishes[]->,
       type->{
         name
       }
     }
   }[0]`,
      { id }
    ).then(data => {
      setRestaurants(data?.restaurants)
    })
  }, [id]);

  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`text-lg font-bold`}>{title}</Text>
        <Text style={tw` text-sm font-bold text-red-500`}>See All</Text>
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        style={tw`pt-4`}
      >
        {restaurants.map((item) => (
          <RestaurantCard
          key={item._id}
            id={item._id}
            imageUrl={item.image}
            title={item.name}
            rating={item.rating}
            genre={item.type?.name}
            address={item.address}
            shortDescription={item.short_description}
            dishes={item.dishes}
            longitude={item.longitude}
            latitude={item.latitude}
          />
        ))}

        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 15,
  },
});
