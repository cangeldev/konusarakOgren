import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
        flexDirection: "row", flexWrap: 'wrap'
    },
    image: {
        width: 120,
        height: 70,
        borderRadius: 5
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.black,
    },
    innerContainer:
    {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 10
    }
})