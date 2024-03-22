import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#A9D3E9",
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 5
    },
    title: {
        backgroundColor: "#A9D3E9",
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: '600',
        minWidth: 105,
        color: colors.white
    },
    infoText: {
        padding: 10,
        flex: 1,
        fontSize: 16
    }
})