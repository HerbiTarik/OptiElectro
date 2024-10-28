import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './components/StackNavigator';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 500});
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
