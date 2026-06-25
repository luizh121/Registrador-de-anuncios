import { View, Text, FlatList} from 'react-native';
import { styles } from '../../style/styles';
import { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Navibutton from '../../components/Navibutton';
import {collection, onSnapshot, query, where} from "firebase/firestore";
import { db }                                   from '../../firebaseConfig';
import Card                                     from '../../components/Card';
import { setUid, setUsername  } from '../redux/userSlice';

export default function MyAdsScreen({navigation}){

    const uid = useSelector(state => state.user.uid)
    const [anuncios, setAnuncios] = useState([]);
   
      useEffect( () => {
          

        const q = query(
            collection(db, "anuncios"),
            where("uid", "==", uid)
        );

        const printarAnuncio = onSnapshot(
        q,
        collection(db, "anuncios"), 
        (snapshot) => {
            const lista = [];
            
            snapshot.forEach( (doc) =>{
                lista.push( {
                    id: doc.id,
                    ...doc.data(),
                });
            });
    
            setAnuncios(lista);
        }
        );
        return () => printarAnuncio();
  } , []);

    return(
        <View style={styles.container}>
             <FlatList
                data={anuncios}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card
                        title={item.titulo}
                        description={item.descricao}
                        user={item.nome}
                        dateTime={item.createdAt}
                        price={item.preco}
                    />
                )}

                ListEmptyComponent={
                    <Text style={styles.paragraph}>Nenhum anúncio registrado.</Text>
                }
       
        />
        </View>
    )
}