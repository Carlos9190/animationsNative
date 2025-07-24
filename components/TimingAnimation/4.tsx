import React, { useEffect, useState } from 'react'
import { StyleSheet, Animated, View } from 'react-native'

export default function Animation4() {

    const [animation] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animation, {
            toValue: 360,
            duration: 500,
            useNativeDriver: false
        }).start()
    }, [])

    const interpolate = animation.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const animationStyle = {
        transform: [{ rotate: interpolate }]
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Animated.View
                style={[styles.box, animationStyle]}
            >
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})