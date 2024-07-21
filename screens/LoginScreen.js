import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Btn from '../components/Btn';

const LoginScreen = () => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  return (
    <View className="flex-1 bg-primary ">
      <View className="p-10 justify-center items-center">
        <Text className="text-txt text-[40px]">Login</Text>
      </View>
      <View className="flex-auto bg-accent rounded-t-3xl">
        <View
          className="p-10 flex-auto
        ">
          <View className="bg-[#e4e4e7] my-5 rounded-full flex-row items-center">
            <View className="pl-5">
              <Icon name="email" size={20} color="gray" />
            </View>
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
          <View className="bg-[#e4e4e7] my-5 rounded-full flex-row items-center">
            <View className="pl-5">
              <AntDesign name="lock" size={20} color="gray" />
            </View>
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
          <Btn textClassName="my-5 py-3">Login</Btn>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
