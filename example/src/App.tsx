import * as React from 'react'

import { ScrollView, StyleSheet, View } from 'react-native'
import { FacebookEmbed } from 'react-native-social-embed'

export default function App() {
    return (
        <View style={styles.centered}>
            <ScrollView contentContainerStyle={styles.container}>
                <FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/451971596293956" />
                <FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/479747760183006" />
                <FacebookEmbed url="https://www.facebook.com/TF1/videos/446997414358194" />
                <FacebookEmbed url="https://www.facebook.com/reel/976108007224050" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    centered: {
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
