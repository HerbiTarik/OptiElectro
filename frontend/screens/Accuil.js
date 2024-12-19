import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  Pressable,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import fibre_optique from '../assets/fibre_optique_slide.png';
import installation_electrique from '../assets/installation_electrique_slide.png';
import maintenance from '../assets/maintenance_slide.png';
import mise_aux_normes from '../assets/mise_aux_normes_slide.png';
import Carousel from 'react-native-reanimated-carousel';
import Svg, {Circle} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import ModalServices from '../components/ModalServices';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import userImg from '../assets/users.webp';
import {setAnnuler, removeAnnuler} from '../reduxConf/deleteIdSlice';

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
  const user = useSelector(state => state.user);
  const booking = useSelector(state => state.booking);
  const annuler = useSelector(state => state.annuler);

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();
  const [bookingInfo, setBookingInfo] = useState({});
  const [deleteId, setDeleteId] = useState();
  const isEmptyObject = obj => Object.keys(obj).length === 0;

  const {width} = Dimensions.get('window');
  const {height} = Dimensions.get('window');
  const bookingWidth = useMemo(() => width * 0.8, [width]);
  const bookingHeight = useMemo(() => height * 0.3, [height]);
  const bookingBtnWidth = useMemo(() => width * 0.35, [width]);
  const carouselWidth = useMemo(() => width * 0.7, [width]);

  handlePress = () => {
    setModalVisible(true);
  };

  handleAnnuler = async id => {
    try {
      const res = await axios.delete(
        `http://10.0.2.2:3000/api/deleteBooking/${id}`,
      );

      dispatch(setAnnuler({id}));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
      const {id} = user;

      try {
        const response = await axios.get(
          `http://10.0.2.2:3000/api/myBookings/${id}`,
        );
        if (response.status === 200) {
          setBookingInfo(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookings();
  }, [booking, annuler]);

  const renderItem = useCallback(
    ({item}) => (
      <View
        style={{
          width: bookingWidth,
          height: bookingHeight,
        }}
        className=" mx-5 h-[230px] rounded-xl border-[0.5px] overflow-hidden">
        <View className="flex-1">
          <View className=" bg-primary  w-[100%] flex-row items-center flex-[2]">
            <Ionicons
              name="calendar-outline"
              size={20}
              color="white"
              style={{marginLeft: 8}}
            />
            <Text className=" text-txt ml-2">
              {item.prochaine_disponibilite}
            </Text>
          </View>
          <View className="flex-[8] p-3">
            <View className="flex-row items-center flex-auto ">
              <Image
                source={{uri: item.logo}}
                style={{
                  resizeMode: 'cover',
                  width: 42,
                  height: 42,
                  borderRadius: 50,
                  borderWidth: 0.5,
                  borderColor: 'black',
                }}
                cache="only-if-cached"
              />
              <Text className="text-text2 font-bold ml-3">
                {item.denomination}
              </Text>
            </View>
            <View className="flex-auto justify-center">
              <View className="flex-row mt-4 ml-2 mr-2">
                <Ionicons name="build-outline" size={20} color="black" />

                <Text className="mx-2 text-text2 leading-4" numberOfLines={1}>
                  {item.activites}
                </Text>
              </View>
              <View className="flex-row my-3 ml-2 items-center">
                <Ionicons name="pin-sharp" size={20} color="black" />

                <Text className="mx-2 text-text2 leading-4" numberOfLines={1}>
                  {item.location} {', '}
                  {item.ville}
                </Text>
              </View>
            </View>
            <View className=" flex-row justify-between  flex-auto items-end ">
              <Pressable>
                <View
                  style={{width: bookingBtnWidth}}
                  className="bg-btnColor py-3 justify-center items-center rounded-lg">
                  <Text className="font-bold text-text2">Modifier RDV</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => handleAnnuler(item.id)}>
                <View
                  style={{width: bookingBtnWidth}}
                  className="bg-[#e11d48] p-3 justify-center items-center rounded-lg ">
                  <Text className="font-bold text-txt">Annuler RDV</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    ),
    [bookingWidth, bookingHeight, bookingBtnWidth, width],
  );

  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{backgroundColor: '#f3f4f6'}}>
      <View className="absolute">
        <Svg height={height} width={width} viewBox="0 0 100 100">
          <Circle cx="75" cy="-38" r="100" fill="#0284c7" />
        </Svg>
      </View>
      <ModalServices
        onRequestClose={() => setModalVisible(false)}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => {
          setIsPressed(false);
          setModalVisible(false);
        }}
        isPressedModal={isPressed}
        visibleModal={modalVisible}
      />

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

      <View className="h-[170px]">
        <Carousel
          // loop
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
              <View
                style={{
                  borderRadius: 15,
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
                    width: carouselWidth,
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

      <View className="mt-8 items-center">
        <Text className="text-text2 text-[20px] font-bold">
          Mes travaux à venir
        </Text>
      </View>
      {bookingInfo.length === 0 ? (
        <View className="justify-center items-center mt-10 mb-14">
          <Text className="text-gray-500">Pas de travaux planifiés </Text>
        </View>
      ) : (
        <View className="my-8 justify-center items-center">
          <FlatList
            data={bookingInfo}
            horizontal
            showsHorizontalScrollIndicator={false}
            // initialNumToRender={1}
            // windowSize={1}
            // maxToRenderPerBatch={2}
            updateCellsBatchingPeriod={50}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
      <View
        className="bg-primary mx-8 rounded-2xl p-4 my-5"
        style={{
          elevation: 5,
        }}>
        <View className="items-center">
          <Text className="text-txt text-[20px] font-bold">
            Pensée pour les{' '}
            <Text className="text-btnColor text-[20px] font-bold">pros</Text>,
            créée pour vous !
          </Text>
        </View>
        <View className=" mt-10 mx-5">
          <Text className="text-[16px] leading-8 text-txt text-justify">
            Passez à{' '}
            <Text className="text-btnColor font-bold">OptiElecPro</Text>,
            l’application dédiée aux professionnels. Planifiez, suivez et
            finalisez vos travaux en toute simplicité, où que vous soyez.
          </Text>
        </View>
      </View>
      <View className="mt-8 mb-10">
        <View className=" items-center">
          <Text className="text-text2 text-[20px] font-bold">
            Pourquoi choisir <Text className="text-primary">OptiElecPro</Text> ?
          </Text>
        </View>
        <View className="justify-center items-center mt-6 opacity-70">
          <Image source={userImg} className="h-[237px] w-80" />
        </View>

        <View className=" mt-8 mx-10">
          <Text className="text-[16px] leading-8 text-text2 text-justify">
            <Text className="text-primary font-bold">OptiElecPro</Text>,
            simplifie la gestion de vos projets de fibre optique. Organisez vos
            interventions facilement, suivez les travaux en temps réel et gagnez
            en efficacité. Un outil puissant pour les professionnel.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Accuil;
