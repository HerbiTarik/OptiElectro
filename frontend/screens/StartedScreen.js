import {Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import connexionImg from '../assets/pngegg(4).png';
// import ButtonStarted from '../components/ButtonStarted';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import Svg, {Circle} from 'react-native-svg';

const StartedScreen = () => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  const {height} = Dimensions.get('window');
  return (
    <View className="bg-accent flex-1 pb-12">
      <View className="absolute">
        <Svg height={height} width={width} viewBox="0 0 100 100">
          <Circle cx="50" cy="-36" r="100" fill="#0284c7" />
        </Svg>
      </View>
      <View className=" pt-8 flex-auto justify-center items-center">
        <Text
          className="text-[40px] text-txt "
          style={{fontFamily: 'Merienda-Bold'}}>
          OptiElectro
        </Text>
      </View>
      <View className="flex-auto pt-8 justify-center items-center">
        <Text
          className="text-txt text-base text-center"
          style={{fontFamily: 'Merienda-Bold'}}>
          Electrical & Fiber Optic Installation at Your Service.
        </Text>
        <Text
          className="text-btnColor text-base pt-4"
          style={{fontFamily: 'Merienda-Bold'}}>
          Customized, Fast, and Reliable Solutions.
        </Text>
      </View>

      <View className="flex-auto justify-center items-center">
        <Btn onPressLoginScreen={() => navigation.navigate('LoginScreen')}>
          GET STARTED
        </Btn>
      </View>

      <View className=" justify-center items-center flex-auto">
        <Image
          source={connexionImg}
          className="flex-auto w-100 h-60"
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default StartedScreen;
