import React, { useEffect, useState } from 'react'
import { StyleSheet, Animated, View } from 'react-native'

export default function Animation3() {

    const [animation] = useState(new Animated.Value(14))

    useEffect(() => {
        Animated.timing(
            animation, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false
        }).start()
    }, [])

    return (
        <View>
            <Animated.Text
                style={[styles.text, { fontSize: animation }]}
            >
                Timing animation 3
            </Animated.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
})