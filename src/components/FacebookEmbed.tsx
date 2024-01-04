import React, { useState } from 'react'
import type { WebViewMessageEvent, WebViewProps } from 'react-native-webview'
import { WebView } from 'react-native-webview'
import { generateFacebookEmbedHtml } from '../utils/generate'

type FacebookEmbedProps = Omit<WebViewProps, 'source'> & {
    url: string
    width?: string | number
    height?: number
}

const FacebookEmbed: React.FC<FacebookEmbedProps> = ({ url, height = 100, ...props }) => {
    const htmlEmbedCode = generateFacebookEmbedHtml(url)
    const [windowHeight, setWindowHeight] = useState(height)
    const onWebViewMessage = (event: WebViewMessageEvent): void => {
        setWindowHeight(Number(event.nativeEvent.data))
        console.log('Height', Number(event.nativeEvent.data))
    }
    return (
        <WebView
            originWhitelist={['*']}
            source={{ html: htmlEmbedCode }}
            onMessage={onWebViewMessage}
            injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
            style={{ width: 300, height: windowHeight, borderWidth: 1, borderColor: 'black' }}
            {...props}
        />
    )
}

export default FacebookEmbed
