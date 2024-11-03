import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ServicesScreen = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack('homeScreen');
  };
  return (
    <View>
      <Pressable onPress={handlePress}>
        <Text>ServicesScreen</Text>
      </Pressable>
    </View>
  );
};

export default ServicesScreen;
