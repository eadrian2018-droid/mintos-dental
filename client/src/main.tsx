import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import FormularioPaciente
from "./components/FormularioPaciente";

import "./index.css";

const ruta =
  window.location.pathname;

ReactDOM.createRoot(
  document.getElementById("root")!
).render(

  <React.StrictMode>

    {

      ruta === "/formulario"

      ?

      <FormularioPaciente />

      :

      <App />

    }

  </React.StrictMode>

);