import { TextInput } from "react-native";
import { styles } from "../style/styles";
import { useState } from "react";

export function Input({
    placeholder,
    numberOfLines = 1,
    keyboardType = 'default',
     value, 
     onChangeText, 
     secureTextEntry = false,
    })

    {
    return (
         <TextInput
                  style={styles.input}
                  placeholder={placeholder}
                  numberOfLines={numberOfLines}
                  editable={true}
                  value={value}
                  secureTextEntry={secureTextEntry}
                  onChangeText={onChangeText}
                  keyboardType={keyboardType}
                />
    )
}

