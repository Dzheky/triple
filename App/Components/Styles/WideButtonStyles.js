import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: Metrics.buttonHeight,
    marginRight: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    width: Metrics.screenWidth - 2 * Metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerTransparent: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: Colors.grey,
    height: Metrics.buttonHeight,
    marginRight: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    width: Metrics.screenWidth - 2 * Metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h6
  },
  transparentText: {
    color: 'black',
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.small
  }
})
