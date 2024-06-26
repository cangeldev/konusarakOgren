import { StyleSheet } from "react-native"
import colors from "assets/colors/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: colors.white
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        color: colors.customBlue,
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
    episodeContainer: {
        marginBottom: 20
    }
})