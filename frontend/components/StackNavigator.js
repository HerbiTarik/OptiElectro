import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import StartedScreen from '../screens/StartedScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CompanySearchScreen from '../screens/CompanySearchScreen';
import {Pressable} from 'react-native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {removeBookings} from '../reduxConf/bookingSlice';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const booking = useSelector(state => state.booking);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const backhundler = async () => {
    try {
      const res = await axios.delete(
        `http://10.0.2.2:3000/api/deleteBooking/${booking.id}`,
      );
      if (res.status === 200 || res.status === 201) {
        dispatch(removeBookings());
        navigation.goBack();
      }
    } catch (error) {
      console.error(error);
    }
  };

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
