import {View, Image, Pressable, Text, Alert} from 'react-native';
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

const Profile = () => {
  const [imageUri, setImageUri] = useState(null);
  // const [imageConvertie, setImageConvertie] = useState(null);
  const [userData, setUserData] = useState(null);
  const [tokenDecode, setTokenDecode] = useState(null);

  useEffect(() => {
    const recupToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          const decodeToken = jwtDecode(token);
          setTokenDecode(decodeToken);
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
            `http://10.0.2.2:3002/api/users/email/${email}`,
          );
          console.log(response.data);
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

  const addImage = async () => {
    const data = {
      image: imageUri,
      id: userData.id,
    };
    try {
      const response = await axios.put(
        'http://10.0.2.2:3002/api/users/image',
        data,
      );
      if (response.status === 201 || response.status === 200) {
        Alert.alert('Add image', 'Image successfully added');
      } else {
        Alert.alert('failed to add image to database');
      }
    } catch (error) {
      console.log('yes', error);
    }
  };

  const pickImage = async () => {
    let option = {
      mediaType: 'photo',
      quality: 1,
    };
    const result = await launchImageLibrary(option);

    if (result.didCancel) {
      console.log('User cancelled image picker');
    } else if (result.errorMessage) {
      console.log('ImagePicker Error: ', result.errorMessage);
    } else {
      if (result.assets && result.assets.length > 0) {
        // Utilise l'URI correcte
        const selectedImageUri = result.assets[0].uri;
        try {
          // const base64Image = await RNFS.readFile(selectedImageUri, 'base64');
          setImageUri(selectedImageUri); // Enregistre l'URI de l'image sélectionnée
        } catch (error) {
          console.log(
            'Erreur lors de la conversion de l’image en base64:',
            error,
          );
        }
      } else {
        console.error('Aucune image sélectionnée');
      }
    }
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
      <KeyboardAwareScrollView
        className="bg-primary"
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View className="justify-center items-center p-10">
          <Image source={photo} className="w-36 h-36 flex-1 rounded-full" />

          <Pressable
            className="absolut bottom-9 left-11 bg-white p-1 rounded-full"
            onPress={pickImage}>
            <Ionicons name="add-circle" size={28} color={'#020617'} />
          </Pressable>
        </View>
        <View className="bg-accent h-px mx-10 rounded-full mb-10"></View>
        <View>
          <Text>{userData && userData.first_name}</Text>
        </View>
        <View></View>
        <View></View>
        <View></View>
      </KeyboardAwareScrollView>
    </KeyboardProvider>
  );
};

export default Profile;
