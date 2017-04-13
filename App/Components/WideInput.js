'use strict'
import React, { PropTypes } from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'
import Styles from './Styles/WideInputStyles'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../Themes/'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Example
ExamplesRegistry.addComponentExample('Full Button', () =>
  <WideInput
    placeholder={'Hey there'}
    onChangeText={() => {}}
  />
)

export default class WideInput extends React.Component {
  state = {
    text: '',
    password: false
  }

  componentDidMount() {
    if(this.props.password) {
      this.setState({
        password: true
      })
    }
  }

  static propTypes = {
    onChangeText: PropTypes.func.isRequired,
    styles: PropTypes.object,
    placeholder: PropTypes.string,
    password: PropTypes.bool
  }

  togglePassword = () => {
    this.setState({
      password: !this.state.password
    })
  }

  render () {
    return (
      <View>
        { this.props.password &&
          <TouchableOpacity style={Styles.eyeIcon} onPress={this.togglePassword}>
            <Icon name='ios-eye' size={34} color={Colors.grey} />
          </TouchableOpacity>
        }
        <TextInput
          underlineColorAndroid={Colors.transparent}
          style={Styles.container}
          placeholderTextColor={Colors.grey}
          secureTextEntry={this.state.password}
          onChangeText={(text) => {
            this.setState({text})
            this.props.onChangeText(text)
          }}
          placeholder={this.props.placeholder}
          value={this.state.text}
        />
      </View>
    )
  }
}
