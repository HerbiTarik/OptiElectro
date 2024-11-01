import {
  View,
  Image,
  Pressable,
  Text,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import photo from '../assets/photo.jpg';
import {
  KeyboardProvider,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-controller';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import RNFS from 'react-native-fs';
import {Buffer} from 'buffer';
import Icon from 'react-native-vector-icons/Fontisto';
import Btn from '../components/Btn';
import {Picker} from '@react-native-picker/picker';
import {blue, green} from 'react-native-reanimated/lib/typescript/Colors';

const Profile = () => {
  const [imageUri, setImageUri] = useState(null);
  // const [imageConvertie, setImageConvertie] = useState(null);

  const [userData, setUserData] = useState(null);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [locationUp, setLocation] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const [tokenDecode, setTokenDecode] = useState(null);

  useEffect(() => {
    const recupToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          const decodeToken = jwtDecode(token);
          setTokenDecode(decodeToken);
          // console.log(decodeToken);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    recupToken(); // Appelle la fonction asynchrone
  }, []); // Le tableau de dépendances vide s'assure que le hook ne s'exécute qu'une fois

  useEffect(() => {
    const fetchData = async () => {
      if (tokenDecode && tokenDecode.email) {
        const {email} = tokenDecode;
        try {
          const response = await axios.get(
            `http://10.0.2.2:3000/api/users/email/${email}`,
          );
          // console.log(response.data);
          setUserData(response.data);
        } catch (error) {
          console.error('Erreur', error);
        }
      }
    };
    fetchData();
  }, [tokenDecode]);
  // const convertImageToBase64 = async uri => {
  //   const base64Image = await RNFS.readFile(uri, 'base64');
  //   return base64Image;
  // };

  const putProfile = async () => {
    const data = {
      first_name: firstName !== null ? firstName : userData.first_name,
      last_name: lastName !== null ? lastName : userData.last_name,
      email: email !== null ? email : userData.email,
      number: number !== null ? number : userData.number,
      location: locationUp !== null ? locationUp : userData.location,
      countrynumber:
        selectedValue !== null ? selectedValue : userData.countrynumber,
      id: userData.id,
    };
    try {
      const response = await axios.put(
        'http://10.0.2.2:3000/api/users/updateData',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 201 || response.status === 200) {
        Alert.alert('Add details', 'details successfully updated');
      } else {
        Alert.alert('failed to update details');
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  // const addImage = async () => {
  //   const data = {
  //     image: imageUri,
  //     id: userData.id,
  //   };
  //   try {
  //     const response = await axios.put(
  //       'http://10.0.2.2:3000/api/users/image',
  //       data,
  // {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // }
  //     );
  //     if (response.status === 201 || response.status === 200) {
  //       Alert.alert('Add image', 'Image successfully added');
  //     } else {
  //       Alert.alert('failed to add image to database');
  //     }
  //   } catch (error) {
  //     console.log('ERROR', error);
  //   }
  // };

  const pickImage = async () => {
    // let option = {
    //   mediaType: 'photo',
    //   quality: 1,
    // };
    // const result = await launchImageLibrary(option);
    // if (result.didCancel) {
    //   console.log('User cancelled image picker');
    // } else if (result.errorMessage) {
    //   console.log('ImagePicker Error: ', result.errorMessage);
    // } else {
    //   if (result.assets && result.assets.length > 0) {
    //     // Utilise l'URI correcte
    //     const selectedImageUri = result.assets[0].uri;
    //     try {
    //       // const base64Image = await RNFS.readFile(selectedImageUri, 'base64');
    //       setImageUri(selectedImageUri); // Enregistre l'URI de l'image sélectionnée
    //     } catch (error) {
    //       console.log(
    //         'Erreur lors de la conversion de l’image en base64:',
    //         error,
    //       );
    //     }
    //   } else {
    //     console.error('Aucune image sélectionnée');
    //   }
    // }
  };

  useEffect(() => {
    if (imageUri) {
      addImage();
    }
  }, [imageUri]);

  // const buffer = Buffer.from(userData && userData.image.data);
  // const base64Image = buffer.toString('base64');
  // console.log(base64Image);

  // console.log(imageUri);

  // const takePhoto = () => {
  //   let options = {
  //     mediaType: 'photo',
  //     quality: 1,
  //   };
  //   launchCamera(options, (response) => {
  //     if (response.didCancel) {
  //       console.log('User cancelled camera');
  //     } else if (response.errorMessage) {
  //       console.log('Camera Error: ', response.errorMessage);
  //     } else {
  //       setImageUri(response.assets[0].uri);
  //     }
  //   });
  // };
  // const handleAddImage = () => {};

  return (
    <KeyboardProvider>
      <View className="flex-1 bg-primary">
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View className="justify-center items-center p-10">
            <Image
              source={photo}
              className="w-36 h-36 flex-auto rounded-full"
            />

            <Pressable
              className="absolut bottom-9 left-11 bg-white p-1 rounded-full"
              onPress={pickImage}>
              <Ionicons name="add-circle" size={28} color={'#020617'} />
            </Pressable>
          </View>

          <View className="bg-accent h-px mx-10 rounded-full mb-4"></View>

          <View className="pl-10 pr-10 pt-5 flex-auto">
            <View className="bg-[#e4e4e7] mb-3 rounded-full flex-row items-center">
              <View className="pl-5">
                <Ionicons
                  name="person-outline"
                  size={20}
                  className="text-placeholder"
                />
              </View>
              <TextInput
                className="p-3 flex-auto"
                onChangeText={setFirstName}
                value={
                  firstName !== null
                    ? firstName
                    : (userData && userData.first_name) || ''
                }
              />
            </View>

            <View className="bg-[#e4e4e7] my-3 rounded-full flex-row items-center">
              <View className="pl-5">
                <Ionicons
                  name="person-outline"
                  size={20}
                  className="text-placeholder"
                />
              </View>

              <TextInput
                className="p-3 flex-auto"
                onChangeText={setLastName}
                value={
                  lastName !== null
                    ? lastName
                    : (userData && userData.last_name) || ''
                }
              />
            </View>
            <View className="bg-[#e4e4e7] my-3 rounded-full flex-row items-center">
              <View className="pl-5">
                <Icon name="email" size={20} className="text-placeholder" />
              </View>

              <TextInput
                className="p-3 flex-auto"
                onChangeText={setEmail}
                value={
                  email !== null ? email : (userData && userData.email) || ''
                }
              />
            </View>
            <View className="bg-[#e4e4e7] my-3 rounded-full flex-row items-center">
              <View className="pl-5">
                <Ionicons
                  name="call-outline"
                  size={20}
                  className="text-placeholder"
                />
              </View>
              <View className="w-10 h-auto ">
                <Picker
                  selectedValue={selectedValue}
                  mode="dropdown"
                  onValueChange={itemValue => setSelectedValue(itemValue)}
                  itemStyle={{color: '#e4e4e7'}}>
                  <Picker.Item label="+213" value="+213" />
                  <Picker.Item label="+33" value="+33" />
                  <Picker.Item label="+49" value="+49" />
                  <Picker.Item label="+32" value="+32" />
                  <Picker.Item label="+43" value="+43" />
                  <Picker.Item label="+359" value="+359" />
                </Picker>
              </View>
              <View className="w-auto h-auto">
                <Text className="justify-center items-center text-secondary">
                  {selectedValue !== null
                    ? selectedValue
                    : (userData && userData.countrynumber) || ''}
                </Text>
              </View>
              <TextInput
                className="p-3 flex-auto"
                onChangeText={setNumber}
                value={
                  number !== null ? number : (userData && userData.number) || ''
                }
              />
            </View>
            <View className="bg-[#e4e4e7] my-3 rounded-full flex-row items-center">
              <View className="pl-5">
                <Ionicons
                  name="location-outline"
                  size={20}
                  className="text-placeholder"
                />
              </View>

              <TextInput
                className="p-3 flex-auto"
                onChangeText={setLocation}
                value={
                  locationUp !== null
                    ? locationUp
                    : (userData && userData.location) || ''
                }
              />
            </View>

            <Btn textClassName="mt-3 mb-12 py-3" onPutProfile={putProfile}>
              Save
            </Btn>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </KeyboardProvider>
  );
};

export default Profile;
