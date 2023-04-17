import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ipage } from "../../../App";
import { styles } from "./styles"

export function Pagina2({setPageI}: Ipage) {
    return (
        <View style={styles.container}> 
            <Text>Página 2</Text>
            <TouchableOpacity onPress={()=> setPageI(1)}>
            <Text style={styles.botao}>{'<<'}</Text>
            </TouchableOpacity>
        </View>
    )
}