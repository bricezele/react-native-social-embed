import { Dimensions, Platform } from 'react-native'

export const isAndroid = Platform.OS === 'android'

export const isIos = Platform.OS === 'ios'

export const isWeb = Platform.OS === 'web'

export const fullHeight = Dimensions.get('screen').height
// We need to use window width instead of the screen width
// because the screen width is not updated on foldable devices
// when the screen is folded/unfolded
// (https://stackoverflow.com/questions/65485878/react-native-samsung-one-ui-3-0-dimensions-screen-width-not-returning-correct-va)

export const fullWidth = Dimensions.get('screen').width
