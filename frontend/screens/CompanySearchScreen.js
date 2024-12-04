import {View, Image, Text, FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import logoEnt from '../assets/logo_ent.jpg';
import StarRating from 'react-native-star-rating-widget';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const CompanySearchScreen = () => {
  const [rating, setRating] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/api/companies');

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCompanies();
  }, []);

  return (
    <View className="flex-1 bg-fond mt-3">
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View className="bg-white mx-3 my-5 rounded-[10px] shadow-md shadow-[black] p-3">
            <View className="flex-row">
              <Image
                source={{uri: item.logo}}
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
                <Text className="font-bold text-[22px] text-text2">
                  {item.denomination}
                </Text>

                <StarRating
                  rating={item.stars}
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
                {item.activite_principale}
              </Text>
              <View className="flex-row items-center mb-2 ">
                <Ionicons name="pin-sharp" size={16} color="#0f172a" />
                <Text className="text-text2  pl-2">
                  Disponble à {item.city}
                </Text>
              </View>
              <View className="flex-row items-center my-2 ">
                <Ionicons name="hourglass-outline" size={16} color="#0f172a" />
                <Text className=" text-text2 pl-2">
                  <Text className="font-bold">Intervention moyenne </Text>:{' '}
                  {item.duree_intervention} jours
                </Text>
              </View>
              <View className="flex-row items-center my-2 ">
                <Ionicons name="cash-outline" size={16} color="#0f172a" />
                <Text className=" text-text2 pl-2">
                  <Text className="font-bold ">Tarifs</Text> : {item.tarif_min}{' '}
                  - {item.tarif_max} €
                </Text>
              </View>
              <View className="flex-row items-center my-2 ">
                <MaterialIcons name="done" size={16} color="#0f172a" />
                <Text className="text-text2 pl-2">
                  Certifié {item.certification} / Partenaire {item.partenaire}
                </Text>
              </View>
              <View className="bg-primary py-5 rounded-[10px] justify-center items-center mt-3">
                <Text className="text-txt font-bold mb-2">
                  Prochaine disponibilté
                </Text>
                <Text className="text-btnColor ">
                  {' '}
                  {item.prochaine_disponibilite}
                </Text>
              </View>
            </View>
            <View className="flex-row justify-between mt-4">
              <View className="bg-btnColor p-3 rounded-lg">
                <Pressable>
                  <Text className="text-text2">En savoir plus</Text>
                </Pressable>
              </View>
              <View className="bg-btnColor p-3 rounded-lg">
                <Pressable>
                  <Text className="text-text2">Prendre rendez-vous</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CompanySearchScreen;
