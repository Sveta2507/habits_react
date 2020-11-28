import "./App.css";
import Auth from "./components/Auth/Auth.js";

function App() {
  //ХРАНИМ В ПЕРЕМЕННЫХ ЗНАЧЕНИЯ ДЛЯ ПРОПСОВ
  let imgUrl = "./components/images/ЛОГО.png";
  let login = "вход";
  let register = "регистрация";

  return (
    <>
      <h1>HABITS</h1>
      {/*ПЕРЕДАЕМ ПРОПСЫ ВЛОЖЕННОМУ КОМПОНЕНТУ*/}
      <Auth src={imgUrl} login={login} register={register} />
    </>
  );
}

export default App;
