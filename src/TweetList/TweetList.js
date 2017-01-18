import React, { Component } from 'react'
import Tweet from '../Tweet'

import './TweetList.scss'

export default class TweetList extends Component {
  buildTweets() {
    return this.props.tweets.map((tweet) => {
      const props = {
        key: tweet.id,
        avatar: tweet.user.avatar,
        content: tweet.content,
        username: tweet.user.code,
      }

      return (
        <Tweet {...props} />
      )
    })
  }

  render() {
    return (
      <div className="tweet-list">
        {this.buildTweets()}
      </div>
    )
  }
}
