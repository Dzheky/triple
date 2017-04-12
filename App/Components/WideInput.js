'use strict'
import React, { PropTypes } from 'react'
import { TextInput } from 'react-native'
import styles from './Styles/WideInputStyles'
import { Colors } from '../Themes/'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Example
ExamplesRegistry.addComponentExample('Full Button', () =>
  <WideInput
    text='Hey there'
    onPress={() => window.alert('Full Button Pressed!')}
  />
)

export default class WideInput extends React.Component {
  state = {
    text: ''
  }
  static propTypes = {
    onChangeText: PropTypes.func,
    styles: PropTypes.object,
    placeholder: PropTypes.string
  }

  render () {
    return (
      <TextInput
        style={styles.container}
        placeholderTextColor={Colors.grey}
        onChangeText={(text) => {
          this.setState({text})
          this.props.onChangeText(text)
        }}
        placeholder={this.props.placeholder}
        value={this.state.text}
      />
    )
  }
}
