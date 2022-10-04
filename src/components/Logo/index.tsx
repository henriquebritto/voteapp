import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function Logo(){
    return(
        <View style={styles.caixaLogo}>

            <Text style={styles.logoUm}>
                VOTE
            </Text>

            <Text style={styles.logoDois}>
                APP
            </Text>

        </View>
    );
};