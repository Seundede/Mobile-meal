import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { useSelector } from 'react-redux';
import { totalPrice } from '../slices/basketSlice';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";


const BasketBottom = () => {
    const count = useSelector((state) => state.basket.items);
    const basketTotal = useSelector(totalPrice);
    const navigation = useNavigation ()
  return (
    <View style={tw`absolute w-full bottom-10 z-50`}>
      <TouchableOpacity
        style={tw`mx-5 p-4 rounded-lg flex-row bg-[#008080] items-center justify-between`}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={tw`text-lg text-white font-extrabold py-1 px-2`}>
          [{count.length}]
        </Text>
        <Text style={tw`text-lg text-white font-extrabold flex-1 mx-1`}>
          View Basket
        </Text>
        <Text style={tw`text-lg text-white font-extrabold`}>
          ₦{basketTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BasketBottom