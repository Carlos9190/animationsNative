import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

export default function Animation1() {

    const [animation1] = useState(new Animated.Value(0))
    const [animation2] = useState(new Animated.Value(-50))

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation2, {
                    toValue: -30,
                    duration: 0,
                    useNativeDriver: false
                }),
                Animated.timing(animation1, {
                    toValue: 60,
                    duration: 500,
                    useNativeDriver: false
                }),
                Animated.timing(animation2, {
                    toValue: 30,
                    duration: 500,
                    useNativeDriver: false
                }),
                Animated.timing(animation1, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false
                }),
                Animated.timing(animation2, {
                    toValue: -30,
                    duration: 500,
                    useNativeDriver: false
                })
            ])
        ).start()
    }, [])

    const animationStyle = {
        transform: [
            { translateY: animation1 },
            { translateX: animation2 }
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
        width: 10,
        height: 10,
        backgroundColor: 'cornflowerblue'
    }
})