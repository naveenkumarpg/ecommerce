import React from "react";

import FormInput from "../FormInput/form-input.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.util";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <button className="btn btn-warning btn-lg btn-block" type="submit">
            Sign in
          </button>

          <a
            className="btn btn-outline-primary btn-lg btn-block"
            href="/register"
          >
            Register
          </a>

          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={signInWithGoogle}
          >
            Sign in using Google
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
