/**
 * @Project react-native-social-embed
 * @File FacebookEmbed.tsx
 * @Path src/components
 * @Author BRICE ZELE
 * @Date 03/01/2024
 */
import React from 'react'
import type { WebViewProps } from 'react-native-webview'
import { WebView } from 'react-native-webview'

type FacebookEmbedProps = WebViewProps & {
    url: string
    /*    width?: string | number
    height?: string | number*/
}

const FacebookEmbed: React.FC<FacebookEmbedProps> = ({ url, ...props }) => {
    return <WebView source={{ uri: url }} style={{ flex: 1 }} {...props} />
}

export default FacebookEmbed
