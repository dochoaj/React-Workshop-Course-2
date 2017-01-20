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

    this.fetchTweets = this.fetchTweets.bind(this)
    this.createTweet = this.createTweet.bind(this)
    this.editTweet = this.editTweet.bind(this)
    this.deleteTweet = this.deleteTweet.bind(this)
  }

  fetchTweets() {
    TweetAxios.get('/tweets')
      .then((response) => {
        this.setState({
          tweets: response.data,
        })
      })
  }

  createTweet(params, callbacks) {
    TweetAxios.post('/tweets', params)
      .then((response) => {
        this.setState({
          tweets: [response.data, ...this.state.tweets],
        })
      })
      .then(() => {
        if (callbacks && typeof callbacks.success === 'function') {
          callbacks.success()
        }
      })
      .catch((error) => {
        if (callbacks && typeof callbacks.failure === 'function') {
          callbacks.failure(error)
        }
      })
  }

  editTweet(params, callbacks) {
    TweetAxios.put(`/tweets/${params.id}`, params)
      .then((response) => {
        const index = this.state.tweets.findIndex(x => x.id === response.data.id)
        const editResults = [...this.state.tweets]
        editResults[index] = response.data

        this.setState({
          tweets: editResults,
        })
      })
      .then(() => {
        if (callbacks && typeof callbacks.success === 'function') {
          callbacks.success()
        }
      })
      .catch((error) => {
        if (callbacks && typeof callbacks.failure === 'function') {
          callbacks.failure(error)
        }
      })
  }

  deleteTweet(id, callbacks) {
    if (confirm('Are you sure?')) {
      TweetAxios.delete(`/tweets/${id}`)
        .then(() => {
          const index = this.state.tweets.findIndex(x => x.id === id)
          const deleteResults = [...this.state.tweets]
          deleteResults.splice(index, 1)

          this.setState({
            tweets: deleteResults,
          })
        })
        .then(() => {
          if (callbacks && typeof callbacks.success === 'function') {
            callbacks.success()
          }
        })
        .catch((error) => {
          if (callbacks && typeof callbacks.failure === 'function') {
            callbacks.failure(error)
          }
        })
    }
  }

  render() {
    return (
      <div className="twitter-container">
        <TweetForm
          createTweet={this.createTweet}
        />
        <TweetList
          tweets={this.state.tweets}
          fetchTweets={this.fetchTweets}
          editTweet={this.editTweet}
          deleteTweet={this.deleteTweet}
        />
      </div>
    )
  }
}
