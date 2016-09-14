import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import I from 'immutable'
import { style } from '.'
import { Field } from 'modules/field'
import { Player } from 'modules/player'
import {
  movePlayer,
  UP,
  DOWN,
  LEFT,
  RIGHT
} from 'modules/state/player.reducer'

const mapStateToProps = (state) => ({
  field: state.field.toJS().field,
  player: state.player.toJS().player
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    movePlayer
  }, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  render () {
    return <div className={style.app}>
      <Field field={this.props.field} />
      <Player player={this.props.player} />
    </div>
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyUp)
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyUp)
  }

  handleKeyUp = (event) => {
    const { keyCode } = event
    const field = I.fromJS(this.props.field)
    if (keyCode === 38 || keyCode === 87) {
      this.props.actions.movePlayer(field, UP, 1)
    } else if (keyCode === 40 || keyCode === 91) {
      this.props.actions.movePlayer(field, DOWN, 1)
    } else if (keyCode === 37 || keyCode === 65) {
      this.props.actions.movePlayer(field, LEFT, 1)
    } else if (keyCode === 39 || keyCode === 68) {
      this.props.actions.movePlayer(field, RIGHT, 1)
    }
  }
}
