import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import CustomNavBar from './CustomNavBar'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import EventsScreen from '../Containers/EventsScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navBar={CustomNavBar} navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='launchScreen' component={LaunchScreen} hideNavBar />
            <Scene key='mainScreen' component={EventsScreen} title='Ивенты' hideNavBar={false} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
