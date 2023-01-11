//import logo from "./logo.svg";
import "./App.css";
//import TaskListComponent from "./components/container/taskList";
import LoginFormik from "./components/pure/form/loginFormik";
import RegisterFormik from "./components/pure/form/registerFormik";
//import OpcionalRender from "./components/pure/OpcionalRender";
//import GreetingStyled from "./components/pure/greetingStyled";
//import Ejemplo1 from "./hooks/Ejemplo1";
//import Ejemplo2 from "./hooks/Ejemplo2";
//import MiComponenteConContexto from './hooks/Ejemplo3'
//import Ejemplo4 from "./hooks/Ejemplo4";
//import Father from "./components/container/father";


function App() {
  return (
    <div className="App">    
        
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<TaskListComponent></TaskListComponent>*/}          
          {/*<Ejemplo1></Ejemplo1>*/}
          {/*<Ejemplo2></Ejemplo2>*/}
          {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
          {/*<Ejemplo4 nombre="Lisandro">         
            <h3>
              Contenido del props.children
            </h3>
          </Ejemplo4>*/}                
          {/*<GreetingStyled name={'Lisandro'}></GreetingStyled>*/}
          {/*</header>*/}
          {/*Manejo de eventos*/}
          {/*<Father></Father>*/}
          {/*<OpcionalRender></OpcionalRender>*/}
          {/*Ejemplos de uso de Formik y Yup*/}
          {/*<LoginFormik></LoginFormik>*/}
          <RegisterFormik></RegisterFormik>
          
          
          
         
    </div>
  );
}

export default App;
