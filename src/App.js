import "./estilos/codigo.css";
import logo from "./estilos/imagenes/logo.jpeg";

function App() {
  return (
    <>
      <h1 class="Title">HUMBOLDT CRUD</h1>
      <div class="login-box">
        <center>
          <img src={logo} class="Logo" alt="Logo sice" />
        </center>
        <h1>Iniciar Sesión</h1>
        <form>
          <input type="text" placeholder="Usuario o Email" />
          <input type="password" placeholder="Contraseña" />
          <input type="submit" value="Ingresar" />
          <a href="#">¿Olvidó su contraseña?</a>
          <br />
        </form>
      </div>
      <div class="Novedades">
        <img src="" alt="" />
      </div>
    </>
  );
}

export default App;
