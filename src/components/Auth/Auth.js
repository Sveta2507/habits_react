import React from "react";
const Auth = ({ src, login, register }) => {
  return (
    <>
      <img src={src} alt="logo" />
      <button type="button">{login}</button>
      <button type="button">{register}</button>
    </>
  );
};

Auth.defaultProps = {
  src: "../../components/images/ЛОГО.png",
  login: "вход",
  register: "зарегестрироваться",
};
export default Auth;
