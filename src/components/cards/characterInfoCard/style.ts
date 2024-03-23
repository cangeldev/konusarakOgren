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
    imageContainer: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        backgroundColor: "#A9D3E9",
        justifyContent: "center"
    },
    image: {
        width: 24,
        height: 24,
        tintColor: colors.white
    },
    infoText: {
        padding: 10,
        flex: 1,
        fontSize: 16
    },
    aliveStatusImage: {
        width: 24,
        height: 24,
        alignSelf: "center",
        marginRight: 10,
        tintColor: "green"
    },
    deadStatusImage: {
        width: 24,
        height: 24,
        alignSelf: "center",
        marginRight: 10
    }
})