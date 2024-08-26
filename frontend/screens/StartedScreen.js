import {Text, View, Image} from 'react-native';
import React from 'react';
import connexionImg from '../assets/pngegg(4).png';
// import ButtonStarted from '../components/ButtonStarted';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';

const StartedScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-accent flex-1 pb-12">
      <View className=" pt-8 flex-auto justify-center items-center">
        <Text className="text-[40px] text-text2 font-bold">OptiElectro</Text>
      </View>

      <View className=" justify-center items-center flex-auto">
        <Image
          source={connexionImg}
          className="flex-auto w-100 h-60"
          resizeMode="contain"
        />
      </View>
      <View className="flex-auto pt-8 justify-center items-center">
        <Text className="text-text2 text-base text-center">
          Electrical & Fiber Optic Installation at Your Service.
        </Text>
        <Text className="text-text2 text-base pt-4">
          Customized, Fast, and Reliable Solutions.
        </Text>
      </View>

      <View className="flex-auto justify-center items-center">
        <Btn onPressLoginScreen={() => navigation.navigate('LoginScreen')}>
          GET STARTED
        </Btn>
      </View>
    </View>
  );
};

export default StartedScreen;
