import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, TouchableOpacity, Linking } from 'react-native'
import EventActions from '../Redux/EventsRedux'
import { connect } from 'react-redux'
import Library from '../Lib/Library'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import { Colors, Metrics } from '../Themes/'
import Timer from '../Components/Timer'
import WideButton from '../Components/WideButton'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/EventInfoScreenStyle'

class EventInfo extends React.Component {
  state = {
    like: this.props.event.like
  }

  onLikePress = () => {
    if (this.state.like) {
      this.props.iDislike(this.props.event.id, this.props.tokenId, this.props.userId, this.props.token)
      this.setState({
        like: false
      })
    } else {
      this.props.iLike(this.props.event.id, this.props.tokenId, this.props.userId, this.props.token)
      this.setState({
        like: true
      })
    }
  }

  handleSitePress = (url) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  renderButton = (url, text) => {
    return (
      <View style={styles.buttons}>
        <WideButton
          fontStyle={styles.buttonFont}
          style={styles.transparentButton}
          text={text}
          onPress={this.handleSitePress.bind(this, url)}
        />
      </View>
    )
  }

  renderPrice(price) {
    if(price.length === 1) {
      return (
        <View style={styles.whenContainer}>
          <Icon2 name='wallet'
            size={Metrics.icons.medium}
            color='black'
            style={styles.icons}
          />
          <View style={styles.timerContainer}>
            <Text style={styles.whenTextTitle}>{`Цена`}</Text>
            <Text style={styles.whenText}>{`Цена указана в валюте страны`}</Text>
            <Text style={styles.price}>{price[0].price}</Text>
          </View>
        </View>
      )
    } else if(price.length > 1) {
      return (
        <View style={styles.whenContainer}>
          <Icon2 name='wallet'
            size={Metrics.icons.medium}
            color='black'
            style={styles.icons}
          />
          <View style={styles.timerContainer}>
            <Text style={styles.whenTextTitle}>{`Цена`}</Text>
            <Text style={styles.whenText}>{`Цена указана в валюте страны`}</Text>
            <View style={styles.pricesContainer}>
              {price.map((price, id) => {
                let valid = true
                if(price.until) {
                  let today = new Date()
                  let date = new Date(price.until)
                  valid = date > today
                }
                let title = price.until ? `До ${parseInt(price.until.split('-')[2])} ${Library.getMonth(price.until.split('-')[1])}` : 'До ивента'
                return (
                  <View style={styles.priceContainer} key={`${id}_price`}>
                    <Text style={[styles.priceUntilDate, !valid && { color: Colors.grey }]}>{title}</Text>
                    <Text style={[styles.price, !valid && { color: Colors.grey, textDecorationLine: 'line-through' }]}>{price.price}</Text>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      )
    }
  }

  render () {
    let event = this.props.event
    let uri = this.props.event.picture || 'https://specials-images.forbesimg.com/imageserve/563858686/960x0.jpg?fit=scale'
    let date = `${parseInt(event.start.split('-')[2])} ${Library.getMonth(event.start.split('-')[1])}`
    let range = new Date(event.end) - new Date(event.start)
    range = parseInt(range / 1000 / 60 / 60 / 24) + 1
    let rangeText = range === 1 ? `1 день` : range <= 4 ? `${range} дня` : `${range} дней`
    let registryText = {
      registry: true,
      title: 'Рейтинговый ивент',
      description: 'Начисляются очки по классификации WSDC'
    }
    if(event.title.includes('Non-Registry')) {
      registryText = {
        registry: false,
        title: 'Не рейтинговый ивент',
        description: 'Очки по классификации WSDC НЕ начисляются'
      }
    }
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View
            style={styles.row}
          >
            <View style={styles.timeContainer}>
              <Text style={styles.boldLabel}>{event.title && event.title.split(' - ')[0]}</Text>
            </View>
            <TouchableOpacity
              style={[styles.likeContainer, { backgroundColor: this.state.like ? Colors.yellow : Colors.lightGrey }]}
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
              onLoadEnd={this.handleOnLoad}
              source={{ uri }}
            />
            <View style={styles.whenContainer}>
              <Icon2 name='event'
                size={Metrics.icons.medium}
                color='black'
                style={styles.icons}
              />
              <View style={styles.whenTextContainer}>
                <Text style={styles.whenTextTitle}>{`Начало ${date}`}</Text>
                <Text style={styles.whenText}>{`Ивент продлится ${rangeText}`}</Text>
              </View>
            </View>
            <View style={styles.whenContainer}>
              <Icon2 name='hourglass'
                size={Metrics.icons.medium}
                color='black'
                style={styles.icons}
              />
              <View style={styles.timerContainer}>
                <Text style={styles.whenTextTitle}>{`До начала`}</Text>
                <Text style={styles.whenText}>{`Таймер установлен до 24:00, ${date}`}</Text>
                <Timer start={this.props.event.start} />
              </View>
            </View>
            <View style={styles.whenContainer}>
              <Icon2 name='badge'
                size={Metrics.icons.medium}
                color={'black'}
                style={styles.icons}
              />
              <View style={styles.whenTextContainer}>
                <Text style={[styles.whenTextTitle, !registryText.registry ? { color: 'red' } : {} ]}>{registryText.title}</Text>
                <Text style={styles.whenText}>{registryText.description}</Text>
              </View>
            </View>
            {this.props.event.prices && this.renderPrice(this.props.event.prices)}
            {this.renderButton(this.props.event.url, 'САЙТ')}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    tokenId: state.login.tokenId,
    userId: state.login.userId,
    token: state.login.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    iLike: (ids, tokenId, userId, token) => dispatch(EventActions.like(ids, tokenId, userId, token)),
    iDislike: (ids, tokenId, userId, token) => dispatch(EventActions.dislike(ids, tokenId, userId, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInfo)
