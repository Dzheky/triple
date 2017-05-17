import React, { Component, PropTypes } from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/TimerStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

class Num extends React.Component {ß
  render () {
    return (
      <View style={styles.numberContainer}>
        <View style={styles.numberMiddleLine} />
        <Text style={styles.number}>{this.props.number}</Text>
      </View>
    )
  }
}

class NumSet extends React.Component {

  renderNumbers = (number) => {
    let numberString = number
    if (numberString < 10) {
      numberString = '0' + numberString
    }
    numberString = numberString.toString()
    return numberString.split('').map((element, id) => {
      return (
        <Num number={element} key={'NumSet' + id}/>
      )
    })
  }

  render () {
    return (
      <View style={styles.numberSetContainer}>
        <Text style={styles.numberSetTitle}>{this.props.title}</Text>
        <View style={styles.numberSet}>
          {this.renderNumbers(this.props.number)}
        </View>
      </View>
    )
  }
}

class Timer extends Component {

  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.getDifference(this.props.start)
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.getDifference(this.props.start)
      }, 1000)
    }
  }

  getDifference = (start) => {
    let first = new Date(start)
    let second = new Date()
    let seconds = parseInt((first - second) / 1000 % 60)
    let minutes = parseInt((first - second) / 1000 / 60 % 60)
    let hours = parseInt((((first - second) / 1000 / 60 / 60) - 2) % 24)
    let days = parseInt((first - second) / 1000 / 60 / 60 / 24)
    if(seconds < 0) {
      clearInterval(this.interval)
      this.setState({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0
      })
    } else {
      this.setState({
        seconds,
        minutes,
        hours,
        days
      })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <NumSet number={this.state.days} title={'Дней'} />
        <Text style={styles.dots}>:</Text>
        <NumSet number={this.state.hours} title={'Часов'} />
        <Text style={styles.dots}>:</Text>
        <NumSet number={this.state.minutes} title={'Минут'} />
        <Text style={styles.dots}>:</Text>
        <NumSet number={this.state.seconds} title={'Секунд'} />
      </View>
    )
  }
}

export default Timer
