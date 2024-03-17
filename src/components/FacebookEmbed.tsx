import React, { useMemo } from 'react'
import type { WebViewProps } from 'react-native-webview'
import { type FacebookParams, generateFacebookEmbedHtml } from '../utils/generate'
import EmbedWebView from './EmbedWebView'
import { StyleSheet } from 'react-native'

type FacebookEmbedProps = Omit<WebViewProps, 'source'> & FacebookParams

const FacebookEmbed: React.FC<FacebookEmbedProps> = ({
    url,
    width = 500,
    lazy = false,
    showText = true,
    ...props
}) => {
    // TODO ADD SCRIPT TO AUTO ADJUST IFRAME WIDTH
    const htmlEmbedCode = useMemo(
        () =>
            generateFacebookEmbedHtml({
                lazy,
                showText,
                width,
                url,
            }),
        [lazy, showText, width, url]
    )

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
