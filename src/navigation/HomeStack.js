import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
import SignInScreen from '../screens/signinScreen';
import HomeScreen from '../screens/HomeScreen';
import StartScreen from '../screens/StartScreen';

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
                />
            </Stack.Navigator>
        </NavigationContainer>
       
    )
}

