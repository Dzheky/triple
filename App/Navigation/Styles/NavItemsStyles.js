import {StyleSheet} from 'react-native'
import { Metrics, Colors } from '../../Themes/'

const navButton = {
  backgroundColor: Colors.transparent,
  justifyContent: 'center'
}

export default StyleSheet.create({
  backButton: {
    ...navButton,
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin
  },
  navButtonLeft: {
    ...navButton,
    marginTop: Metrics.baseMargin*2,
    marginLeft: Metrics.baseMargin
  },
  searchButton: {
    ...navButton,
    marginTop: Metrics.baseMargin*2.5,
    marginRight: Metrics.baseMargin,
    alignItems: 'center'
  }
})
