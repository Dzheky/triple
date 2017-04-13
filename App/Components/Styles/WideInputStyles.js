import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Metrics.section,
    marginRight: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    width: Metrics.screenWidth - 2 * Metrics.baseMargin,
    textAlign: 'center',
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium
  },
  eyeIcon: {
    position: 'absolute',
    zIndex: 100,
    backgroundColor: Colors.transparent,
    right: Metrics.baseMargin*2,
    top: 4
  }
})
