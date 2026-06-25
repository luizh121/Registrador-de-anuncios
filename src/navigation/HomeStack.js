import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
import SignInScreen from '../screens/signinScreen';
import HomeScreen from '../screens/HomeScreen';
import StartScreen from '../screens/StartScreen';
import CreateAdScreen from '../screens/CreateAdScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image, View, Pressable} from 'react-native';
import { styles } from '../../style/styles';
import Profile from '../../components/Profile';



const Stack = createNativeStackNavigator();

export function HomeStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator>

                 <Stack.Screen
                    name={"Start"}
                    component={StartScreen}
                />

                <Stack.Screen
                    name={"Login"}
                    component={LoginScreen}
                />

                 <Stack.Screen
                    name={"SignIN"}
                    component={SignInScreen}
                />

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

            </Stack.Navigator>
        </NavigationContainer>
       
    )
}

