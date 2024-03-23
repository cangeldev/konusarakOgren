import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        width: "48%",
        backgroundColor: "yellow",
        padding: 10,
        borderRadius: 10
    },
    image: {
        width: "100%",
        height: 100,
        borderRadius: 10
    },
    title: {
        color: colors.white,
        alignSelf: "center",
        marginTop: 5,
        fontSize: 16
    },
    favoriIconCotainer: {
        width: 24,
        height: 24,
        position: "absolute",
        top: 20,
        right: 20
    },
    favoriIcon: {
        width: "100%",
        height: "100%"
    },

})