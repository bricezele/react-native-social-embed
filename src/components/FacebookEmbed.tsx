import React from 'react'
import type { WebViewProps } from 'react-native-webview'
import AutoHeightWebView from 'react-native-autoheight-webview'
import { generateFacebookEmbedHtml } from '../utils/generate'

type FacebookEmbedProps = Omit<WebViewProps, 'source'> & {
    url: string
    width?: string | number
    height?: number
}

const FacebookEmbed: React.FC<FacebookEmbedProps> = ({ url, ...props }) => {
    const htmlEmbedCode = generateFacebookEmbedHtml(url)
    /*    const [windowHeight, setWindowHeight] = useState(height)
    const onWebViewMessage = (event: WebViewMessageEvent): void => {
        setWindowHeight(Number(event.nativeEvent.data))
        console.log('Is Ios', Platform.OS === 'ios')
        console.log('Data', event.nativeEvent)
    }*/
    return (
        <AutoHeightWebView
            originWhitelist={['*']}
            source={{ html: htmlEmbedCode }}
            scrollEnabled={false}
            scalesPageToFit
            style={{
                width: 300,
            }}
            viewportContent={'width=device-width, user-scalable=no'}
            containerStyle={{
                borderWidth: 3,
                borderColor: 'blue',
            }}
            {...props}
        />
    )
}

export default FacebookEmbed
