import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10000,
    backgroundColor: 'black',
    height: Metrics.buttonHeight,
    width: Metrics.screenWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    zIndex: 15000,
    color: Colors.yellow,
    opacity: 1,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.small
  }
})
