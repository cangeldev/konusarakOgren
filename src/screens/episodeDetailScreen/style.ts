import { StyleSheet } from "react-native"
import colors from "assets/colors/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: colors.white
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 10,
        color: colors.black
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        color: "#22a2bd",
        alignSelf: "center"
    },
    characterText: {
        fontSize: 14,
        marginLeft: 10
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    characterImage: {
        width: 90,
        height: 90,
        borderRadius: 50
    },
    episodeContainer: {
        marginBottom: 20,
    }
})