import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        color: colors.black,
        fontWeight: "bold",
        marginBottom: 10
    }
})