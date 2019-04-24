import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state =
    {username: "",
    password: ""};
    console.log(props)
  }

  handleTextChange(event){
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    if (this.state.username && this.state.password){
      this.props.handleLogin({username: this.state.username, password: this.state.password})
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event=>this.handleTextChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event=>this.handleTextChange(event)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
