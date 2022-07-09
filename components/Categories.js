import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import client, { urlFor } from "../sanity";


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
    {category.map(item => (
      <CategoryCard
        key={item._id}
        imageUrl={urlFor(item.image).url()}
        title={item.name}
      />
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