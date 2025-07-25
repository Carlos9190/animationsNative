import React, { useState } from 'react'
import { Animated, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

export default function Animation1() {

    const [animation] = useState(new Animated.Value(1))

    const pressBtn = () => {
        Animated.spring(animation, { // .sping() is softer than .timing()
            toValue: .8,
            useNativeDriver: false
        }).start()
    }

    const unPressBtn = () => {
        Animated.spring(animation, {
            toValue: 1,
            friction: 4, // Higher value, more bounce
            tension: 100, // Higher value, more tension in the animation
            useNativeDriver: false // Mandatory
        }).start()
    }

    const animationStyle = {
        transform: [{ scale: animation }]
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPressIn={() => pressBtn()}
                onPressOut={() => unPressBtn()}
            >
                <Animated.View style={[styles.btn, animationStyle]}>
                    <Text style={styles.text}> Log in </Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
})