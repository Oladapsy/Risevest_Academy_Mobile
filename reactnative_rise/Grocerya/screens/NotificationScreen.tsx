import HeaderText from '@/components/onboarding/HeaderText'
import PrimaryButton from '@/components/onboarding/PrimaryButton'
import ScreenHeader from '@/components/onboarding/ScreenHeader'
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Notification from "@/assets/svg/notification.svg";
import SecondaryButton from '@/components/onboarding/SecondaryButton';

const NotificationScreen = () => {

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

                    {/* header */}
                    <HeaderText
                        title='Lastly, please enable notification'
                        subtitle='Enable your notifications for more update and important messages about your grocery needs' />

                    {/* image */}
                    <Notification width={200} height={200} style={styles.image} />

                </View>

                {/* button */}
                <PrimaryButton text='Enable Notifications' onPress={handleContinue} />
                <SecondaryButton text='Skip For Now' onpress={console.log("Skip for now pressed")} />
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

export default NotificationScreen;