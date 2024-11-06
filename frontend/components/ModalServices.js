import {Dimensions, View, Text, Modal, Pressable} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ModalServices = ({
  onRequestClose,
  onPressIn,
  onPressOut,
  isPressedModal,
  visibleModal,
}) => {
  const {height} = Dimensions.get('window');
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
            backgroundColor: '#fffbeb',
            height: height * 0.8,
            padding: 20,
            width: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View className={`h-7 justify-center items-end `}>
            <Pressable
              className={`rounded-full ${isPressedModal ? 'bg-primary' : ''}`}
              onPressIn={onPressIn}
              onPressOut={onPressOut}>
              <Ionicons name="close-outline" size={24} color="black" />
            </Pressable>
          </View>
          <Text>Services</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalServices;
