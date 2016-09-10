import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { style } from '.'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  render () {
    return <div className={style.app}>
      Hey there!
    </div>
  }
}
