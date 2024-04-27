import React, { useMemo, useRef } from 'react'
import type { WebViewNavigation, WebViewProps } from 'react-native-webview'
import { type FacebookParams, generateFacebookEmbedHtml } from '../utils/generate'
import EmbedWebView from './EmbedWebView'
import { StyleSheet } from 'react-native'
import type AutoHeightWebView from 'react-native-autoheight-webview'
import { FACEBOOK_EMBED_INJECTED_SCRIPT } from '../utils/webscript'

type FacebookEmbedProps = Omit<WebViewProps, 'source'> & FacebookParams

const FacebookEmbed: React.FC<FacebookEmbedProps> = ({
    url,
    width = 500,
    lazy = false,
    showText = true,
    ...props
}) => {
    const webViewRef = useRef<AutoHeightWebView>(null)
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

    const onNavigationStateChange = (navState: WebViewNavigation): void => {
        if (!navState.loading) webViewRef.current?.injectJavaScript(FACEBOOK_EMBED_INJECTED_SCRIPT)
    }

    return (
        <EmbedWebView
            ref={webViewRef}
            onNavigationStateChange={onNavigationStateChange}
            style={[styles.webView, props.style]}
            {...props}
            webviewDebuggingEnabled
            source={{ html: htmlEmbedCode }}
        />
    )
}

const styles = StyleSheet.create({
    webView: { backgroundColor: 'transparent' },
})

export default FacebookEmbed
