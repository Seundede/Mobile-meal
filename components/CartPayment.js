import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardField } from "@stripe/stripe-react-native";

export default function CartPayment({ onPaymentSuccess, onPaymentCancel }) {
  const [name, setName] = useState("");

  return (
    <SafeAreaView style={tw`w-full h-full flex-1 items-center justify-center`}>
      <View style={tw`bg-white h-30 w-80 rounded-lg mb-10`}>
        <TextInput
          autoCapitalize="none"
          placeholder="Name on card"
          style={tw`h-15 p-3 border-b border-gray-400`}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <CardField
          postalCodeEnabled={true}
          placeholders={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={{
            backgroundColor: "#FFFFFF",
            textColor: "#000000",
          }}
          style={{
            width: "100%",
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            console.log("cardDetails", cardDetails);
          }}
          onFocus={(focusedField) => {
            console.log("focusField", focusedField);
          }}
        />
      </View>

      <TouchableOpacity
        style={tw`w-80 mt-4 bg-[#008080] rounded-lg`}
        onPress={onPaymentSuccess}
      >
        <Text style={tw`text-center py-4 text-white`}>Pay</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`w-80 mt-4 bg-white rounded-lg border-2 border-[#008080]`}
        onPress={onPaymentCancel}
      >
        <Text style={tw`text-center py-4 text-[#008080]`}>Cancel Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
