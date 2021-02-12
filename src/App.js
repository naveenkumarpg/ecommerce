import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

import Hats from "./pages/hats/hats.component";
import Jackets from "./pages/jackets/jackets.component";
import Kids from "./pages/kids/kids.component";
import Mens from "./pages/mens/mens.component";
import Sneakers from "./pages/sneakers/sneakers.component";
import Womens from "./pages/womens/womens.component";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Header from "./components/Header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentuser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentuser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }

      this.setState({ currentuser: userAuth });
    });
  }

  componentWillMount() {
    this.unSubscribeFromAuth = null;
  }

  render() {
    return (
      <>
        <Header userStatus={this.state.currentuser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={Hats} />
          <Route path="/jackets" component={Jackets} />
          <Route path="/kids" component={Kids} />
          <Route path="/mens" component={Mens} />
          <Route path="/sneakers" component={Sneakers} />
          <Route path="/womens" component={Womens} />
          <Route path="/signin" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </>
    );
  }
}

export default App;
