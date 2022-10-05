import { StyleSheet } from "react-native";
import { Theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 10,
    },
    caixa: {
        backgroundColor: '#F1FAEE',
        height: 101,
        width: 350,
        borderRadius: 8,
        flexDirection: "row",
    },
    foto: {
        justifyContent: "center",
        alignItems: "center",   
        width: 100,     
        height: '100%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },

    candidatoInfo:{
        flexDirection: 'column',
        padding: 10,
    },

    nomeCandidato: {
        fontFamily: Theme.fonts.candNome,
        fontWeight: 'bold',
        color: Theme.colors.title,
    },
    nomePartido: {
        color: Theme.colors.subTitle,
    },
    porcentagemVotos: {
        fontFamily: Theme.fonts.candNome,
        fontWeight: 'bold',
        color: Theme.colors.title,
    },
    votosTotais: {
        color: Theme.colors.subTitle,
    },
});