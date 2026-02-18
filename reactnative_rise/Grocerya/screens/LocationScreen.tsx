import HeaderText from '@/components/onboarding/HeaderText'
import PrimaryButton from '@/components/onboarding/PrimaryButton'
import ScreenHeader from '@/components/onboarding/ScreenHeader'
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from "@/assets/svg/map.svg";
import SecondaryButton from '@/components/onboarding/SecondaryButton';

const LocationScreen = () => {

    const router = useRouter();

    const handleContinue = () => {
        console.log("Final stage next notification");
        router.push('/notification');
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                {/* ── Help and back icon ───*/}
                <ScreenHeader showHelp={true} showBack={true} />

                <View style={styles.mainText}>

                    {/* image */}
                    <Map width={200} height={200} style={styles.image} />
                    {/* header */}
                    <HeaderText
                        title='Set your location'
                        subtitle='This let us know your location for best shipping experience' />

                </View>

                {/* button */}
                <PrimaryButton text='Continue' onPress={handleContinue} />
                <SecondaryButton text='Set Manually' onpress={console.log("Set manually pressed")} />
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#FFFFFF",
    },
    mainText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginBottom: 20,
    }

})

export default LocationScreen;