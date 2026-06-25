import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CreateAdScreen from '../screens/CreateAdScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image, View, Pressable} from 'react-native';
import { styles } from '../../style/styles';
import Profile from '../../components/Profile';
import MyAdsScreen from '../screens/MyadsScreen';



const Stack = createNativeStackNavigator();

export function HomeStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator>

                 <Stack.Screen
                    name={"Home"}
                    component={HomeScreen}
                    options={{ //customiza o header de Home
                        headerRight: () => (
                            <Profile/>                        
                        )
                    }}
                />

                <Stack.Screen
                    name={"CreateAd"}
                    component={CreateAdScreen}
                />

                <Stack.Screen
                    name={"Profile"}
                    component={ProfileScreen}
                    options={{
                        headerRight: () => (
                                <Profile/>                        
                        )
                    }}
                />

                <Stack.Screen
                    name={"MyAds"}
                    component={MyAdsScreen}
                    options={{
                        headerRight: () => (
                                <Profile/>                        
                        )
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
       
    )
}

