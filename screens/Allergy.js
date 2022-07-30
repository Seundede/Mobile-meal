import { TouchableOpacity, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const Allergy = ({ navigation}) => {
  return (
    <SafeAreaView style={tw`w-full bg-white relative h-full`}>
      <TouchableOpacity
        style={tw`absolute top-12 left-5 bg-black rounded-full p-2`}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon color="white" />
      </TouchableOpacity>
      <ScrollView style={tw`mx-4 mt-7 p-2`} showsVerticalScrollIndicator={false}>
        <Text style={tw`text-xl font-bold text-center mt-2`}>Food Allergy</Text>
        <Text style={tw`text-lg`}>
          A food allergy is when the body's immune system reacts unusually to
          specific foods. Although allergic reactions are often mild, they can
          be very serious. Symptoms of a food allergy can affect different areas
          of the body at the same time. Some common symptoms include:
        </Text>

        <Text style={tw`text-xl font-bold text-center mt-2`}>Anaphylaxis</Text>
        <Text style={tw`text-lg`}>
          In the most serious cases, a person has a severe allergic reaction
          (anaphylaxis), which can be life threatening. Call 999 if you think
          someone has the symptoms of anaphylaxis, such as: Ask for an ambulance
          and tell the operator you think the person is having a severe allergic
          reaction.
        </Text>
        <Text style={tw`text-xl font-bold text-center mt-2`}>
          What causes food allergies?
        </Text>
        <Text style={tw`text-lg`}>
          Food allergies happen when the immune system – the body's defence
          against infection – mistakenly treats proteins found in food as a
          threat. As a result, a number of chemicals are released. It's these
          chemicals that cause the symptoms of an allergic reaction. Almost any
          food can cause an allergic reaction, but there are certain foods that
          are responsible for most food allergies.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Allergy;
