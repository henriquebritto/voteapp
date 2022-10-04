import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Button } from 'react-native-paper'

export function Candidatos(){
    return(
        <View style={styles.container}>
            <View style={styles.caixa}>
                <View>
                    <Image
                    style={styles.foto}
                    source={{
                        uri: 'https://github.com/henriquebritto.png'
                    }}
                    />
                </View>

                <View style={styles.candidatoInfo}>
                    <Text style={styles.nomeCandidato}>
                        Henrique
                    </Text>

                    <Text style={styles.nomePartido}>
                        ReactNative
                    </Text>

                    <Text style={styles.porcentagemVotos}>
                        100%
                    </Text>

                    <Text style={styles.votosTotais}>
                        100.000.000
                    </Text>
                </View>
            </View>
        </View>
    )
}
