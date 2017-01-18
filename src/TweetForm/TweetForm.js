import React, { Component } from 'react'
import TweetText from '../TweetText'

import './TweetForm.scss'

class TweetForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
      loading: false,
    }

    this.onButtonClick = this.onButtonClick.bind(this)
    this.onContentChange = this.onContentChange.bind(this)
    this.successCreate = this.successCreate.bind(this)
    this.failureCreate = this.failureCreate.bind(this)
  }

  onButtonClick() {
    this.setState({
      loading: true,
    })

    this.props.createTweet({
      content: this.state.content,
    }, {
      success: this.successCreate,
      failure: this.failureCreate,
    })
  }

  onContentChange(value) {
    this.setState({
      content: value,
    })
  }

  successCreate() {
    this.setState({
      loading: false,
      content: '',
    })
  }

  failureCreate() {
    this.setState({
      loading: false,
    })

    alert('Oops, we had troubles when trying to tweet')
  }

  render() {
    return (
      <div className="tweet-form">
        <TweetText
          value={this.state.content}
          onChange={this.onContentChange}
        />
        <div className="tweet-form-actions">
          <button
            className="btn btn-primary icon-button"
            disabled={this.state.loading}
            onClick={this.onButtonClick}
            >
            <span className="glyphicon glyphicon-pencil" />
            Tweet
          </button>
        </div>
      </div>
    )
  }
}

TweetForm.propTypes = {
  createTweet: React.PropTypes.func,
}

export default TweetForm
