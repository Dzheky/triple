import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    zIndex: 10000,
    position: 'absolute',
    backgroundColor: 'black',
    height: Metrics.buttonHeight,
    width: Metrics.screenWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.yellow,
    opacity: 1,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.small
  }
})
