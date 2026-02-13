import { Image, StyleSheet, View } from 'react-native';

export default function SplashScreenView() {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/images/icon.png')} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#0D0D0D",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            width: 200,
            height: 100,
            resizeMode: "contain",
        },
    }
)