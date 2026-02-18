import { View, Text, StyleSheet } from "react-native";

interface MapAndNotTextProps {
    title: string;
    subtitle: string;
}

const MapAndNotText = ({ title, subtitle }: MapAndNotTextProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
    },
    title: {
        color: "#0D0D0D",
        fontFamily: "Poppins_600SemiBold",
        fontWeight: "semibold",
        fontSize: 20,
        marginBottom: 10,
    },
    subtitle: {
        color: "#777777",
        fontSize: 15,
        fontFamily: 'Poppins_500Medium',
        textAlign: "center",

    },
});

export default MapAndNotText;
