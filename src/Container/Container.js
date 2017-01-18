import React, { Component } from 'react'
import TweetForm from '../TweetForm'
import TweetList from '../TweetList'

import './Container.scss'

export default class TwitterContainer extends Component {
  render() {
    return (
      <div className="twitter-container">
        <TweetForm />
        <TweetList />
      </div>
    )
  }
}
