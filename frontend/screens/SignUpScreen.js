import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {validate} from 'validate.js';
import constraints from '../validationForm/validation';
import {
  KeyboardProvider,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-controller';

const SignUpScreen = () => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();

  const handleRegister = async () => {
    const userData = {
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      password: Password,
      confirmPassword: ConfirmPassword,
    };

    const validationErrors = validate(userData, constraints);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        'http://10.0.2.2:3002/api/users/registration',
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const data = response.data;
      if (response.status === 200 || response.status === 201) {
        alert('Registration successful');
        navigation.navigate('HomeScreen');
      } else {
        alert(`Registration failed:' ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert(`Registration failed: ${error.response.data.message}`);
      } else if (error.request) {
        alert('No response received from server');
      } else {
        alert('An error occurred. Please try again');
      }
    }
  };

  //   try {
  //     const response = await fetch('http://10.0.2.2:3002/api/user', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(userData),
  //     });
  //     const data = await response.json();
  //     if (response.ok) {
  //       alert('Registration successful');
  //       navigation.navigate('HomeScreen');
  //     } else {
  //       alert(`Registration failed: ${data.message}`);
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
              {errors.firstName && (
                <Text className="text-error pl-5">{errors.firstName[0]}</Text>
              )}
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
              {errors.lastName && (
                <Text className="text-error pl-5">{errors.lastName[0]}</Text>
              )}
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
              {errors.email && (
                <Text className="text-error pl-5">{errors.email[0]}</Text>
              )}
              <View className="bg-[#e4e4e7] my-5 rounded-full flex-row items-center">
                <View className="pl-5">
                  <AntDesign
                    name="lock"
                    size={20}
                    className="text-placeholder"
                  />
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
              {errors.password && (
                <Text className="text-error pl-5">{errors.password[0]}</Text>
              )}
              <View className="bg-[#e4e4e7] my-5 rounded-full flex-row items-center">
                <View className="pl-5">
                  <AntDesign
                    name="lock"
                    size={20}
                    className="text-placeholder"
                  />
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
              {errors.confirmPassword && (
                <Text className="text-error pl-5">
                  {errors.confirmPassword[0]}
                </Text>
              )}

              <Btn textClassName="my-5 py-3" onClick={handleRegister}>
                Register
              </Btn>
              <View className="flex-row self-center py-2">
                <Text className="text-text2">Already have an account?</Text>
                <Pressable onPress={() => navigation.goBack('LoginScreen')}>
                  <Text className="text-text3"> Sign In</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardProvider>
  );
};

export default SignUpScreen;
