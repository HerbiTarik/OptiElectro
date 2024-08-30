import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Accuil = () => {
  return (
    <View className="bg-primary flex-1">
      <View className="items-center justify-center pt-20">
        <Text className="text-txt flex-auto text-lg tracking-wide leading-10 text-center font-bold">
          Electrical and fiber optic installation,{'\n'}
          <Text className="text-btnColor">book in one click</Text>.
        </Text>
      </View>
      <View className="relative bg-textInput my-10 mx-5 rounded-full flex-row ">
        <TextInput
          className="flex-auto py-3 pl-5 placeholder: text-placeholder text-base text-text2"
          placeholder="Find works to schedule..."
        />
        <View className="bg-btnColor items-center  p-2.5 m-1 justify-center rounded-full mr-2">
          <Ionicons name="search-outline" size={24} color="black" />
        </View>
      </View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
};

export default Accuil;
