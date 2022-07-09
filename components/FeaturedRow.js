import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from 'react'
import tw from "twrnc";
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from "./RestaurantCard";


export default function FeaturedRow({ title, description, id}) {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`text-lg font-bold`}>{title}</Text>
        <ArrowRightIcon color="gray" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>

      <ScrollView contentContainerStyle={styles.contentContainer} showsHorizontalScrollIndicator={false} style={tw`pt-4`}>

          <RestaurantCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {

    paddingHorizontal: 15,
  },
});