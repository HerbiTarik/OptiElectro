import {View, Text, TextInput, Dimensions, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import fibre_optique from '../assets/fibre-optique.jpg';
import installation_electrique from '../assets/installation-electrique.jpg';
import maintenance from '../assets/maintenance.jpg';
import mise_aux_normes from '../assets/mise-aux-normes.jpg';
import Carousel from 'react-native-reanimated-carousel';

const data = [
  {title: 'Item 1', img: {fibre_optique}},
  {title: 'Item 2', img: {installation_electrique}},
  {title: 'Item 3', img: {maintenance}},
  {title: 'Item 4', img: {mise_aux_normes}},
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
          className="flex-auto py-3 pl-5 placeholder: text-placeholder text-base text-text2"
          placeholder="Find works to schedule..."
        />
        <View className="bg-btnColor items-center  p-2.5 m-1 justify-center rounded-full mr-2">
          <Ionicons name="search-outline" size={24} color="black" />
        </View>
      </View>

      <View className="items-center justify-center">
        <Carousel
          mode="tinder"
          modeConfig={{
            stackInterval: 30, // Ajustez l'espacement des cartes
            scaleInterval: 0.1, // Ajustez l'échelle des cartes
            rotateDegree: 10, // Ajustez la rotation des cartes
          }}
          width={width * 0.8}
          height={width / 2}
          data={data}
          scrollAnimationDuration={1000}
          // modeConfig={{
          //   stackInterval: 30, // Distance entre les cartes
          //   scaleInterval: 0.1, // Échelle des cartes dans la pile
          //   rotateDegree: 10, // Degré de rotation de chaque carte
          // }}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#aaa',
              }}>
              <Text style={{fontSize: 24}}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Accuil;
