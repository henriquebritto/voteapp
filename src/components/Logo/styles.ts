import { Theme } from "../../styles/theme";
import { Inter_200ExtraLight, Inter_700Bold } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    caixaLogo:{
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "row",
        paddingBottom: 9,
    },

    logoUm: {
        fontFamily: 'Inter_200ExtraLight',
        color: Theme.colors.logo,
        fontSize: 36,
    },

    logoDois: {
        fontFamily: 'Inter_700Bold',
        fontWeight: 'bold',
        fontStyle: "italic", 
        fontSize: 36,
        color: Theme.colors.logo,
    },

});