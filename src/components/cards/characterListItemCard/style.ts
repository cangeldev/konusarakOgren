import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15
    },
    characterImage: {
        width: 90,
        height: 90,
        borderRadius: 50
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 10,
        color: colors.black
    }
})