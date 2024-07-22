import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();

  const navigation = useNavigation();

  return (
    // <KeyboardAvoidingView>
    //   <ScrollView>
    <View className="flex-1 bg-primary ">
      <View className="p-10 justify-center items-center">
        <Text className="text-txt text-[40px]">Sign Up</Text>
      </View>
      <View className="flex-auto bg-accent rounded-t-3xl">
        <View
          className="pl-10 pr-10 pt-5 flex-auto
          ">
          <View className="bg-[#e4e4e7] my-5 rounded-full flex-row items-center">
            <View className="pl-5">
              <Ionicons
                name="person-outline"
                size={20}
                className="text-placeholder"
              />
            </View>
            <TextInput
              className="p-3 flex-auto"
              onChangeText={setFirstName}
              value={FirstName}
              placeholder="Enter your First Name"
              placeholderTextColor={'#6b7280'}
            />
          </View>
          <View className="bg-[#e4e4e7] my-5 rounded-full flex-row items-center">
            <View className="pl-5">
              <Ionicons
                name="person-outline"
                size={20}
                className="text-placeholder"
              />
            </View>
            <TextInput
              className="p-3 flex-auto"
              onChangeText={setLastName}
              value={LastName}
              placeholder="Enter your Last Name"
              placeholderTextColor={'#6b7280'}
            />
          </View>
          <View className="bg-[#e4e4e7] my-5 rounded-full flex-row items-center">
            <View className="pl-5">
              <Icon name="email" size={20} className="text-placeholder" />
            </View>
            <TextInput
              className="p-3 flex-auto"
              onChangeText={setEmail}
              value={Email}
              placeholder="Enter your email address"
              placeholderTextColor={'#6b7280'}
              autoComplete="email"
              keyboardType="email"
            />
          </View>
          <View className="bg-[#e4e4e7] my-5 rounded-full flex-row items-center">
            <View className="pl-5">
              <AntDesign name="lock" size={20} className="text-placeholder" />
            </View>
            <TextInput
              className="p-3 flex-auto"
              onChangeText={setPassword}
              value={Password}
              placeholder="Enter your password"
              placeholderTextColor={'#6b7280'}
              autoComplete="password"
              secureTextEntry
              keyboardAppearance="password"
            />
          </View>
          <View className="bg-[#e4e4e7] my-5 rounded-full flex-row items-center">
            <View className="pl-5">
              <AntDesign name="lock" size={20} className="text-placeholder" />
            </View>
            <TextInput
              className="p-3 flex-auto"
              onChangeText={setConfirmPassword}
              value={ConfirmPassword}
              placeholder="Confirm your password"
              placeholderTextColor={'#6b7280'}
              autoComplete="password"
              secureTextEntry
              keyboardAppearance="password"
            />
          </View>
          <Btn textClassName="my-5 py-3">Register</Btn>
          <View className="flex-row self-center py-2">
            <Text className="text-text2">Already have an account?</Text>
            <Pressable onPress={() => navigation.goBack('LoginScreen')}>
              <Text className="text-text3"> Sign In</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
    //   </ScrollView>
    // </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
