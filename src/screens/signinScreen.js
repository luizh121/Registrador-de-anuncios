import {Text, View}  from 'react-native';
import {useState}                                    from 'react'
import { styles }                                    from '../../style/styles';
import {useSelector, useDispatch}                    from 'react-redux'
import {setUid, setEmail, setUsername}                            from '../redux/userSlice'
import { auth }                                      from '../services/authService';
import { cadastrar }                                 from '../services/authService';
import { useNavigation }                             from '@react-navigation/native';
import Navibutton                                    from '../../components/Navibutton';
import {Input}                                       from '../../components/input';
import { db } from '../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';


export default function SignInScreen({navigation}){

     const [inputEmail, setInputEmail] = useState('');
     const [inputSenha, setInputSenha] = useState('');
     const [inputUsername, setInputUsername] = useState('');
     const [aviso, setAviso] = useState('');
    
     const dispatch = useDispatch();


     async function fazerCadastro() {

        if(!inputEmail || !inputSenha || !inputUsername){
            setAviso("Preencha todos os campos.");
        }else{
             try{
               const userCredential = await cadastrar(inputEmail, inputSenha); 
               const uid = userCredential.user.uid;
               const email = userCredential.user.email;
               
               setAviso("");
               
                //guarda email após o cadastro        
                dispatch(
                    setEmail(email)
                );

                //guarda uid após o cadastro
                dispatch(
                    setUid(uid)
                );

                dispatch(
                    setUsername(inputUsername)
                )


                //salva os dados no firebase
                await setDoc(
                    doc(db, "usuarios", uid), {
                        nome: inputUsername,
                        email: email,
                    }
                )

                console.log(userCredential.user.uid);
                console.log(userCredential.user.email);
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
                placeholder="Nome de usuário"
                value={inputUsername}
                onChangeText={setInputUsername}
           />

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