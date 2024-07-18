import {Pressable, Text, View} from 'react-native';
import React from 'react';

const handleStart = () => {
  console.log('Bouton cliqué');
};

const ButtonStarted = () => {
  return (
    <View className="bg-btnColor px-12 py-4 rounded-full">
      <Pressable onPress={handleStart}>
        <Text className="text-black text-lg font-bold">GET STARTED</Text>
      </Pressable>
    </View>
  );
};

export default ButtonStarted;
