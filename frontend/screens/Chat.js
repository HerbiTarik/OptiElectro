import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useEffect, useMemo, useState, useCallback} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import photo from '../assets/photo.jpg';
import {useSelector} from 'react-redux';
import axios from 'axios';

const Chat = () => {
  const picture = useSelector(state => state.img);
  const company = useSelector(state => state.company);
  const user = useSelector(state => state.user);
  const [msg, setMsg] = useState('');
  const {width} = Dimensions.get('window');
  const widthMsg = useMemo(() => width * 0.83, [width]);
  const [data, setData] = useState();
  const [chatDataSender, setChatDataSender] = useState();
  const [companyName, setCompanyName] = useState();

  useEffect(() => {
    const fetchCompanyName = async () => {
      try {
        const response = await axios.get(
          `http://10.0.2.2:3000/api/companyName/${company.id}`,
        );
        setCompanyName(response.data.denomination);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCompanyName();
  }, []);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await axios.get(
          `http://10.0.2.2:3000/api/chat/${user.id}/${company.id}`,
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChat();
  }, [chatDataSender]);

  const handleSend = async () => {
    dataSender = {
      id_user: user.id,
      id_ent: company.id,
      content_sender: msg.trim(),
    };
    if (msg && msg.trim()) {
      try {
        const response = await axios.post(
          'http://10.0.2.2:3000/api/chat/sender',
          dataSender,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        setChatDataSender(response.data);
        setMsg('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const renderItem = useCallback(({item}) => {
    const flexDirection = item.id_contact === user.id ? 'row-reverse' : 'row';
    const img =
      item.id_contact === user.id
        ? picture
          ? picture
          : photo
        : {uri: item.logo};
    return (
      <View className="flex-col my-3 ">
        <View style={{flexDirection: flexDirection}}>
          <Image
            source={img}
            style={{
              resizeMode: 'cover',
              width: 30,
              height: 30,
              borderRadius: 50,
              borderWidth: 0.5,
              borderColor: 'black',
              alignItems: 'flex-end',
            }}
          />
          <View className="bg-primary m-2 rounded-lg" style={{width: widthMsg}}>
            <Text className="leading-4 text-justify text-txt p-3">
              {item.contact}
            </Text>
          </View>
        </View>
      </View>
    );
  });

  return (
    <View className="flex-1">
      <View
        className="flex-[0.8] bg-white items-center justify-center"
        style={{elevation: 5}}>
        <Text className="text-text2 text-[18px]">{companyName}</Text>
      </View>
      <View className="flex-[9.2] mx-2">
        <FlatList
          style={{flex: 1}}
          data={data}
          showsVerticalScrollIndicator={false}
          updateCellsBatchingPeriod={50}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          inverted={true}
        />
      </View>
      <View className="flex-[1] bg-white items-center flex-row drop-shadow-2xl">
        <View className="flex-[9] mx-5 my-3">
          <TextInput
            className="bg-accent border-[0.5px] rounded-[10px] px-3"
            onChangeText={setMsg}
            value={msg}
            placeholder="Saisissez votre message"
            placeholderTextColor={'gray'}
          />
        </View>
        <View className="flex-[1] mr-3 justify-center items-center ">
          <Pressable onPress={handleSend}>
            <Ionicons name="send" size={24} color="#0284c7" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Chat;
