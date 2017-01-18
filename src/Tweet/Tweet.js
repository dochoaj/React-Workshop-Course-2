import React, { Component } from 'react'

import './Tweet.scss'

export default class Tweet extends Component {
  render() {
    return (
      <div className="tweet-container">
        <div className="tweet">
          <div className="tweet-image">
            <img src={this.props.avatar} alt="Tweet pic" />
          </div>
          <div className="tweet-content">
            <div className="tweet-line">
              <strong>{this.props.username}</strong>
              <small>13m</small>
            </div>
            <div className="tweet-line">
              {this.props.content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
