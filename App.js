import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import RNBootSplash from "react-native-bootsplash"
import StartedScreen from './screens/StartedScreen'


export default function App() {
  useEffect(() => {
      RNBootSplash.hide({fade: true, duration: 500})
  }, [])
  return (
    <>
      <StartedScreen />
    </>
  )
}