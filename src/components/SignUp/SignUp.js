import React, { Component } from "react";

// const SignUp = ({ title }) => {
//   return <p>Component {title}</p>;
// };
// export default SignUp;
// SignUp.defaultProps = {
//   title: "Вход",
// };
// export default SingUp;

class SignUp extends Component {
  // constructor() {}
  static defaultProps = {
    name: "Sandra",
    phone: "030 333 33 33",
  };

  state = {
    name: "",
    phone: "",
  };

  handleChange = (e) => {
    alert(`Name entered`);
    console.log(e.target.value);
    console.dir(e.target.name);
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="phone">
          Phone
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">add</button>
      </form>
    );
  }
}

export default SignUp;
