// Simple React Native specific changes
import { Dimensions, Platform} from 'react-native'

export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
export const responsiveFontSize = deviceHeight / 48
export const isAndroid = Platform.OS === 'android'
const dim = Dimensions.get('window')

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true
}

export function isIPhoneXSize () {
  return dim.height === 812 || dim.width === 812
}

export function isIPhoneXrSize () {
  return dim.height === 896 || dim.width === 896
}
