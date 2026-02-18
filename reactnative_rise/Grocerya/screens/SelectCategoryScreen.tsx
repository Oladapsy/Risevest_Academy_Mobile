import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategorySelector from '../components/onboarding/CategorySelector';
import HeaderText from '../components/onboarding/HeaderText';
import PrimaryButton from '../components/onboarding/PrimaryButton';
import ScreenHeader from '../components/onboarding/ScreenHeader';
import { useRouter } from 'expo-router';


const categories = [
    "Gluten-Free",
    "Vegan Friendly",
    "Raw Meat",
    "Organic",
    "Dairy-Free",
    "Sugar-Free",
    "Cruelty-Free",
    "Processed Food",
    "Show +22 More",
]

const SelectCategoryScreen = () => {

    const router = useRouter();

    const handleContinue = () => {
  console.log("Next Stage Maps/ Location");

  router.push('/location');
};
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.conatiner}>
                {/* ── Help and back icon ───*/}
                <ScreenHeader showHelp={true} showBack={true} />

                <View style={styles.mainText}>
                    {/* header */}
                    <HeaderText
                        title='All your grocery need in one place'
                        subtitle='Select your desired shop category'/>

                    <CategorySelector categories={categories} onselect={console.log} />
                </View>
                {/* button */}
                <PrimaryButton text='Continue' onPress={handleContinue} />
            </View>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
    },
    mainText: {
        flex: 1,
        justifyContent: 'center',
    }
})
export default SelectCategoryScreen