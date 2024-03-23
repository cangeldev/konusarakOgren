import { StyleSheet } from "react-native"
import colors from "assets/colors/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 10
    },
    title: {
        alignSelf: "center",
        fontSize: 22,
        color: colors.black,
        fontWeight: "700",
        marginVertical: 10
    },
    separator: {
        height: 10
    },
    columnWrapper: {
        justifyContent: 'space-around'
    }
})