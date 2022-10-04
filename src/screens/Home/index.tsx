import React from "react";
import { View, Text } from "react-native";
import { Button, Searchbar, Appbar } from "react-native-paper";
import { Logo } from "../../components/Logo";
import { Candidatos } from "../../components/Candidatos";
import { styles } from "./styles";




export function Home(){
    return(
    <View style={styles.container}>    
        <View style={styles.header}>
            <Logo/>
        </View>

        <View style={styles.fundo}>
            <Candidatos/>
        </View>
    </View>
    );
};