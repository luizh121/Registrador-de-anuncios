import { View, Text }   from 'react-native';
import { styles }       from '../../style/styles';
import { useEffect }    from 'react';
import { useNavigation} from '@react-navigation/native';
import Navibutton       from '../../components/Navibutton';

export default function HomeScreen({navigation}) {

  return (
    <View>
      <Text>Usuário autenticado</Text>

      <Navibutton
        title= "Registrar Anúncio (temp)"
        onPress={() => navigation.navigate('CreateAd')}
      />
    </View>
  );

}