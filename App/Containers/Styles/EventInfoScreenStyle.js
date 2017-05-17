import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight - 4,
    paddingBottom: Metrics.bottomNavigation,
    backgroundColor: Colors.background
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    top: Metrics.baseMargin,
    width: Metrics.screenWidth - Metrics.baseMargin * 2,
    height: 150,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    zIndex: 99
  },
  boldLabel: {
    fontSize: Fonts.size.h2,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.snow,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin
  },
  row: {
    flex: 1,
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    justifyContent: 'center',
  },
  likeContainer: {
    position: 'absolute',
    top: 139,
    right: Metrics.baseMargin,
    zIndex: 100,
    height: 40,
    width: 40,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  whenContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: Metrics.baseMargin,
  },
  whenTextTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontFamily: Fonts.type.cool,
    fontSize: Fonts.size.regular
  },
  whenText: {
    color: Colors.grey,
    fontWeight: 'bold',
    fontSize: Fonts.size.small
  },
  likeIcon: {
    backgroundColor: Colors.transparent,
    height: 27
  },
  icons: {
    color: 'black',
    marginRight: Metrics.baseMargin,
  },
  buttons: {
    marginTop: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center'
  },
  transparentButton: {
    backgroundColor: Colors.transparent,
    height: Metrics.buttonHeight,
    borderWidth: 3,
    borderRadius: 5,
    marginRight: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    width: Metrics.screenWidth - 2 * Metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonFont: {
    color: 'black',
    fontFamily: 'American Typewriter',
    fontSize: Fonts.size.h4
  },
  image: {
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    width: Metrics.screenWidth - Metrics.baseMargin * 2,
    height: 150
  }
})
