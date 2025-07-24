import React, { useEffect, useState } from 'react'
import { StyleSheet, Animated } from 'react-native'

export default function Animation2() {

    const [animation] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animation, {
            toValue: 450,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }, [])

    return (
        <Animated.View
            style={[
                styles.box,
                {
                    width: animation,
                    height: animation
                }
            ]}
        >
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})