import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import React, { useState, useEffect } from "react";
import client, { urlFor } from "../sanity";
import tw from "twrnc";

export default function Categories() {

  const [category, setCategory] = useState([]);
  
  useEffect(() => {
    client.fetch(` *[_type == "category"] `).then((data) => {
      setCategory(data);
    });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      {category.map((item) => (
        <TouchableOpacity style={tw`mr-2 relative`}>
          <Image
            source={{
              uri: urlFor(item.image).url(),
            }}
            style={tw`h-25 w-30 rounded-xl`}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop:10,
    paddingHorizontal: 15,
  },
});