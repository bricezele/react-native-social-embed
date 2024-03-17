import React from 'react'
import type { WebViewProps } from 'react-native-webview'
import AutoHeightWebView from 'react-native-autoheight-webview'

const EmbedWebView: React.FC<WebViewProps> = ({ ...props }) => {
    return (
        <AutoHeightWebView
            originWhitelist={['*']}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scalesPageToFit
            webviewDebuggingEnabled={__DEV__}
            bounces={false}
            viewportContent={'width=device-width, user-scalable=no'}
            {...props}
        />
    )
}

export default EmbedWebView
