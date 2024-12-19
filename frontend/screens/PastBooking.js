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
import {useDispatch, useSelector} from 'react-redux';
import {setAnnuler, removeAnnuler} from '../reduxConf/deleteIdSlice';
import axios from 'axios';

const BookingToCome = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const booking = useSelector(state => state.booking);
  const annuler = useSelector(state => state.annuler);
  const [bookingInfo, setBookingInfo] = useState({});
  const [deleteId, setDeleteId] = useState({});
  const isEmptyObject = obj => Object.keys(obj).length === 0;

  const {width} = Dimensions.get('window');
  const {height} = Dimensions.get('window');
  const bookingWidth = useMemo(() => width * 0.85, [width]);
  const bookingHeight = useMemo(() => height * 0.3, [height]);
  const bookingBtnWidth = useMemo(() => width * 0.35, [width]);

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
          `http://10.0.2.2:3000/api/myPastBookings/${id}`,
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
        className="my-4 h-[230px] rounded-xl border-[0.5px] overflow-hidden">
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
            <View className=" flex-row justify-center  flex-auto items-end ">
              <Pressable onPress={() => handleAnnuler(item.id)}>
                <View
                  style={{width: bookingBtnWidth}}
                  className="bg-[#e11d48] p-3 justify-center items-center rounded-lg ">
                  <Text className="font-bold text-txt">Supprimer</Text>
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
    <View className="flex-1">
      <View className="justify-center items-center">
        <FlatList
          data={bookingInfo}
          showsVerticalScrollIndicator={false}
          updateCellsBatchingPeriod={50}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default BookingToCome;
