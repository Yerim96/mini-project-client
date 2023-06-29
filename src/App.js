import { Outlet } from "react-router-dom";
import "./App.css";
import Navi from "./components/Navi";
import Todo from "./pages/Todo";
import Todos from "./pages/Todos";

function App() {
  return (
    <>
      <Navi />
      <Outlet />
    </>
  );
}

export default App;
