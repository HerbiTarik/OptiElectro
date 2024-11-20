import {View, Image, Text} from 'react-native';
import React, {useState} from 'react';
import logoEnt from '../assets/logo_ent.jpg';
import StarRating from 'react-native-star-rating-widget';

const CompanySearchScreen = () => {
  const [rating, setRating] = useState(3.5);
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View className="flex-1 bg-fond">
      <View className="bg-white mx-3 mt-5 rounded-[10px] shadow-md shadow-[black]">
        <View className="p-3">
          <View className="flex-row">
            <Image
              source={logoEnt}
              style={{
                resizeMode: 'cover',
                width: 70,
                height: 70,
                borderRadius: 50,
                borderWidth: 0.5,
                borderColor: 'black',
              }}
            />
            <View className="flex-auto justify-around pl-5">
              <Text className="font-bold text-[22px] text-text2">Opt'eazy</Text>
              <StarRating
                rating={rating}
                onChange={setRating}
                maxStars={5}
                starSize={20}
                enableHalfStar
                color="#facc15"
                starStyle={{
                  marginHorizontal: 2,
                }}
              />
            </View>
          </View>
          <View>
            <Text>Installation électrique et fibre optique de qualité.</Text>
            <Text>Disponible à Paris</Text>
            <Text>Intervention moyenne : 2 jours</Text>
            <Text>Tarifs : 100-300 $</Text>
            <Text>Certifié RGE / Partenaire Schneider Electric</Text>
            <Text>Prochaine disponibilté : 20 novembre 2024</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CompanySearchScreen;
