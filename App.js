import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import RNBootSplash from "react-native-bootsplash"

export default function App() {
  useEffect(() => {
      RNBootSplash.hide({fade: true, duration: 500})
  }, [])
  return (
    <View>
      <Text>Tarik</Text>
    </View>
  )
}