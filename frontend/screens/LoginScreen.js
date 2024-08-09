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

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log(email, password);

    const loginData = {
      email: email,
      password: password,
    };
    // try {
    axios
      .post('http://10.0.2.2:3002/api/users/login', loginData)
      .then(res => console.log(res.data));

    // console.log(response);
    // const {token} = response.data;

    // if (response.status === 200 || response.status === 201) {
    //   await AsyncStorage.setItem('token', token);
    //   Alert.alert('Login successful', 'You are now logged in');
    //   navigation.navigate('HomeScreen');
    // }
    // } catch (error) {
    //   if (error.response) {
    //     console.log('Error response:', error.response.data);
    //     Alert.alert(
    //       'Login failed',
    //       error.response.data.message || 'Invalid email or password',
    //     );
    //   } else if (error.request) {
    //     console.log('Error request:', error.request);
    //     Alert.alert('Login failed', 'No response from server');
    //   } else {
    //     console.log('Error message:', error.message);
    //     Alert.alert('Login failed', 'An error occurred');
    //   }
    // }
  };

  //   try {
  //     const response = await fetch('http://10.0.2.2:3002/api/users/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(loginData),
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log('Response data:', data); // Affiche la réponse
  //       const {token} = data;
  //       if (token) {
  //         alert('login successful');
  //         navigation.navigate('HomeScreen');
  //       } else {
  //         alert(`Registration failed: ${data.message}`);
  //       }
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert('An error occurred. Please try again');
  //   }
  // };

  return (
    <KeyboardProvider>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
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
              <Btn textClassName="my-5 py-3" onLogin={handleLogin}>
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
