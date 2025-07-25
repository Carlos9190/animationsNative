import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Animated } from 'react-native'

export default function Animation1() {

    const [animation] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animation, {
            toValue: 1,
            duration: 500, // Time quantity
            useNativeDriver: false // Mandatory
        }).start() // Never forget .start() or the animation won't display
    }, [])

    return (
        <Animated.View
            style={{ opacity: animation }}
        >
            <Text style={styles.text}>Timing animation 1</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
})