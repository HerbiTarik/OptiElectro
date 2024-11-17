import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import StartedScreen from '../screens/StartedScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CompanySearchScreen from '../screens/CompanySearchScreen';
import {LinearGradient} from 'react-native-svg';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
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
        name="CompanySearchScreen.js"
        component={CompanySearchScreen}
        options={{
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
