import {Text, View}               from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import {useState}                 from 'react'
import { styles }                 from '../../style/styles';
import { setEmail, setUid, setUsername}        from '../redux/userSlice'
import { login }                  from '../services/authService';
import { useNavigation}           from '@react-navigation/native';
import {Input}                    from '../../components/input';
import Navibutton                 from '../../components/Navibutton';
import { getDoc, doc }            from 'firebase/firestore';
import { db }                     from '../../firebaseConfig';


export default function LoginScreen({navigation}) {

 
  const email                       = useSelector( (state) => state.user.email);
  const dispatch                    = useDispatch();
  const [inputSenha, setInputSenha] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [aviso, setAviso]           = useState('');

  async function realizarLogin() {

    if(!inputEmail || !inputSenha){
      setAviso('Preencha todos os campos.');
    }else{
        try{
          const userCredential = await login(inputEmail, inputSenha);

            const uid = userCredential.user.uid;

            const docSnap = await getDoc(
              doc(db, "usuarios", uid)
            ); //procura pelo registro do usuário no firebase e o armazena como objeto

            const dados = docSnap.data(); //extrai os dados de docSnap e os armazena

          dispatch(
            setEmail(userCredential.user.email)
          );

          dispatch(
            setUid(uid)
          );

          //atualiza o nome de usuário no redux para o nome encontrado no objeto armazenado em "dados"
          dispatch(
            setUsername(dados.nome) 
          );

        setAviso('');
        //navigation.navigate('Home');

      }catch(erro){
        console.log('Erro:', erro.code);
        console.log(erro.message);

        switch(erro.code){
          case "auth/invalid-email":
            setAviso("Email inválido.");
            break;

          case "auth/invalid-credential":
            setAviso("Senha/email incorreto ou não existente.");
            break;
          
          default:
            setAviso("Erro ao fazer login.");
        }
      }      
    } 
   
  }

  return (
    <View style={styles.container}> 

      <Text style={styles.aviso}>{aviso}</Text>

       <Input
        placeholder= 'Digite seu E-mail' 
        value={inputEmail}
        onChangeText={setInputEmail}      
      />

      <Input
        placeholder= 'Digite a sua senha'
        value={inputSenha}
        secureTextEntry = {true}
        onChangeText={setInputSenha}
      />

     

      <Navibutton
        title= "Entrar"
        onPress={realizarLogin}
      />
    </View>
  );
}