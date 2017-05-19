import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    zIndex: 99
  },
  dots: {
    color: Colors.coal,
    fontSize: Fonts.size.regular,
    paddingTop: Metrics.baseMargin,
    fontWeight: 'bold',
    backgroundColor: Colors.transparent
  },
  numberSetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberSetTitle: {
    fontSize: Fonts.size.small,
    fontWeight: 'bold',
    color: Colors.coal
  },
  numberSet: {
    flexDirection: 'row',
  },
  numberContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.coal,
    paddingVertical: Metrics.smallMargin,
    width: Metrics.doubleBaseMargin,
    margin: 1
  },
  numberMiddleLine: {
    position: 'absolute',
    width: Metrics.doubleBaseMargin,
    height: 1,
    backgroundColor: Colors.snow,
  },
  number: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h6,
    backgroundColor: Colors.coal,
    color: Colors.yellow,
  }
})
