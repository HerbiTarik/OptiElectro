import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ButtonStarted = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('LoginScreen')}>
      <View className="bg-btnColor px-12 py-4 rounded-full">
        <Text className="text-black text-lg font-bold">GET STARTED</Text>
      </View>
    </Pressable>
  );
};

export default ButtonStarted;
