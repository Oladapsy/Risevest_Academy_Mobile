import React, { useState } from 'react';
import { Button, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Chilli from './component/firstAssignment/Chilli';

const FirstAssignment = () => {
    // state for full name to hold the input value
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View className='flex flex-1 pt-10 px-2 bg-background'>
            {Array.from({ length: 12 }).map((_, i) => (
                <Chilli key={i} delay={i * 500} />
            ))}
            <View className='bg-[#FFFFFF] py-8 px-4 rounded-3xl shadow-md'>
                <Text className='text-3xl mb-6 text-secondary font-bold font-fuzzy-bold text-center'>First Assignment Form</Text>

                {/* first name label */}
                <Text className='text-lg text-primary font-semibold mb-2'>Full Name:</Text>
                {/* Full name */}
                <TextInput
                    className='w-full border border-primary rounded-md px-3 py-2 mb-4'
                    placeholder='Enter your full name'
                    value={fullName}
                    placeholderTextColor='#666666'
                    onChangeText={setFullName}
                />

                {/* email label */}
                <Text className='text-lg text-primary font-semibold mb-2'>Email:</Text>
                {/* Email */}
                <TextInput
                    className='w-full border border-primary rounded-md px-3 py-2 mb-4'
                    placeholder='Enter your email'
                    keyboardType='email-address'
                    placeholderTextColor='#666666'
                    value={email}
                    onChangeText={setEmail}
                />

                {/* phone number label */}
                <Text className='text-lg text-primary font-semibold mb-2'>Phone Number:</Text>
                {/* Phone number */}
                <TextInput
                    className='w-full border border-primary rounded-md px-3 py-2 mb-4'
                    placeholder='Enter your phone number'
                    placeholderTextColor='#666666'
                    value={phoneNumber}
                    keyboardType='numeric'
                    onChangeText={setPhoneNumber}
                />

                {/* Description label */}
                <Text className='text-lg text-primary font-semibold mb-2'>Description:</Text>
                {/* Description */}
                <TextInput
                    className='w-full border border-primary rounded-md px-3 py-2 mb-4'
                    value={description}
                    placeholderTextColor='#666666'
                    onChangeText={setDescription}
                    multiline={true}
                    numberOfLines={4}
                    placeholder='Enter a brief description about yourself'
                />

                {/* Submit button */}
                <TouchableOpacity
                    className='bg-primary px-4 py-3 rounded-lg mt-4'
                    onPress={() => setModalVisible(true)}
                >
                    <Text className='text-white text-md font-fuzzy-bold text-center'>Submit</Text>
                </TouchableOpacity>
            </View>

            {/* Modal to show the entered details */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View className='flex flex-1 justify-center items-center bg-black/10'>
                    <View className='bg-background w-11/12 rounded-xl p-6 shadow-lg'>
                        <Text className='text-2xl font-bold font-fuzzy-bold text-primary mb-4'>Submitted Details</Text>
                        <Text className='mb-2'>Full Name: {fullName}</Text>
                        <Text className='mb-2'>Email: {email}</Text>
                        <Text className='mb-2'>Phone Number: {phoneNumber}</Text>
                        <Text className='mb-2'>Description: {description}</Text>

                        <Button title='close' color='#C49A58' onPress={() => setModalVisible(false)} />
                    </View>
                </View>

            </Modal>



        </View>
    )
}

export default FirstAssignment;

