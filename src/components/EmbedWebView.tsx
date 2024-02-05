import React from 'react'
import type { WebViewProps } from 'react-native-webview'
import AutoHeightWebView from 'react-native-autoheight-webview'
import { isAndroid } from '../utils/platform'

const EmbedWebView: React.FC<WebViewProps> = ({ ...props }) => {
    return (
        <AutoHeightWebView
            originWhitelist={['*']}
            scalesPageToFit={isAndroid}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            bounces={false}
            viewportContent={'width=device-width, user-scalable=no'}
            style={props.style}
            {...props}
        />
    )
}

export default EmbedWebView
