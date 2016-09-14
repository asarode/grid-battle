import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { style } from '.'
import { Field } from 'modules/field'
import { Player } from 'modules/player'
import {
  movePlayer,
  UP,
  DOWN,
  LEFT,
  RIGHT
} from 'modules/state/players.reducer'

const mapStateToProps = (state) => ({
  field: state.field.toJS().field,
  player: state.players.toJS().player
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
    if (keyCode === 38 || keyCode === 87) {
      this.props.actions.movePlayer(UP, 1)
    } else if (keyCode === 40 || keyCode === 91) {
      this.props.actions.movePlayer(DOWN, 1)
    } else if (keyCode === 37 || keyCode === 65) {
      this.props.actions.movePlayer(LEFT, 1)
    } else if (keyCode === 39 || keyCode === 68) {
      this.props.actions.movePlayer(RIGHT, 1)
    }
  }
}
