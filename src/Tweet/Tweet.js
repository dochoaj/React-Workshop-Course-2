import React, { Component } from 'react'
import moment from 'moment'
import TweetText from '../TweetText'
import './Tweet.scss'

class Tweet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      deleting: false,
      content: this.props.content,
    }

    this.onClickEdit = this.onClickEdit.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
    this.onClickDelete = this.onClickDelete.bind(this)
    this.onContentChange = this.onContentChange.bind(this)
    this.successEdit = this.successEdit.bind(this)
    this.failureEdit = this.failureEdit.bind(this)
  }

  onClickEdit() {
    this.setState({
      editing: true,
    })
  }

  onClickDelete() {
    this.setState({
      deleting: true,
    })

    this.props.deleteTweet(this.props.id)
  }

  onClickSave() {
    this.props.editTweet({
      id: this.props.id,
      content: this.state.content,
    }, {
      success: this.successEdit,
      failure: this.failureEdit,
    })
  }

  onContentChange(value) {
    this.setState({
      content: value,
    })
  }

  successEdit() {
    this.setState({
      editing: false,
    })
  }

  failureEdit() {
    this.setState({
      editing: false,
    })
  }

  buildContent() {
    if (this.state.editing) {
      return (
        <TweetText
          value={this.state.content}
          onChange={this.onContentChange}
        />
      )
    }

    return this.props.content
  }

  buildEditButton() {
    if (this.state.editing) {
      return (
        <button
          className="btn btn-default btn-sm"
          onClick={this.onClickSave}
          >
          <span className="glyphicon glyphicon-ok" />
        </button>
      )
    }

    return (
      <button
        className="btn btn-default btn-sm"
        onClick={this.onClickEdit}
        >
        <span className="glyphicon glyphicon-pencil" />
      </button>
    )
  }

  buildTimeDifference() {
    const now = moment()
    const created = moment(this.props.created_at)

    return moment.duration(now.diff(created)).humanize()
  }

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
              <small>{this.buildTimeDifference()}</small>
            </div>
            <div className="tweet-line">
              {this.buildContent()}
            </div>
            <div className="tweet-line action-line">
              { this.buildEditButton() }
              <button
                disabled={this.state.delete}
                className="btn btn-default btn-sm"
                onClick={this.onClickDelete}
                >
                <span className="glyphicon glyphicon-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Tweet.propTypes = {
  content: React.PropTypes.string,
  deleteTweet: React.PropTypes.func,
  id: React.PropTypes.number,
  editTweet: React.PropTypes.func,
  created_at: React.PropTypes.string,
  avatar: React.PropTypes.string,
  username: React.PropTypes.string,
}

export default Tweet
