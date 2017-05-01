import {StyleSheet} from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth
  },
  searchInput: {
    flex: 5,
    height: Metrics.searchBarHeight,
    alignSelf: 'center',
    padding: Metrics.smallMargin,
    textAlign: 'left',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.instructions,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 30,
    color: 'black',
    flexDirection: 'row'
  },
  searchIcon: {
    left: Metrics.doubleBaseMargin,
    alignSelf: 'center',
    color: 'black',
    backgroundColor: Colors.transparent
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Metrics.baseMargin
  },
  buttonLabel: {
    color: 'black',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular
  }
})
