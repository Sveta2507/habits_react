import "./App.css";
import SignUp from "./components/SignUp/SignUp.js";
import Auth from "./components/Auth/Auth.js";
import React, { Component } from "react";
// import { render } from "@testing-library/react";

class App extends Component {
  state = {
    //ХРАНИМ В ПЕРЕМЕННЫХ ЗНАЧЕНИЯ ДЛЯ ПРОПСОВ
    // imgUrl: "../src/images/logo.png",
    // login: "вход",
    // register: "регистрация",
    users: [],
  };

  addNewUser = (user) => {
    // перезапись состояния
    // this.setState({ users: user });

    //замена стейста
    this.setState((prev) => ({ users: [...prev.users, user] }));
  };

  render() {
    return (
      <>
        {/* <h1>HABITS</h1> */}
        {/*ПЕРЕДАЕМ ПРОПСЫ ВЛОЖЕННОМУ КОМПОНЕНТУ*/}
        <Auth />
        <SignUp addUser={this.addNewUser} />
      </>
    );
  }
}

export default App;
