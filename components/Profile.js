import { View, Image, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../style/styles";

export default function (){
    const navigation = useNavigation();

    return(
         <View style={styles.profile}>
            <Pressable onPress={() => navigation.navigate("Profile")}>
                <Image
                source={require('../img/profileTemplate.webp')}
                style={styles.profileImg}
                />
            </Pressable>                                      
        </View>
    )
}