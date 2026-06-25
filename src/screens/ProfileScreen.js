import { View, Text, Pressable} from 'react-native';
import { styles } from '../../style/styles';
import { useEffect, useState} from 'react';
import Navibutton from '../../components/Navibutton';
import { setUid, setEmail, setUsername } from '../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../services/authService';
import { auth } from '../../firebaseConfig';

export default function ProfileScreen({navigation}){

    const dispatch = useDispatch();
    const email = useSelector(state => state.user.email);
    const username = useSelector(state => state.user.username )

    async function Sair() {
        await logout();
        console.log('sucesso')

    }
    return(
        <View style={[styles.container, {justifyContent: 'flex-start'}]}>
            <View style={styles.ProfileScreenHeader}>
                <Text style={styles.username}>{username}</Text>
                <Pressable style={styles.logoutButton} onPress={Sair}>
                    <Text style={styles.logoutText}>Sair</Text>
                </Pressable>
            </View>


                <View style={{paddingTop: 50}}>
                    <Navibutton
                        title="Registrar anúncio"
                        onPress={() => navigation.navigate('CreateAd')}
                     />

                    <Navibutton
                        title="Ver anúncios registrados"
                        onPress={() => navigation.navigate('MyAds')}
                    />  
                </View>
            
            
        </View>
    )
}