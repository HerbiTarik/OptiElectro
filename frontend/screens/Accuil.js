import {
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import fibre_optique from '../assets/fibre_optique_slide.png';
import installation_electrique from '../assets/installation_electrique_slide.png';
import maintenance from '../assets/maintenance_slide.png';
import mise_aux_normes from '../assets/mise_aux_normes_slide.png';
import Carousel from 'react-native-reanimated-carousel';
import Svg, {Circle} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    title: 'Maintenance et dépannage',
    text: 'Votre réseau actuel répond-il à vos besoins ? Explorez les avantages de la fibre optique.',
    img: maintenance,
  },
  {
    title: 'Fibre optique',
    text: 'Une panne électrique ? Planifiez une intervention rapide pour un retour à la normale sans attendre.',
    img: fibre_optique,
  },
  {
    title: 'Installation électrique',
    text: 'Optimisez vos coûts énergétiques avec des installations électriques de dernière génération.',
    img: installation_electrique,
  },
  {
    title: 'Mise aux normes',
    text: 'Vous rencontrez des coupures de courant ? Notre équipe est là pour vous aider.',
    img: mise_aux_normes,
  },
];

const Accuil = () => {
  const navigation = useNavigation();
  // const carouselRef = useRef(null);
  const {width} = Dimensions.get('window');
  const {height} = Dimensions.get('window');

  handlePress = () => {
    navigation.navigate('ServicesScreen');
  };

  return (
    <View className="flex-1">
      <View className="absolute">
        <Svg height={height} width={width} viewBox="0 0 100 100">
          <Circle cx="75" cy="-38" r="100" fill="#0284c7" />
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
      <Pressable
        onPress={handlePress}
        className="relative bg-slate-900  rounded-full mt-8 mb-10 mx-8">
        <View className=" bg-accent  rounded-full  flex-auto flex-row">
          <View className="flex-auto justify-center pl-5">
            <Text className="text-base text-text2">
              Quel service recherchez-vous ?
            </Text>
          </View>

          <View className="bg-btnColor items-center  p-2.5 m-1 justify-center rounded-full mr-2">
            <Ionicons name="search-outline" size={24} color="black" />
          </View>
        </View>
      </Pressable>

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
            parallaxScrollingOffset: 120,
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
                  // width: width * 0.7,
                  // height: 150,
                  borderRadius: 15,
                  // backgroundColor: '#fffbeb',
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 4},
                  shadowOpacity: 0.8,
                  shadowRadius: 5,
                  elevation: 10,
                }}>
                <ImageBackground
                  source={item.img}
                  resizeMode="cover"
                  style={{
                    width: width * 0.7,
                    height: 150,
                    borderRadius: 15,
                  }}
                  imageStyle={{borderRadius: 15}}>
                  <View
                    style={{
                      // position: 'absolute',
                      // backgroundColor: 'red',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flex: 1,
                      paddingTop: 6,
                      paddingLeft: 4,
                      marginRight: 100,
                    }}>
                    <Text className=" text-text2 text-[14px] p-2 leading-6 tracking-wide">
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
