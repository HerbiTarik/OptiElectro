import {View, Image, Text} from 'react-native';
import React, {useState} from 'react';
import logoEnt from '../assets/logo_ent.jpg';
import StarRating from 'react-native-star-rating-widget';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
            <Text className="font-bold text-text2 text-[15px] my-5">
              Installation électrique et fibre optique de qualité.
            </Text>
            <View className="flex-row items-center mb-2 ">
              <Ionicons name="pin-sharp" size={16} color="#0f172a" />
              <Text className="text-text2  pl-2">Disponble à Paris</Text>
            </View>
            <View className="flex-row items-center my-2 ">
              <Ionicons name="hourglass-outline" size={16} color="#0f172a" />
              <Text className=" text-text2 pl-2">
                <Text className="font-bold">Intervention moyenne </Text>: 2
                jours
              </Text>
            </View>
            <View className="flex-row items-center my-2 ">
              <Ionicons name="cash-outline" size={16} color="#0f172a" />
              <Text className=" text-text2 pl-2">
                <Text className="font-bold ">Tarifs</Text> : 100 - 300 €
              </Text>
            </View>
            <View className="flex-row items-center my-2 ">
              <MaterialIcons name="done" size={16} color="#0f172a" />
              <Text className="text-text2 pl-2">
                Certifié RGE / Partenaire Schneider Electric
              </Text>
            </View>
            <View className="bg-primary py-5 rounded-[10px] justify-center items-center mt-3">
              <Text className="text-txt font-bold mb-2">
                Prochaine disponibilté
              </Text>
              <Text className="text-btnColor "> 20 novembre 2024</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CompanySearchScreen;
