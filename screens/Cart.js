import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { removeFromBasket, totalPrice } from "../slices/basketSlice";

const Cart = () => {
  const totalCheckoutPrice = useSelector(totalPrice);
  const items = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [categorizedItems, setCategorizedItems] = useState([]);

  useEffect(() => {
    const data = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setCategorizedItems(data);
  }, [items]);

  return (
    <SafeAreaView style={tw`relative h-full w-full`}>
      <View style={tw` m-4  py-2 px-5`}>
        <Text style={tw`font-bold text-xl `}>Cart</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute right-2 -top-1`}
        >
          <XCircleIcon color="black" height={40} width={40} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {Object.entries(categorizedItems).map(([key, items]) => (
          <View key={key} style={tw` flex-row items-center py-2 px-5`}>
            <Text style={tw`mx-3 text-emerald-600`}>{items.length} x</Text>
            <Image
              source={{
                uri: urlFor(items[0]?.image).url(),
              }}
              style={tw`h-12 w-12 rounded-full mr-3`}
            />
            <Text style={tw`flex-1`}> {items[0]?.name}</Text>
            <Text style={tw`mx-3`}>₦ {items[0]?.price}</Text>
            <TouchableOpacity>
              <Text
                onPress={() => dispatch(removeFromBasket({ id: key }))}
                style={tw`text-sm text-emerald-600`}
              >
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={tw`absolute bottom-5 w-full mx-2 p-6`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-gray-400`}>Subtotal</Text>
          <Text style={tw`text-gray-400`}> ₦ {totalCheckoutPrice}</Text>
        </View>
        <View style={tw`flex-row justify-between my-4`}>
          <Text style={tw`text-gray-400`}>Delivery Fee</Text>
          <Text style={tw`text-gray-400`}> ₦ 1000</Text>
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text>Order Total</Text>
          <Text style={tw`font-extrabold`}>
            ₦
            {totalCheckoutPrice == 0
              ? totalCheckoutPrice
              : totalCheckoutPrice + 1000}
          </Text>
        </View>
        <TouchableOpacity style={tw`rounded-lg p-4 bg-[#008080] mt-4`}>
          <Text
            style={tw`text-white text-center font-bold text-lg`}
            onPress={() => navigation.navigate("Checkout")}
          >
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
