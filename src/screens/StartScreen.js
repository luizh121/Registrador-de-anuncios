import {Text, View}      from 'react-native';
import { styles }        from '../../style/styles';
import { useNavigation } from '@react-navigation/native';
import Navibutton        from '../../components/Navibutton';

export default function StartScreen({navigation}){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>RegistrAD</Text>
        <Text style={styles.paragraph}>Adicione seus anuncios aqui!</Text>

        <Navibutton
          title="Entrar"
          onPress={() => navigation.navigate('Login')}
        />

         <Navibutton
          title="Cadastrar"
          onPress={() => navigation.navigate('Sign-In')}
        />
      </View> 
    )
}