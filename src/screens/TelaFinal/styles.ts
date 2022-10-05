import { StyleSheet } from "react-native";
import { Theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    mainInfos: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: Theme.colors.header,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    tsePic: {
        width: 271,
        height: 125,
        marginTop: 168,
        marginBottom: 65,
    },
    textoInfo: {
        color: Theme.colors.logo,
        textAlign: 'center',
        fontSize: 10,
        padding: 33,
    },
    infoProtocolo:{
        color: Theme.colors.logo,
        textAlign: 'center',
        fontSize: 10,
        paddingTop: 39,
        fontWeight: 'bold',
    },
    listaEstados:{
        textAlign: 'center',
        fontSize: 10,
        paddingTop: 16,
        paddingHorizontal: 36,
        color: Theme.colors.subTitle,
    },
});