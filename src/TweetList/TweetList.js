import React, { Component } from 'react'
import Tweet from '../Tweet'

import './TweetList.scss'

class TweetList extends Component {
  componentDidMount() {
    this.props.fetchTweets()
  }

  buildTweets() {
    return this.props.tweets.map((tweet) => {
      const props = {
        key: tweet.id,
        id: tweet.id,
        avatar: tweet.user.avatar,
        content: tweet.content,
        username: tweet.user.code,
        editTweet: this.props.editTweet,
        deleteTweet: this.props.deleteTweet,
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

TweetList.propTypes = {
  fetchTweets: React.PropTypes.func,
  editTweet: React.PropTypes.func,
  deleteTweet: React.PropTypes.func,
  tweets: React.PropTypes.arrayOf(React.PropTypes.object),
}

export default TweetList
