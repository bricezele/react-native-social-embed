import React from 'react'
import type { WebViewProps } from 'react-native-webview'
import { WebView } from 'react-native-webview'
import { generateFacebookEmbedHtml } from '../utils/generate'

type FacebookEmbedProps = Omit<WebViewProps, 'source'> & {
    url: string
    /*    width?: string | number
    height?: string | number*/
}

const FacebookEmbed: React.FC<FacebookEmbedProps> = ({ url, ...props }) => {
    const htmlEmbedCode = generateFacebookEmbedHtml(url)
    return (
        <WebView
            originWhitelist={['*']}
            source={{ html: htmlEmbedCode }}
            style={{ width: 300, height: 300, borderWidth: 1, borderColor: 'black' }}
            {...props}
        />
    )
}

export default FacebookEmbed
