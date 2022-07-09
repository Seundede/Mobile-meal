import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { SafeAreaView } from "react-native-safe-area-context";
import client from "../sanity";

export default function Home() {
  const navigation = useNavigation();
  const [featuredCategory, setFeaturedCategory] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
   *[_type == "featured"] {
     ...,
     restaurants[]->{
       ...,
       dishes[]->
     }
   }`
      )
      .then((data) => {
        setFeaturedCategory(data);
      });
  }, []);


  return (
    <SafeAreaView style={tw`bg-white pt-2`}>
      {/**Header */}
      <View style={tw`flex-row pb-3 mx-4 items-center`}>
        <Image
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          source={{
            uri: "https://images.unsplash.com/photo-1542295856-082da537cda4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb2QlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
          }}
        />
        <View style={tw`ml-2 flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs `}>Deliver Now!</Text>
          <Text style={tw`font-bold text-lg`}>
            Current Location
            <ChevronDownIcon size={20} color="gray" />
          </Text>
        </View>
        <UserIcon size={35} color="gray" />
      </View>

      {/**Search box */}
      <View style={tw`items-center flex-row pb-3 mx-4`}>
        <View style={tw`flex-row bg-gray-200 p-2 mr-2 flex-1 items-center`}>
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="What do you want to eat?"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="gray" />
      </View>

      {/**Main */}
      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={tw`mx-4 flex-row items-center justify-between pt-3`}>
          <Text style={tw` text-sm font-bold`}>Category</Text>
          <Text style={tw` text-sm font-bold text-red-500`}>See All</Text>
        </View>

        <Categories />
        {/**Featured row */}
        {featuredCategory?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
           title={category.name}
           description={category.short_description}
          />
        ))}
        
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
  },
});
