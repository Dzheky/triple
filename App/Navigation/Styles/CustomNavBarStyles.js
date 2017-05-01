import { Colors, Metrics, Fonts } from '../../Themes/'

export default {
  container: {
    position: 'absolute',
    top: 0,
    paddingTop: Metrics.doubleBaseMargin,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.yellow,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    opacity: 1,
    textAlign: 'center',
    color: 'black',
    backgroundColor: Colors.transparent,
    fontWeight: 'bold',
    fontSize: Fonts.size.input
  },
  logo: {
    alignSelf: 'center',
    height: Metrics.icons.large,
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.icons.large
  },
  rightButtons: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  middleTextContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  leftButtons: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
}
