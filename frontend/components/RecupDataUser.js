import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const RecupDataUser = () => {
  const [userData, setUserData] = useState(null);
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
          setUserData(response.data);
        } catch (error) {
          console.error('Erreur', error);
        }
      }
    };
    fetchData();
  }, [tokenDecode]);

  return {userData};
};

export default RecupDataUser;
