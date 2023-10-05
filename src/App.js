import logo from "./imagenes/logo.jpeg";
import Inicio from "./imagenes/home.png";
import Docente from "./imagenes/save.png";
import Estudiante from "./imagenes/student.png";
import Materias from "./imagenes/materias.png";
import Usuarios from "./imagenes/users.png";
import "./estilo.css";

function App() {
  return (
    <div class="menu">

      <div class="title"><h1>OPERACIONES CRUD</h1></div>
      <div class="logos"><img class="" src={logo} alt="" /></div>

    <div class="opciones">
      <div class=" Inicio">
        <img src={Inicio} alt="" />
        <a class="titulo" href="#"><h2>Inicio</h2></a>
      </div>
    
      <div class="Docentes">
      <img src={Docente} alt="" />
        <a class="titulo" href="#"><h2>Docentes</h2></a>
      </div>

      <div class="Estudiantes">
      <img src={Estudiante} alt="" />
        <a class="titulo" href="#"><h2>Estudiante</h2></a>
      </div>

      <div class="Materias">
      <img src={Materias} alt="" />
      <a class="titulo" href="#"><h2>Materias</h2></a>
      </div>

      <div class="Secciones">
      <img src={Materias} alt="" />
      <a class="titulo" href="#"><h2>Secciones</h2></a>
      </div>

      <div class="Periodo">
      <img src={Materias} alt="" />
      <a class="titulo" href="#"><h2>Periodo</h2></a>
      </div>

      <div class="Usuarios">
      <img src={Usuarios} alt="" />
      <a class="titulo" href="#"><h2>Usuarios</h2></a>
      </div>
    </div>
    </div>

  );
}

export default App;
