import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setCompany} from '../reduxConf/companySlice';

const Message = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItms] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`http://10.0.2.2:3000/api/companies`);
        const fetchedCompanies = res.data.map(company => ({
          label: company.denomination,
          value: company.id,
        }));
        setItms(fetchedCompanies);
        if (value) {
          dispatch(setCompany({id: value}));
          navigation.navigate('Chat');
          setValue(null);
        }
      } catch (error) {
        console.error('Erreur', error);
      }
    };
    fetchCompanies();
  }, [value]);

  return (
    <View className="flex-auto mt-20 mx-5">
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
        placeholder="Saisissez le nom d'une entreprise"
        placeholderStyle={{color: '#6b7280'}}
        searchable={true}
        searchPlaceholder="Saisissez le nom d'une entreprise "
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
  );
};

export default Message;
