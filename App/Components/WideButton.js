'use strict'
import React, { PropTypes } from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import Styles from './Styles/WideButtonStyles'
import { Colors } from '../Themes/'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Example
ExamplesRegistry.addComponentExample('Full Button', () =>
  <WideButton
    text='Hey there'
    onPress={() => window.alert('Full Button Pressed!')}
  />
)

export default class WideButton extends React.Component {

  render () {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[this.props.transparent ? Styles.containerTransparent : Styles.container, this.props.style]}
      >
        { !this.props.waiting
          ? <Text style={[this.props.transparent ? Styles.transparentText : Styles.text, this.props.fontStyle]}>{this.props.text}</Text>
          : <ActivityIndicator color={Colors.yellow} /> }
      </TouchableOpacity>
    )
  }
}
