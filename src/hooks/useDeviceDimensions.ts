/**
 * @Project react-native-social-embed
 * @File useDeviceDimensions.ts
 * @Path src/hooks
 * @Author BRICE ZELE
 * @Date 18/03/2024
 */

import { Dimensions } from 'react-native'

type DeviceDimensions = {
    height: number
    width: number
}

export const useDeviceDimensions = (): DeviceDimensions => {
    // We need to use screen height instead of the window height
    // because window height doesn't include the status bar height
    // on Android
    // (https://stackoverflow.com/questions/44978804/whats-the-difference-between-window-and-screen-in-the-dimensions-api)
    const height = Dimensions.get('screen').height

    // We need to use window width instead of the screen width
    // because the screen width is not updated on foldable devices
    // when the screen is folded/unfolded
    // (https://stackoverflow.com/questions/65485878/react-native-samsung-one-ui-3-0-dimensions-screen-width-not-returning-correct-va)
    const width = Dimensions.get('window').width

    return { height, width }
}
