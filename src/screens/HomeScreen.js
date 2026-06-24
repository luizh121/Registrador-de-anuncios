import {View, Text}             from 'react-native';
import { styles }               from '../../style/styles';
import { useEffect }            from 'react';
import { useNavigation}         from '@react-navigation/native';
import Navibutton               from '../../components/Navibutton';
import {collection, onSnapshot} from "firebase/firestore";
import { db }                   from '../../firebaseConfig';
import Card                     from '../../components/Card';


export default function HomeScreen({navigation}) {

  return (
    <View style={styles.container}>

      <Navibutton  
        title= "Registrar Anúncio (temp)"
        onPress={() => navigation.navigate('CreateAd')}
      />

      <Card/>


   
          
     
    </View>
  );

}