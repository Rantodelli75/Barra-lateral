import "./estilos/codigo.css";
import logo from "./estilos/imagenes/logo.jpeg";
import slider1 from "./estilos/imagenes/slider1.jpg";
import slider2 from "./estilos/imagenes/slider2.jpg";
import slider3 from "./estilos/imagenes/slider3.jpg";
import slider4 from "./estilos/imagenes/slider4.jpg";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };
  return (
    <>
      <h1 className="Title">HUMBOLDT CRUD</h1>
      <div className="login-box">
        <center>
          <img src={logo} className="Logo" alt="Logo sice" />
        </center>
        <h1>Iniciar Sesión</h1>
        <form>
          <input
            type="text"
            placeholder="Usuario"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="submit" onClick={login} value="Ingresar" />
          <h1 style={{ color: "red" }}>{loginStatus}</h1>
          <a href="#">¿Olvidó su contraseña?</a>
          <br />
        </form>
      </div>
      <div class="slider-frame">
        <ul>
          <li>
            <img src={slider1} alt="" />
          </li>
          <li>
            <img src={slider2} alt="" />
          </li>
          <li>
            <img src={slider3} alt="" />
          </li>
          <li>
            <img src={slider4} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
