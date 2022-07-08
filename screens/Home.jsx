import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";



export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
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
        <View style={tw`flex-row bg-gray-200 p-2 mr-2 flex-1`}>
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Search for a restuarant"
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
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
  },
});