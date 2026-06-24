import { Button, View, StyleSheet } from "react-native";
import { styles } from "../style/styles";



export default function Navibutton({title, onPress}){
    return(  
        
        <View style={styles.button}>      
            <Button
            title= {title}
            onPress={onPress}
            />
        </View>
    )
}