import React, { Component } from 'react'
import { Text, Image, BackAndroid, TouchableOpacity, View } from 'react-native'
import styles from './Styles/DrawerContentStyles'
import Icon from 'react-native-vector-icons/EvilIcons'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Colors, Metrics } from '../Themes/'
import { Images } from '../Themes'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    NavigationActions.refresh({
      key: 'drawer',
      open: false
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeContainer}
          onPress={this.toggleDrawer}
        >
          <Icon name='close'
            size={Metrics.icons.medium}
            color={Colors.grey}
            style={styles.icons}
          />
        </TouchableOpacity>
        <Text style={styles.comingSoonText}>{'Скоро...'}</Text>
      </View>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
