import React, { Component } from 'react'

import './TweetText.scss'

class TweetText extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <textarea
        className="tweet-text"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.onChange}
      />
    )
  }
}

TweetText.defaultProps = {
  placeholder: "What's up?",
}

TweetText.propTypes = {
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
}

export default TweetText
