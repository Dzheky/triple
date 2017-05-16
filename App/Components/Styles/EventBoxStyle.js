import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  row: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    top: 0,
    width: Metrics.screenWidth - Metrics.baseMargin * 2,
    height: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    position: 'absolute',
    zIndex: 99
  },
  dots: {
    color: Colors.coal,
    fontSize: Fonts.size.regular,
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
    color: Colors.yellow,
  },
  likeContainer: {
    position: 'absolute',
    top: 130,
    right: Metrics.baseMargin,
    zIndex: 100,
    height: 40,
    width: 40,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  likeIcon: {
    backgroundColor: Colors.transparent,
    height: 27
  },
  boldLabel: {
    ...Fonts.style.h5,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: 'black',
    textAlign: 'left',
    width: Metrics.screenWidth - 80,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin
  },
  underLabel: {
    color: Colors.grey,
    fontSize: Fonts.size.small,
    marginHorizontal: Metrics.baseMargin
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
  }
})
