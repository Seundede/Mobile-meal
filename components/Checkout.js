import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardField } from "@stripe/stripe-react-native";
import { useDispatch } from "react-redux";

const Checkout = ({ navigation }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleCancelPayment = () => {
    Alert.alert("Alert", "Payment cancelled by user", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.navigate("Home") },
    ]);
  };

  const initPayment = () => {
    Alert.alert("Alert", "Payment made", [
      {
        text: "OK",
        onPress: () => {
          navigation.navigate("Home");
        },
      },
    ]);
  };
  return (
    <SafeAreaView style={tw`w-full h-full flex-1 items-center justify-center`}>
      <View style={tw`bg-white h-30 w-80 rounded-lg mb-10`}>
        <TextInput
          placeholder="Name on card"
          autoCapitalize="none"
          onChangeText={(text) => setName(text)}
          style={tw`p-4 border-b border-gray-400`}
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
        onPress={initPayment}
        disabled={name ==''}
      >
        <Text style={tw`text-white text-center py-4`} 
        >
          Pay
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`w-80 mt-4 bg-white rounded-lg border-2 border-[#008080]`}
        onPress={handleCancelPayment}
      >
        <Text style={tw`text-center py-4 text-[#008080]`}>Cancel Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Checkout;
