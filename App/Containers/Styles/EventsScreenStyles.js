import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingTop: Metrics.baseMargin,
    backgroundColor: Colors.background
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
    marginTop: Metrics.baseMargin
  }
})
