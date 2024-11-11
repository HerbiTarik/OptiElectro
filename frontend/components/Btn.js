import {View, Text, Pressable} from 'react-native';
import React from 'react';

const Btn = ({
  children,
  textClassName,
  onPressLoginScreen,
  onClick,
  onLogin,
  onPutProfile,
  onBook,
}) => {
  const handlePress = () => {
    if (onPressLoginScreen) {
      onPressLoginScreen();
    }
    if (onClick) {
      onClick();
    }
    if (onLogin) {
      onLogin();
    }
    if (onPutProfile) {
      onPutProfile();
    }
    if (onBook) {
      onBook();
    }
  };
  return (
    <Pressable onPress={handlePress}>
      <View className={`bg-btnColor px-12 py-4 rounded-full ${textClassName}`}>
        <Text className="text-black text-lg font-bold text-center">
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Btn;
