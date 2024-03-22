import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        flex: 1
    },
    bgImage: {
        width: "100%",
        height: "10%",
        resizeMode: "center"
    }
})