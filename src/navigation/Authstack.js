import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/loginScreen';
import SignInScreen from '../screens/signinScreen';
import StartScreen from '../screens/StartScreen';

const Stack = createNativeStackNavigator();

export function AuthStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                name={"Start"}
                component={StartScreen}
            />

            <Stack.Screen
                name={'Sign In'}
                component={SignInScreen}
            />

             <Stack.Screen
                name={'Login'}
                component={LoginScreen}
            />
            
            </Stack.Navigator>           
        </NavigationContainer>
    )
}