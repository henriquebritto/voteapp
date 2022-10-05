import React from 'react';
import { View, Text, Alert } from "react-native";
import { Button } from "react-native-paper";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/core";

export function SaibaMais(){
    const {navigate} = useNavigation();
    return(
        <View style={styles.container}>
                <Button
                icon="information-outline"
                mode= "text"
                onPress={() => {
                    //@ts-ignore
                    navigate("Creditos")
                }}
                buttonColor= '#C54D4D'
                textColor= '#FFFFFF'
                style= {styles.botaoInfo}
                
            >
            Sobre
            </Button>
        </View>
    );
};