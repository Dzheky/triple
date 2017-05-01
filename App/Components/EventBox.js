import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/EventBoxStyle'
import { Colors, Metrics } from '../Themes/'
import Icon from 'react-native-vector-icons/Ionicons'

export default class EventBox extends React.Component {

  state = {
    pressed: false
  }

  onLikePress = () => {
    this.setState({
      pressed: !this.state.pressed
    })
  }

  render () {
    let event = this.props.event
    return (
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.likeContainer, { backgroundColor: this.state.pressed ? Colors.yellow : Colors.lightGrey }]}
          onPress={this.onLikePress}
        >
          <Icon name='md-heart-outline'
            size={Metrics.icons.medium}
            color='black'
            style={styles.likeIcon}
          />
        </TouchableOpacity>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/ed/78/cb/ed78cbf314edd1440f10465c8d4f219f.jpg'}}
        />
        <Text style={styles.boldLabel}>{event.title.split(' - ')[0]}</Text>
        <Text style={styles.underLabel}>США</Text>
        <View style={styles.greyLine} />
        <View style={styles.bottomContainer}>
          <Text style={styles.dates}>{this.props.date}</Text>
          <Text style={styles.price}>$100</Text>
        </View>
      </View>
    )
  }
}

// Prop type warnings
EventBox.propTypes = {
  date: React.PropTypes.string.isRequired,
  event: React.PropTypes.object.isRequired
}
//
// // Defaults for props
// EventBox.defaultProps = {
//   someSetting: false
// }
