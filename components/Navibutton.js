import { Button } from "react-native";
import { styles } from "../style/styles";

export default function Navibutton({title, onPress}){
    return(      
        <Button
          title= {title}
          style={styles.button}
          onPress={onPress}
        />
    )
}