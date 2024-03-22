import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    image: {
        width: "100%",
        height: "30%",
        resizeMode: "stretch"
    }
})