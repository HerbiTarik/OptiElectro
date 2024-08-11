import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './components/StackNavigator';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 500});
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
