import React from 'react'
import type { WebViewProps } from 'react-native-webview'
import { generateFacebookEmbedHtml } from '../utils/generate'
import EmbedWebView from './EmbedWebView'
import { StyleSheet } from 'react-native'

type FacebookEmbedProps = Omit<WebViewProps, 'source'> & {
    url: string
}

const FacebookEmbed: React.FC<FacebookEmbedProps> = ({ url, ...props }) => {
    const htmlEmbedCode = generateFacebookEmbedHtml(url)

    return (
        <EmbedWebView
            style={[styles.webView, props.style]}
            {...props}
            source={{ html: htmlEmbedCode }}
        />
    )
}

const styles = StyleSheet.create({
    webView: { backgroundColor: 'transparent' },
})

export default FacebookEmbed
