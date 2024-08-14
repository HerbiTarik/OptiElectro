import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Accuil from './Accuil';
import Search from './Search';
import AddPosts from './AddPosts';
import Settings from './Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Accuil') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'AddPosts') {
            iconName = focused ? 'duplicate' : 'duplicate-outline';
          }
          return <Ionicons name={iconName} size={28} color={color} />;
        },
        tabBarActiveTintColor: '#074C4E',
        tabBarInactiveTintColor: '#6b7280',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },
        tabBarIconStyle: {
          fontSize: 20,
        },
      })}
      initialRouteName="Profile">
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="AddPosts" component={AddPosts} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Accuil" component={Accuil} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
