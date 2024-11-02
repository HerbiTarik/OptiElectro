import {
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import fibre_optique from '../assets/fibre-optique.jpg';
import installation_electrique from '../assets/installation-electrique.jpg';
import maintenance from '../assets/maintenance.jpg';
import mise_aux_normes from '../assets/mise-aux-normes.jpg';
import Carousel from 'react-native-reanimated-carousel';
import Svg, {Circle} from 'react-native-svg';

const data = [
  {
    title: 'Fibre optique',
    text: 'Connectez-vous à l’avenir avec la fibre haute performance.',
    img: fibre_optique,
  },
  {
    title: 'Installation électrique',
    text: 'Pourquoi passer à la fibre optique ? Quels avantages pour vous ?',
    img: installation_electrique,
  },
  {
    title: 'Maintenance et dépannage',
    text: 'Service rapide et efficace.',
    img: maintenance,
  },
  {
    title: 'Mise aux normes',
    text: 'Modernisation et sécurité de vos installations.',
    img: mise_aux_normes,
  },
];

const Accuil = () => {
  // const carouselRef = useRef(null);
  const {width} = Dimensions.get('window');
  const {height} = Dimensions.get('window');

  return (
    <View className="flex-1">
      <View className="absolute">
        <Svg height={height} width={width} viewBox="0 0 100 100">
          <Circle cx="75" cy="-35" r="100" fill="#f97316" />
        </Svg>
      </View>
      <View className="items-center justify-center pt-8 pb-10">
        <Text
          className="text-txt text-lg "
          style={{fontFamily: 'Merienda-Bold'}}>
          OptiElectro
        </Text>
      </View>
      <View className="items-center justify-center">
        <Text className="text-txt flex-auto text-lg tracking-wide leading-10 text-center font-bold">
          Planifiez vos travaux électriques ou{'\n'}fibre optique en{' '}
          <Text className="text-btnColor">un clic !</Text>
        </Text>
      </View>
      <View className="relative bg-textInput my-10 mx-5 rounded-full flex-row ">
        <TextInput
          className="flex-auto py-3 pl-5 placeholder:text-placeholder text-base text-text2"
          placeholder="Find works to schedule..."
        />
        <View className="bg-btnColor items-center  p-2.5 m-1 justify-center rounded-full mr-2">
          <Ionicons name="search-outline" size={24} color="black" />
        </View>
      </View>

      <View className="flex-auto ">
        {/* <View className="justify-center items-center">
          <Text className="text-lg font-bold text-txt">
            Services principaux
          </Text>
        </View> */}
        <Carousel
          className="flex-auto"
          loop
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 95,
            parallaxAdjacentItemScale: 0.8,
          }}
          width={width}
          height={350}
          data={data}
          // autoPlay
          // autoPlayInterval={8000}
          scrollAnimationDuration={3000}
          renderItem={({item}) => (
            <View className="items-center justify-center">
              {/* <Text className="text-lg p-3">{item.title}</Text> */}
              <View
                style={{
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 4},
                  shadowOpacity: 0.8,
                  shadowRadius: 5,
                  elevation: 10,
                  borderRadius: 15,
                }}>
                <ImageBackground
                  source={item.img}
                  resizeMode="cover"
                  style={{
                    width: width * 0.75,
                    height: 170,
                    borderRadius: 15,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                  }}
                  imageStyle={{borderRadius: 15}}>
                  <View
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      borderTopRightRadius: 15,
                      borderBottomRightRadius: 15,
                      marginBottom: 30,
                    }}>
                    <Text className=" text-txt text-[26px] p-2">
                      {item.text}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Accuil;
