import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';

const LoginScreen = () => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  return (
    <View className="flex-1 bg-primary ">
      <View className="p-10 justify-center items-center">
        <Text className="text-txt text-[40px]">Login</Text>
      </View>
      <View className="flex-auto bg-accent rounded-t-3xl">
        <View className="p-10">
          <View className="bg-[#e4e4e7] my-10 rounded-full">
            <Icon name="email" size={24} color="gray" />
            <TextInput
              className="p-3 flex-auto"
              onChangeText={setEmail}
              value={Email}
              placeholder="Enter your email address"
              placeholderTextColor={'gray'}
              autoComplete="email"
              keyboardType="email"
            />
          </View>
          <View className="bg-[#e4e4e7] my-10 rounded-full">
            <TextInput
              className="p-3 flex-auto"
              onChangeText={setPassword}
              value={Password}
              placeholder="Enter your password"
              autoComplete="password"
              secureTextEntry
              keyboardAppearance="password"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
