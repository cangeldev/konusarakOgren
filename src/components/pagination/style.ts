import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        marginTop: 15
    },
    title: {
        fontSize: 25,
        color: colors.black,
        fontWeight: "bold",
        marginBottom: 10
    },
    pageText: {
        color: colors.black,
        fontSize: 16
    }
})