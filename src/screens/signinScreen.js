import {Text, View}  from 'react-native';
import {useState}                                    from 'react'
import { styles }                                    from '../../style/styles';
import {useSelector, useDispatch}                    from 'react-redux'
import {setUid, setEmail}                            from '../redux/userSlice'
import { auth }                                      from '../services/authService';
import { cadastrar }                                 from '../services/authService';
import { useNavigation }                             from '@react-navigation/native';
import Navibutton                                    from '../../components/Navibutton';
import {Input}                                       from '../../components/input';


export default function SignInScreen({navigation}){

     const [inputEmail, setInputEmail] = useState('');
     const [inputSenha, setInputSenha] = useState('');
     const [aviso, setAviso] = useState('');


     async function fazerCadastro() {

        if(!inputEmail || !inputSenha){
            setAviso("Preencha ambos os campos.");
        }else{
             try{
                await cadastrar(inputEmail, inputSenha);
                setAviso("");
                console.log("Sucesso");
                navigation.navigate("Home");

            }catch(erro){
                switch(erro.code){
                    case "auth/weak-password":
                         setAviso("A senha precisa ter pelo menos 6 caracteres.");
                         break;
                    
                    case "auth/email-already-in-use":
                        setAviso("Email já registrado.")
                        break;

                    case "auth/invalid-email":
                        setAviso("Email inválido.")
                        break; 
                    
                    default:
                        setAviso("Erro ao realizar cadastro.");
                        break;
                }

                console.log("Erro: ", erro.message);              
            }
        }       
     }
  
    
    return (
     <View style={styles.container}>

           <Text style={styles.aviso}>{aviso}</Text>

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
                title= 'Cadastrar'
                onPress={fazerCadastro}
              />

              <Navibutton
                title="Ir para tela de Login"
                onPress={() => navigation.navigate('Login')}
             />



     </View>
    )
}