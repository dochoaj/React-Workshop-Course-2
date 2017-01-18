import React, { Component } from 'react'
import Tweet from '../Tweet'

import './TweetList.scss'

export default class TweetList extends Component {
  render() {
    return (
      <div className="tweet-list">
        <Tweet />
        <Tweet />
      </div>
    )
  }
}
