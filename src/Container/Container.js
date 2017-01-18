import React, { Component } from 'react'
import TweetForm from '../TweetForm'
import TweetList from '../TweetList'
import TweetAxios from '../Utils/TweetAxios'

import './Container.scss'

export default class TwitterContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
    }
  }

  componentDidMount() {
    TweetAxios.get('/tweets')
      .then((response) => {
        this.setState({
          tweets: response.data,
        })
      })
  }

  render() {
    return (
      <div className="twitter-container">
        <TweetForm />
        <TweetList tweets={this.state.tweets} />
      </div>
    )
  }
}
