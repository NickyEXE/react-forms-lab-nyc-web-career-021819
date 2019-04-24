import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {message: ''};
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.message}
        name="message"
        id="message"
        onChange={event => this.handleInputChange(event)} />
        Remaining characters: {this.props.maxChars - this.state.message.length}
      </div>
    );
  }

  handleInputChange = event => {
    console.log("handling input change")
    this.setState({message: event.target.value})
  }
}

export default TwitterMessage;
