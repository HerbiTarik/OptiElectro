import {
  Dimensions,
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import Svg, {Circle} from 'react-native-svg';
import axios from 'axios';
import 'react-native-get-random-values';
import Btn from './Btn';
import {useNavigation} from '@react-navigation/native';

const ModalServices = ({
  onRequestClose,
  onPressIn,
  onPressOut,
  isPressedModal,
  visibleModal,
}) => {
  const navigation = useNavigation();

  const {height} = Dimensions.get('window');
  const {width} = Dimensions.get('window');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItms] = useState([]);

  const [openTr, setOpenTr] = useState(false);
  const [valueTr, setValueTr] = useState(null);
  const [itemsTr, setItmsTr] = useState([]);

  const [location, setLocation] = useState(null);

  const [openCity, setOpenCity] = useState(false);
  const [valueCity, setValueCity] = useState(null);
  const [itemsCity, setItemsCity] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`http://10.0.2.2:3000/api/services`);
        const fetchedServices = res.data.map(service => ({
          label: service.nom,
          value: service.id,
        }));
        setItms(fetchedServices);
      } catch (error) {
        console.error('Erreur', error);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const fetchActivites = async () => {
      try {
        const response = await axios.get(
          `http://10.0.2.2:3000/api/activites/${value == null ? 1 : value}`,
        );
        const fetchedActivites = response.data.map(activite => ({
          label: activite.nom,
          value: activite.id,
        }));
        setItmsTr(fetchedActivites);
      } catch (error) {
        console.error('Erreur', error);
      }
    };
    fetchActivites();
  }, [value]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/api/villes');
        const fetchedCities = response.data.map(city => ({
          label: city.nom,
          value: city.id,
        }));
        setItemsCity(fetchedCities);
      } catch (error) {
        console.error('Erreur: ', error);
      }
    };
    fetchCities();
  }, []);
  console.log(valueCity);

  const handleBook = () => {
    onRequestClose();
    navigation.navigate('CompanySearchScreen.js');
    console.log(value, valueTr, valueCity, location);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onRequestClose}
      visible={visibleModal}
      style={{marginTop: 10}}
      statusBarTranslucent={true}>
      <View
        className="flex-1 justify-end"
        style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
        <View
          style={{
            backgroundColor: '#eff6ff',
            height: height * 0.8,
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            width: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            overflow: 'hidden',
          }}>
          <View className="absolute">
            <Svg height={height} width={width} viewBox="0 0 100 100">
              <Circle cx="-10" cy="-10" r="50" fill="#0284c7" />
            </Svg>
          </View>
          <View className="absolute">
            <Svg height={height} width={width} viewBox="0 0 100 100">
              <Circle cx="80" cy="90" r="60" fill="#0284c7" />
            </Svg>
          </View>
          <View className={`h-7 justify-center items-end `}>
            <Pressable
              className={`rounded-full ${isPressedModal ? 'bg-primary' : ''}`}
              onPressIn={onPressIn}
              onPressOut={onPressOut}>
              <Ionicons name="close-outline" size={24} color="black" />
            </Pressable>
          </View>
          <View className="flex-auto mt-10">
            <ScrollView className="flex-auto space-y-14">
              <View className="z-40 flex-auto justify-center ">
                <DropDownPicker
                  listMode="SCROLLVIEW"
                  className="rounded-[25px] flex-auto border-0 pl-5"
                  max={1}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItms}
                  placeholder="Choisissez un service"
                  placeholderStyle={{color: '#6b7280'}}
                  searchable={true}
                  searchPlaceholder="Saisissez l'un de nos services"
                  searchPlaceholderTextColor="#6b7280"
                  // autoScroll={true}
                  searchContainerStyle={{
                    borderWidth: 0,
                    // paddingLeft: 0,
                    borderRadius: 12,
                    borderBottomWidth: 0.5,
                    borderColor: 'black',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}
                  searchTextInputStyle={{
                    borderRadius: 25,
                    borderWidth: 0.5,
                    paddingLeft: 20,
                  }}
                  disableBorderRadius={true}
                  dropDownContainerStyle={{
                    borderRadius: 25,
                    borderWidth: 0,
                    maxHeight: 180,
                    position: 'relative',
                    top: 0,
                  }}
                  listItemLabelStyle={{
                    marginLeft: 20,
                  }}
                />
              </View>
              <View className="z-30 flex-auto justify-center ">
                <DropDownPicker
                  listMode="SCROLLVIEW"
                  disabled={value == null}
                  className="rounded-[25px] flex-auto border-0 pl-5"
                  open={openTr}
                  value={valueTr}
                  items={itemsTr}
                  setOpen={setOpenTr}
                  setValue={setValueTr}
                  setItems={setItmsTr}
                  placeholder="Choisissez un type d'intervention"
                  placeholderStyle={{color: '#6b7280'}}
                  searchable={true}
                  searchPlaceholder="Cherchez un type d'intervention"
                  searchPlaceholderTextColor="#6b7280"
                  autoScroll={true}
                  searchContainerStyle={{
                    borderWidth: 0,
                    borderRadius: 12,
                    borderBottomWidth: 0.5,
                    borderColor: 'black',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}
                  searchTextInputStyle={{
                    borderRadius: 25,
                    borderWidth: 0.5,
                    paddingLeft: 20,
                  }}
                  disableBorderRadius={true}
                  dropDownContainerStyle={{
                    borderRadius: 25,
                    borderWidth: 0,
                    maxHeight: 180,
                    position: 'relative',
                    top: 0,
                  }}
                  listItemLabelStyle={{
                    marginLeft: 20,
                  }}
                />
              </View>

              <View className="z-40 flex-auto justify-center">
                <DropDownPicker
                  className="rounded-[25px] flex-auto border-0 pl-5"
                  listMode="SCROLLVIEW"
                  loading={searchText == null}
                  onChangeSearchText={text => {
                    setSearchText(text);
                  }}
                  disabled={valueTr == null}
                  open={openCity}
                  value={valueCity}
                  items={itemsCity}
                  setOpen={setOpenCity}
                  setValue={setValueCity}
                  setItems={setItemsCity}
                  placeholder="Entrez la ville de l'intervention"
                  placeholderStyle={{color: '#6b7280'}}
                  searchable={true}
                  searchPlaceholder="Saisissez la ville d'intervention"
                  searchPlaceholderTextColor="#6b7280"
                  autoScroll={true}
                  searchContainerStyle={{
                    borderWidth: 0,
                    borderRadius: 12,
                    borderBottomWidth: 0.5,
                    borderColor: 'black',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}
                  searchTextInputStyle={{
                    borderRadius: 25,
                    borderWidth: 0.5,
                    paddingLeft: 20,
                  }}
                  disableBorderRadius={true}
                  dropDownContainerStyle={{
                    borderRadius: 25,
                    borderWidth: 0,
                    maxHeight: 180,
                    position: 'relative',
                    top: 0,
                  }}
                  listItemLabelStyle={{
                    marginLeft: 20,
                  }}
                />
              </View>
              <View className="flex-auto  justify-center">
                <View className="bg-white rounded-[25px] flex-row items-center">
                  <View className="pl-4">
                    <Ionicons
                      name="location-outline"
                      size={20}
                      className="text-[#6b7280]"
                    />
                  </View>

                  <TextInput
                    editable={valueCity !== null}
                    className="p-2.5 flex-auto"
                    onChangeText={setLocation}
                    value={location}
                    placeholder="Entrez le lieu de l'intervention"
                    placeholderTextColor={'#6b7280'}
                  />
                </View>
              </View>

              <View className="flex-auto justify-center my-12">
                <Btn
                  textClassName="py-3"
                  disabled={location == null || location == ''}
                  onBook={handleBook}>
                  Chercher un spécialiste
                </Btn>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalServices;
