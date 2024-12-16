import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BookingToCome from './BookingToCome';
import PastBooking from './PastBooking';

const Tab = createMaterialTopTabNavigator();

const Booking = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: 16,
        },
        tabBarActiveTintColor: '#0284c7',
        tabBarInactiveTintColor: '#0f172a',
        tabBarIndicatorStyle: {backgroundColor: '#0284c7'},
      }}>
      <Tab.Screen
        name="BookingToCome"
        component={BookingToCome}
        options={{tabBarLabel: 'À venir'}}
      />
      <Tab.Screen
        name="PastBooking"
        component={PastBooking}
        options={{tabBarLabel: 'Passées'}}
      />
    </Tab.Navigator>
  );
};

export default Booking;
