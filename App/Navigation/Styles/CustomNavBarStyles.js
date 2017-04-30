import { Colors, Metrics, Fonts } from '../../Themes/'

export default {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingTop: Metrics.smallMargin,
    paddingHorizontal: 5,
    backgroundColor: Colors.yellow,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: Colors.black,
    marginTop: Metrics.doubleBaseMargin+5,
    backgroundColor: Colors.transparent,
    fontWeight: 'bold',
    fontSize: Fonts.size.input
  },
  logo: {
    alignSelf: 'center',
    marginTop: Metrics.baseMargin,
    height: Metrics.icons.large,
    width: Metrics.icons.large
  },
  rightButtons: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  middleTextContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  leftButtons: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
}
