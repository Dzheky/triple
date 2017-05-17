import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    paddingBottom: Metrics.bottomNavigation,
    backgroundColor: Colors.yellow
  },
  row: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    justifyContent: 'center'
  },
  boldLabel: {
    ...Fonts.style.h5,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: 'black',
    textAlign: 'left',
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin
  },
  underLabel: {
    color: Colors.grey,
    fontSize: Fonts.size.small,
    marginHorizontal: Metrics.baseMargin
  },
  searchIcon: {
    alignSelf: 'center',
    color: Colors.coal,
    backgroundColor: Colors.transparent
  },
  iconText: {
    marginTop: -Metrics.smallMargin,
    backgroundColor: Colors.transparent,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.h5,
    fontWeight: 'bold',
    color: Colors.coal
  },
  greyLine: {
    height: 1,
    backgroundColor: Colors.grey,
    opacity: 0.2,
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.smallMargin
  },
  bottomContainer: {
    marginHorizontal: Metrics.baseMargin,
    marginBottom: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dates: {
    fontSize: Fonts.size.small,
    color: 'black'
  },
  price: {
    fontSize: Fonts.size.small,
    color: 'black'
  },
  image: {
    width: Metrics.screenWidth - Metrics.baseMargin * 2,
    height: 150
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
    marginBottom: Metrics.smallMargin
  },
  listContent: {
    paddingTop: Metrics.smallMargin
  },
  activityIndicatorContainer: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight - Metrics.navBarHeight - Metrics.bottomNavigation,
    position: 'absolute',
    zIndex: 100,
    backgroundColor: Colors.yellow,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
