import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Animated } from 'react-native'

export default function Animation2() {

    const [animation1] = useState(new Animated.Value(0))
    const [animation2] = useState(new Animated.Value(1))

    useEffect(() => {
        Animated.sequence([
            Animated.timing(animation1, {
                toValue: 300,
                duration: 1000,
                useNativeDriver: false
            }),
            Animated.spring(animation2, {
                toValue: 10,
                useNativeDriver: false
            }),
            Animated.spring(animation2, {
                toValue: 1,
                useNativeDriver: false
            }),
            Animated.timing(animation1, {
                toValue: 600,
                duration: 1000,
                useNativeDriver: false
            }),
        ]).start()
    }, [])

    const animationStyle = {
        transform: [
            { translateY: animation1 },
            { scale: animation2 }
        ]
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Animated.View
                style={[
                    styles.box,
                    animationStyle
                ]}
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