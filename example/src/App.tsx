import * as React from 'react'

import { ScrollView, StyleSheet, View } from 'react-native'
import { FacebookEmbed } from 'react-native-social-embed'

export default function App() {
    return (
        <View style={styles.centered}>
            <ScrollView contentContainerStyle={styles.container}>
                <FacebookEmbed
                    url="https://www.facebook.com/andrewismusic/posts/451971596293956"
                    containerStyle={{ width: '100%' }}
                />
                <FacebookEmbed
                    containerStyle={{ width: '100%' }}
                    url="https://www.facebook.com/AfriqueMedia/videos/conference-de-presse-dabdoulaye-diop-laction-diplomatique-malienne-quelle-strat%C3%A9/1736492460178652/"
                />
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
