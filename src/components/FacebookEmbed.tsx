import React from 'react'
import type { WebViewProps } from 'react-native-webview'
import { generateFacebookEmbedHtml } from '../utils/generate'
import EmbedWebView from './EmbedWebView'
import type { StyleProp, ViewStyle } from 'react-native'
import { StyleSheet, View } from 'react-native'

type FacebookEmbedProps = Omit<WebViewProps, 'source'> & {
    url: string
    width?: number
    height?: number
    viewContainerStyle?: StyleProp<ViewStyle>
}

const FacebookEmbed: React.FC<FacebookEmbedProps> = ({
    url,
    height,
    width,
    viewContainerStyle,
    ...props
}) => {
    const htmlEmbedCode = generateFacebookEmbedHtml(url)

    return (
        <View style={[{ height, width }, styles.containerStyle, viewContainerStyle]}>
            <EmbedWebView
                style={[styles.webView, props.style]}
                {...props}
                source={{ html: htmlEmbedCode }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    webView: { backgroundColor: 'transparent' },
    containerStyle: {
        flex: 1,
    },
})

export default FacebookEmbed
