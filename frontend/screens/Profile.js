import {View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import photo from '../assets/photo.jpg';
import {
  KeyboardProvider,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-controller';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';

const Profile = () => {
  const [imageUri, setImageUri] = useState(null);

  // const convertImageToBase64 = async uri => {
  //   const base64Image = await RNFS.readFile(uri, 'base64');
  //   return base64Image;
  // };

  console.log(imageUri);
  const pickImage = () => {
    let option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(option, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setImageUri(response.assets[0].uri);
      }
    });
  };
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
          {imageUri ? (
            <Image
              source={{uri: imageUri}}
              className="w-36 h-36 flex-1 rounded-full"
            />
          ) : (
            <Image source={photo} className="w-36 h-36 flex-1 rounded-full" />
          )}
          <Pressable
            className="absolut bottom-9 left-11 bg-white p-1 rounded-full"
            onPress={pickImage}>
            <Ionicons name="add-circle" size={28} color={'#020617'} />
          </Pressable>
        </View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </KeyboardAwareScrollView>
    </KeyboardProvider>
  );
};

export default Profile;
