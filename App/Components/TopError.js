'use strict'
import React, { PropTypes } from 'react'
import { TouchableOpacity, Text, Animated, Easing } from 'react-native'
import Styles from './Styles/TopErrorStyles'
import { Colors, Metrics } from '../Themes/'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Example
ExamplesRegistry.addComponentExample('Full Button', () =>
  <WideButton
    text='Hey there'
    onPress={() => window.alert('Full Button Pressed!')}
  />
)

export default class WideButton extends React.Component {
  state = {
    top: new Animated.Value(-Metrics.buttonHeight),
    text: ''
  }

  static propTypes = {
    onPress: PropTypes.func,
  }

  showError = (text) => {
    this.setState({
      text
    }, () => {
       Animated.sequence([
         Animated.timing(this.state.top, {
           toValue: 0,
           easing: Easing.elastic(2)
         }),
         Animated.delay(2000),
         Animated.timing(this.state.top, {
           toValue: -Metrics.buttonHeight,
           easing: Easing.elastic(2)
         })
      ]).start()
    })
  }

  render () {
    return (
      <Animated.View style={[Styles.container, { top: this.state.top}]}>
        <TouchableOpacity onPress={this.props.onPress}>
            <Text style={Styles.text}>{this.state.text}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}