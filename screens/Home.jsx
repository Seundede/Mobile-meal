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
import { SearchIcon, UserIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { SafeAreaView } from "react-native-safe-area-context";
import client from "../sanity";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function Home() {
  const [featuredCategory, setFeaturedCategory] = useState([]);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
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
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setEmail(user.email);
    }
  });
  return (
    <SafeAreaView style={tw`bg-white py-2`}>
      {/**Header */}
      <View style={tw`flex-row pb-3 mx-4 items-center`}>
        <Image
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          source={{
            uri: "https://images.unsplash.com/photo-1542295856-082da537cda4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb2QlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
          }}
        />
        <View style={tw`ml-2 flex-1`}>
          <Text style={tw`font-bold text-lg`}>Welcome</Text>
          <Text style={tw`font-bold text-gray-400 text-xs `}>{email}</Text>
        </View>
        <UserIcon
          size={35}
          color="gray"
          onPress={() => navigation.navigate("BottomTab", { screen: "User" })}
        />
      </View>

      {/**Search box */}
      <View style={tw`items-center flex-row pb-3 mx-4`}>
        <View style={tw`flex-row bg-gray-200 p-2 mr-2 flex-1 items-center rounded-lg`}>
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="What do you want to eat?"
            keyboardType="default"
          />
        </View>
      </View>

      {/**Main */}
      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={tw` text-lg font-bold mx-4 pt-3`}>Category</Text>

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
