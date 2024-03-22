import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#FFDDFF",
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 5
    },
    title: {
        backgroundColor: "#FFDDFF",
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: '600',
        minWidth: 100
    },
    infoText: {
        padding: 10,
        flex: 1,
        fontSize: 16
    }
})