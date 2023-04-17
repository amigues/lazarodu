import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ipage } from "../../../App";
import { styles } from "./styles"

export function Pagina1({setPageI}: Ipage) {
    return (
        <View style={styles.container}> 
            <Text>Página 1</Text>
            <TouchableOpacity onPress={()=> setPageI(2)}>
                <Text>{'>>'}</Text>
            </TouchableOpacity>
        </View>
    )
}