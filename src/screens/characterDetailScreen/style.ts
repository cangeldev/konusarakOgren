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
    },
    favoriIconCotainer: {
        width: 40,
        height: 40,
        position: "absolute",
        top: 40,
        right: 20
    },
    favoriIcon: {
        width: "100%",
        height: "100%"
    },
    infoView: {
        marginVertical: 10,
        marginRight:50,
        marginLeft:10
    }
})