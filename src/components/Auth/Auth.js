import React from "react";
import PropTypes from "prop-types";
import styles from "./Auth.module.css";
// import SignUp from "../SignUp/SignUp.js";
// import SignIn from "../SignIn/SignIn.js"

const Auth = ({ src, login, register }) => {
  return (
    <>
      {/* <img src={src} alt="logo" width="240" /> */}
      <div className={styles.logoWrapper}></div>
      <p>{}</p>
      <button className={styles.loginBtn} type="button">
        {login}
      </button>
      <button className={styles.loginBtn} type="button">
        {register}
      </button>
      <p>Component Auth</p>
      {/* <SignUp title="register">
      <SignIn title=""> */}
    </>
  );
};
//ЗНАЧЕНИЕ ПРОПСА ЕСЛИ ИЗ РОДИТЕЛЯ ЕГО НЕ ПОЛУЧИЛИ
Auth.defaultProps = {
  src: "../../images/logo.svg",
  login: "вход",
  register: "зарегестрироваться",
};

//ПРОСТАЯ ПЕРВИЧНАЯ ПРОВЕРКА ПОЛУЧЕННОГО ПРОПСА
Auth.propTypes = {
  src: PropTypes.string,
  login: PropTypes.string,
  register: PropTypes.string,
};

export default Auth;
