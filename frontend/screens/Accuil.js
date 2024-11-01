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

const data = [
  {
    title: 'Fibre optique',
    text: 'Connectez-vous à l’avenir avec la fibre haute performance.',
    img: fibre_optique,
  },
  {
    title: 'Installation électrique',
    text: 'Pour vos bureaux, maisons et locaux commerciaux.',
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

  return (
    <View className="bg-primary flex-1">
      <View className="items-center justify-center pt-20">
        <Text className="text-txt flex-auto text-lg tracking-wide leading-10 text-center font-bold">
          Electrical and fiber optic installation,{'\n'}
          <Text className="text-btnColor">book in one click</Text>.
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
        <View className="justify-center items-center">
          <Text className="text-lg font-bold text-txt">
            Services principaux
          </Text>
        </View>
        <Carousel
          className="flex-auto"
          loop
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.7,
            parallaxAdjacentItemScale: 0.6,
            parallaxScrollingOffset: 200,
          }}
          width={width}
          height={350}
          data={data}
          // autoPlay
          // autoPlayInterval={8000}
          scrollAnimationDuration={3000}
          renderItem={({item}) => (
            <View className="items-center justify-center flex-1">
              <Text className="text-lg p-3">{item.title}</Text>
              {/* <Image
                source={item.img}
                style={{
                  width: width * 0.9,
                  height: 420,
                  borderRadius: 15,
                }}
              /> */}
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
                    width: width * 0.9,
                    height: 420,
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
