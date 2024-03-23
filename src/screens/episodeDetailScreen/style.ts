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
    },
    characterItem: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        elevation: 3,
    },
    characterImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },
    characterName: {
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
        color: colors.black
    }
})