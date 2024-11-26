import {View, Text, TextInput, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import {
  KeyboardProvider,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-controller';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const loginData = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        'http://10.0.2.2:3000/api/users/login',
        loginData,
      );

      const {token} = response.data;

      if (response.status === 200 || response.status === 201) {
        await AsyncStorage.setItem('token', token);
        navigation.replace('HomeScreen');

        //expiration du token après 10s
        // setTimeout(() => {
        //   Alert.alert(
        //     'Session Expired',
        //     'Your session has expired. Please login again.',
        //   );
        // await AsyncStorage.removeItem('token');
        //   navigation.navigate('LoginScreen');
        // }, 10000);
      }
    } catch (error) {
      Alert.alert('Login failed', 'Invalid email or password');
    }
  };

  return (
    <KeyboardProvider>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
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
                  value={email}
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
                  value={password}
                  placeholder="Enter your password"
                  autoComplete="password"
                  secureTextEntry
                  keyboardAppearance="password"
                />
              </View>
              <Btn textClassName="my-5 py-3 bg-[#facc15]" onLogin={handleLogin}>
                Login
              </Btn>
              <View className="pt-3 pr-2">
                <Pressable>
                  <Text className="self-end text-text2">Forget Password ?</Text>
                </Pressable>
              </View>
              <View className="flex-row self-center py-8">
                <Text className="text-text2">Don't have an account?</Text>
                <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
                  <Text className="text-text3"> Sign Up</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardProvider>
  );
};

export default LoginScreen;
