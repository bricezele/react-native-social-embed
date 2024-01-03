import * as React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { FacebookEmbed, multiply } from 'react-native-social-embed'

export default function App() {
    const [result, setResult] = React.useState<number | undefined>()

    React.useEffect(() => {
        multiply(3, 7).then(setResult)
    }, [])

    return (
        <View style={styles.container}>
            <Text>Result: {result}</Text>
            <FacebookEmbed url="https://www.facebook.com/" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
})
