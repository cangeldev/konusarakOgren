import { StyleSheet } from "react-native"
import colors from "assets/colors/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: colors.white
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center'
    },
    episodeContainer: {
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: colors.white
    },
    detailText: {
        fontSize: 16,
        marginBottom: 10
    },
    boldText: {
        fontWeight: 'bold'
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
    }
})