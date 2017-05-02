import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Scene, Router, TabView } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import CustomNavBar from './CustomNavBar'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors, Metrics } from '../Themes'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import EventsScreen from '../Containers/EventsScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

const TabIcon = (props) => {
  let icon
  switch(props.title) {
    case 'Профиль':
      icon = props.selected ? 'ios-person' : 'ios-person-outline'
      break
    case 'Ранги':
      icon = props.selected ? 'ios-stats' : 'ios-stats-outline'
      break
    case 'Ивенты':
      icon = props.selected ? 'ios-calendar' : 'ios-calendar-outline'
      break
    case 'Избранное':
      icon = props.selected ? 'ios-heart' :'ios-heart-outline'
      break
    case 'Проффи':
      icon = props.selected ? 'ios-star' : 'ios-star-outline'
      break
    default:
      icon = 'ios-star'
  }
  return(
  <View style={Styles.iconsCover}>
    <Icon name={icon}
      size={Metrics.icons.small}
      color={props.selected ? 'black' : Colors.grey}
      style={Styles.navButtonLeft}
    />
    <Text style={[Styles.text, props.selected && { color: 'black' }]}>{props.title}</Text>
  </View>)
}

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navBar={CustomNavBar} navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='launchScreen' component={LaunchScreen} title="Login" hideNavBar hideTabBar/>
            <Scene key="tabbar" tabs={true} tabBarStyle={{backgroundColor: Colors.snow}} selectedIconStyle={{backgroundColor: Colors.yellow}}>
              <Scene key="mainScreen1" title="Профиль" icon={TabIcon} navBar={CustomNavBar}>
                <Scene key='mainScreenElement' component={EventsScreen} hideNavBar={false} />
              </Scene>
              <Scene key="mainScreen2" title="Ранги" icon={TabIcon} navBar={CustomNavBar}>
                <Scene key='mainScreenElement' component={EventsScreen} hideNavBar={false} />
              </Scene>
              <Scene initial key="mainScreen" title="Ивенты" icon={TabIcon} navBar={CustomNavBar}>
                <Scene key='mainScreenElement' component={EventsScreen} hideNavBar={false} />
              </Scene>
              <Scene key="mainScreen3" title="Избранное" icon={TabIcon} navBar={CustomNavBar}>
                <Scene key='mainScreenElement' component={EventsScreen} hideNavBar={false} />
              </Scene>
              <Scene key="mainScreen4" title="Проффи" icon={TabIcon} navBar={CustomNavBar}>
                <Scene key='mainScreenElement' component={EventsScreen} hideNavBar={false} />
              </Scene>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
