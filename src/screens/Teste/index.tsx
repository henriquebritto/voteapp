import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./styles";
import  enterScreen  from '../../../assets/enterScreen.png';
import { useNavigation } from "@react-navigation/core";

export function Teste() {
    const {navigate} = useNavigation();
  return (
    
    <View style={styles.container}>
        <View style={styles.splashArt}>

            <Image 
            source={ enterScreen }
            />

        </View>

        <View>
            <Button
                icon="bullseye-arrow"
                mode= "elevated"
                onPress={() => {
                    //@ts-ignore
                    navigate("Home")
                }}
                buttonColor= '#688755'
                textColor= '#353535'
                style= {styles.botaoResults}
            >
                Resultados
            </Button>
        </View>
    </View>
    );
}
