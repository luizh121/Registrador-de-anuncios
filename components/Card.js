import {styles} from "../style/styles";
import {View, Text} from "react-native";
import Navibutton from "./Navibutton";

export default function Card({
    title,
    description,
    user,
    dateTime,
    price,
}){
    return(
         <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text numberOfLines={3} style={styles.cardText}>{description}</Text>
            <Text style={styles.cardUser}>{user}</Text>
            <Text style={styles.cardDate}>{dateTime}</Text>
            
            <View style={styles.cardFooter}>
                <Text style={styles.cardPrice}>R${price},00</Text> 
                <Navibutton title= "Adicionar ao carrinho"/>
            </View>
    </View>
      
    );
}