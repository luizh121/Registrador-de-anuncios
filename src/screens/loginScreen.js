import {Text, View}  from 'react-native';
import {useSelector, useDispatch}                    from 'react-redux'
import {useState}                                    from 'react'
import { styles }                                    from '../../style/styles';
import { setEmail, setUid}                  from '../redux/userSlice'
import { login }                                     from '../services/authService';
import { useNavigation}                              from '@react-navigation/native';
import {Input}                                         from '../../components/input';
import Navibutton                                    from '../../components/Navibutton';


export default function LoginScreen({navigation}) {

 
  const email                       = useSelector( (state) => state.user.email);
  const dispatch                    = useDispatch();
  const [inputSenha, setInputSenha] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  async function realizarLogin() {

    if(!inputEmail || !inputSenha){
      return alert('Preencha todos os campos.');
    }else{
        try{
          const userCredential = await login(inputEmail, inputSenha);
          
          dispatch(
            setEmail(userCredential.user.email)
          );

          dispatch(
            setUid(userCredential.user.uid)
          );

        console.log(userCredential.user);
        console.log('Sucesso');

        navigation.navigate('Home')

      }catch(erro){
        console.log('Erro:', erro.code);
        console.log(erro.message);
      }      
    } 
   
  }

  return (
    <View style={styles.container}> 
     
      <Input
        placeholder= 'Digite a sua senha'
        value={inputSenha}
        secureTextEntry = {true}
        onChangeText={setInputSenha}
      />

      <Input
        placeholder= 'Digite seu E-mail' 
        value={inputEmail}
        onChangeText={setInputEmail}
        
      />

      <Navibutton
        title= "Entrar"
        onPress={realizarLogin}
      />
    </View>
  );
}