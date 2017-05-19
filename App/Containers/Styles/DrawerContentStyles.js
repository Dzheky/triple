import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.yellow,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeContainer: {
    position: 'absolute',
    top: Metrics.searchBarHeight,
    right: 10,
  },
  comingSoonText: {
    color: 'black'
  },
  logo: {
    alignSelf: 'center'
  }
})
