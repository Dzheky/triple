import { StyleSheet } from 'react-native'
import { Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Metrics.section,
    margin: Metrics.baseMargin,
    width: Metrics.screenWidth - 2 * Metrics.baseMargin,
    textAlign: 'center',
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium
  }
})
