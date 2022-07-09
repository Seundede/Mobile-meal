import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ title, description, id }) {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`text-lg font-bold`}>{title}</Text>
        <ArrowRightIcon color="gray" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>

      <ScrollView
      horizontal
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        style={tw`pt-4`}
      >
        <RestaurantCard
          id="123"
          imageUrl="https://images.unsplash.com/photo-1542295856-082da537cda4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb2QlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          title="sjksks"
          rating="5.0"
          genre="sjksks"
          address="sjksks"
          shortDescription="sjksks"
          dishes="sjksks"
          longitude="sjksks"
          latitude="sjksks"
        />
        <RestaurantCard
          id="123"
          imageUrl="https://images.unsplash.com/photo-1542295856-082da537cda4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb2QlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          title="sjksks"
          rating="5.0"
          genre="sjksks"
          address="sjksks"
          shortDescription="sjksks"
          dishes="sjksks"
          longitude="sjksks"
          latitude="sjksks"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 15,
  },
});
