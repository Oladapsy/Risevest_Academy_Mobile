import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import ChilliIcon from './ChilliIcon';

// store the height and width of the device screen
const { height, width } = Dimensions.get('window');

// the delay prop will help to stagger the animation of multiple Chillis
function Chilli({ delay }: { delay: number }) {

    const y = useRef(new Animated.Value(-50)).current; // initial y position above the screen
    const x = Math.random() * width; // random x position across the screen width

    useEffect(() => {
        Animated.loop(
            Animated.sequence(
                [Animated.timing(y, {
                    toValue: height, duration: 6000,
                    delay, useNativeDriver: true,
                }),
                Animated.timing(y, {
                    toValue: -50,
                    duration: 0,
                    useNativeDriver: true,
                }),
                ])).start();
    }, [y, delay]);

    return (
        <Animated.Text
            style={{
                position: "absolute",
                left: x, transform: [{ translateY: y }],
                fontSize: 28,
            }}
        >
            <ChilliIcon />
        </Animated.Text>
    )
}

export default Chilli;