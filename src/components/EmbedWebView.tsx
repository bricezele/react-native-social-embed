import React from 'react'
import type { WebViewProps } from 'react-native-webview'
import AutoHeightWebView from 'react-native-autoheight-webview'
import { isAndroid } from '../utils/platform'
import { StyleSheet } from 'react-native'

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
            containerStyle={[styles.containerStyle, props.containerStyle]}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 3,
        borderColor: 'blue',
    },
})

export default EmbedWebView
