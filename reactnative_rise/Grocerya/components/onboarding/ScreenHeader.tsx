import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import QuestionMark from "@/assets/svg/question.svg";
import Back from "@/assets/svg/back.svg";

interface ScreenHeaderProps {
    showBack?: boolean;
    showHelp?: boolean;
    onHelpPress?: () => void;
}

const ScreenHeader = ({
    showBack = false,
    showHelp = true,
    onHelpPress,
}: ScreenHeaderProps) => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Left */}
            <View style={styles.left}>
                {showBack && (
                    <TouchableOpacity onPress={() => router.back()}>
                        <Back width={19} height={19} />
                    </TouchableOpacity>
                )}
            </View>

            {/* Right */}
            <View style={styles.right}>
                {showHelp && (
                    <TouchableOpacity onPress={onHelpPress}>
                        <View style={styles.helpCircle}>
                            <QuestionMark width={14} height={14} />
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 40,
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        marginHorizontal: 5,
    },
    left: {
        width: 40,
    },
    right: {
        width: 40,
        alignItems: "flex-end",
    },
    helpCircle: {
        width: 32,
        height: 32,
        borderRadius: 14,
        backgroundColor: "#F8F8F8",
        alignItems: "center",
        justifyContent: "center",
    },
});
export default ScreenHeader;