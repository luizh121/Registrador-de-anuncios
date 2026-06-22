import { TextInput } from "react-native";
import { styles } from "../style/styles";
import { useState } from "react";

export function Input({
    placeholder,
     value, 
     onChangeText, 
     secureTextEntry = false,
    })

    {
    return (
         <TextInput
                  style={styles.input}
                  placeholder={placeholder}
                  numberOfLines={1}
                  editable={true}
                  value={value}
                  secureTextEntry={secureTextEntry}
                  onChangeText={onChangeText}
                />
    )
}

