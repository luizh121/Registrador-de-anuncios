import {Text, View}               from 'react-native';
import { useEffect, useState }    from 'react';
import { criarAnuncio }           from '../services/AdService';
import { Input }                  from '../../components/input';
import Navibutton                 from '../../components/Navibutton';
import { styles }                 from '../../style/styles';
import { setEmail, setUid}        from '../redux/userSlice';
import {useSelector, useDispatch} from 'react-redux';




export default function CreateAdScreen({navigation}){

    

    const [titulo, setTitulo]       = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco]         = useState('');
    const [aviso,setAviso]          = useState('');

    const uid   = useSelector((state) => state.user.uid)
    const email = useSelector((state) => state.user.email)
    



    async function SalvarAnuncio() {
        if(!titulo || !descricao || !preco){

            return(
                setAviso("Preencha todos os campos.")
            )

           
        } else if(isNaN(preco)){
                setAviso("Preço inválido");
            }else{
            try{
                await criarAnuncio(titulo, descricao, Number(preco), uid, email);
                console.log("Sucesso")
                navigation.goBack();
            }catch(erro){
                console.log("Erro: ", erro.message)
            }
        }
    }
    return(
        <View style={styles.container}>

            <Text style={styles.aviso}>{aviso}</Text>
            <Input
                placeholder="Título"
                value={titulo}
                onChangeText={setTitulo}
            />

            <Input
                placeholder="Descrição do anúncio"
                value={descricao}
                onChangeText={setDescricao}
                numberOfLines={3}
            />

              <Input
                placeholder="Preço"
                value={preco}
                onChangeText={setPreco}
                keyboardType='numeric'
            />

            <Navibutton
                title= "Registrar anúncio"
                onPress={SalvarAnuncio}
            />
        </View>
    )
}
