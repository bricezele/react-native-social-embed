import React from 'react'
import type { WebViewProps } from 'react-native-webview'
import AutoHeightWebView from 'react-native-autoheight-webview'

const EmbedWebView = React.forwardRef<AutoHeightWebView, WebViewProps>((props, ref) => (
    <AutoHeightWebView
        ref={ref}
        originWhitelist={['*']}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scalesPageToFit
        webviewDebuggingEnabled
        bounces={false}
        viewportContent={'width=device-width, user-scalable=no'}
        {...props}
    />
))

export default EmbedWebView
