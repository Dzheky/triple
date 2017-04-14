'use strict'
import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Styles from './Styles/WideButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Example
ExamplesRegistry.addComponentExample('Full Button', () =>
  <WideButton
    text='Hey there'
    onPress={() => window.alert('Full Button Pressed!')}
  />
)

export default class WideButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    fontStyle: PropTypes.object,
    transparent: PropTypes.bool
  }

  render () {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[this.props.transparent ? Styles.containerTransparent : Styles.container, this.props.style]}
      >
        <Text style={[this.props.transparent ? Styles.transparentText : Styles.text, this.props.fontStyle]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
