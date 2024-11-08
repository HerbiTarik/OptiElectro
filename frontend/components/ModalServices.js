import {Dimensions, View, Text, Modal, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import Svg, {Circle} from 'react-native-svg';
import axios from 'axios';

const ModalServices = ({
  onRequestClose,
  onPressIn,
  onPressOut,
  isPressedModal,
  visibleModal,
}) => {
  const {height} = Dimensions.get('window');
  const {width} = Dimensions.get('window');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItms] = useState([]);

  const [itemId, setItemId] = useState();

  const [openTr, setOpenTr] = useState(false);
  const [valueTr, setValueTr] = useState(null);
  const [itemsTr, setItmsTr] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`http://10.0.2.2:3000/api/services`);
        const fetchedServices = res.data.map(service => ({
          label: service.nom,
          value: service.id,
        }));
        setItms(fetchedServices);

        //   const response = await axios.get(`http://10.0.2.2:3000/api/activites`);
        //   const fetchedActivites = response.data.map(activite => ({
        //     label: activite.nom,
        //     value: activite.id,
        //   }));
        //   setItmsTr(fetchedActivites);
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

  console.log(value);
  console.log(valueTr);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onRequestClose}
      visible={visibleModal}
      style={{marginTop: 10}}>
      <View
        className="flex-1 justify-end"
        style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
        <View
          style={{
            backgroundColor: '#eff6ff',
            height: height * 0.8,
            padding: 20,
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
          <View className="mt-10 z-40">
            <DropDownPicker
              // disabled={true}
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
              }}
              listItemLabelStyle={{
                marginLeft: 20,
              }}
            />
          </View>
          <View className="mt-10 z-30">
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
              autoScroll={true}
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
        </View>
      </View>
    </Modal>
  );
};

export default ModalServices;
