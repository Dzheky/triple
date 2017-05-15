import React, { PropTypes } from 'react'
import { View, LayoutAnimation, Text } from 'react-native'
import NavItems from './NavItems'
import styles from './Styles/CustomNavBarStyles'
import SearchBar from '../Components/SearchBar'
import { connect } from 'react-redux'
import SearchActions from '../Redux/SearchRedux'

class CustomNavBar extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      showSearchBar: false
    }
  }

  showSearchBar = () => {
    this.setState({showSearchBar: true})
  }

  cancelSearch = () => {
    this.setState({showSearchBar: false})
    this.props.cancelSearch()
  }

  onSearch = (searchTerm) => {
    this.props.performSearch(searchTerm, this.props.events)
  }

  renderMiddle () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    if (this.state.showSearchBar) {
      return <SearchBar onSearch={this.onSearch} searchTerm={this.props.searchTerm} onCancel={this.cancelSearch} />
    } else {
      return (
        <View style={styles.middleTextContainer}>
          <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
        </View>
      )
    }
  }

  renderRightButtons () {
    if (this.state.showSearchBar) {
      return <View style={{width: 0}} />
    } else {
      return (
        <View style={styles.rightButtons}>
          {NavItems.searchButton(this.showSearchBar)}
        </View>
      )
    }
  }

  renderLeftButtons () {
    if (this.state.showSearchBar) {
      return null
    } else {
      return (
        <View style={styles.leftButtons}>
          {this.props.navigationState.index === 0 ? NavItems.hamburgerButton() : NavItems.backButton()}
        </View>
      )
    }
  }

  render () {
    let state = this.props.navigationState
    let selected = state.children[state.index]
    while (selected.hasOwnProperty('children')) {
      state = selected
      selected = selected.children[selected.index]
    }

    const containerStyle = [
      styles.container,
      this.props.navigationBarStyle,
      state.navigationBarStyle,
      selected.navigationBarStyle
    ]

    return (
      <View style={containerStyle}>
        {this.renderLeftButtons()}
        {this.renderMiddle()}
        {this.renderRightButtons()}
      </View>
    )
  }
}

CustomNavBar.propTypes = {
  navigationState: PropTypes.object,
  navigationBarStyle: View.propTypes.style
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm,
    events: state.events.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    performSearch: (searchTerm, events) => dispatch(SearchActions.search(searchTerm, events)),
    cancelSearch: () => dispatch(SearchActions.cancelSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar)
