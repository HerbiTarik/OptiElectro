import {Text, View, Image} from 'react-native';
import React from 'react';
import connexionImg from '../assets/connexion.png';
import ButtonStarted from '../components/ButtonStarted';

const StartedScreen = () => {
  return (
    <View className="bg-primary flex-1 py-12">
      <View className=" pt-8 flex-auto justify-center items-center">
        <Text className="text-[40px] text-text font-bold">LinkUp</Text>
      </View>
      <View className=" justify-center items-center flex-auto">
        <Image
          source={connexionImg}
          className="flex-auto w-100 h-60"
          resizeMode="contain"
        />
      </View>
      <View className="flex-auto t-10 justify-center items-center">
        <Text className="text-text text-base">
          Welcome to Our Social Network!
        </Text>
        <Text className="text-text text-base pt-2">
          Sign in to discover and connect with friends.
        </Text>
      </View>
      <View className="flex-auto justify-center items-center">
        <ButtonStarted />
      </View>
    </View>
  );
};

export default StartedScreen;
