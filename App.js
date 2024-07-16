import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import RNBootSplash from "react-native-bootsplash"


export default function App() {
  useEffect(() => {
      RNBootSplash.hide({fade: true, duration: 500})
  }, [])
  return (
    <View className="bg-primary flex-1">
      <Text className="text-center  text-red-900">
          Social Network
      </Text>
    </View>
  )
}