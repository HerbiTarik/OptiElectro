import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import StartedScreen from '../screens/StartedScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CompanySearchScreen from '../screens/CompanySearchScreen';
import {Pressable} from 'react-native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const backhundler = () => {};

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StartedScreen" component={StartedScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="CompanySearchScreen"
        component={CompanySearchScreen}
        options={{
          headerLeft: () => (
            <Pressable
              className="justify-center items-center"
              onPress={backhundler}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
          ),
          headerShown: true,
          headerTitle: 'Liste des entreprises',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0284c7',
          },
          headerTintColor: '#fffbeb',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
