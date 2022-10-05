import React, { useContext } from "react";
import "./App.scss";
import NavBar from "./components/common/NavBar";
import ClassicForm from "./views/ClassicForm/ClassicForm";
import Dashboard from "./views/Dashboard/Dashboard";
import FormikForm from "./views/FormikForm/FormikForm";
import Home from "./views/Home/Home";
import TodoList from "./views/TodoList/TodoList";

import { AppContext } from "./contexts/AppContextProvider";
import SpeedTestContextProvider from "./contexts/SpeedTestContextProvider";
import SpeedTest from "./views/SpeedTest/SpeedTest";

const views = {
  home: <Home />,
  dashboard: <Dashboard />,
  todolist: <TodoList />,
  classicForm: <ClassicForm />,
  formikForm: <FormikForm />,
  speedTest: (
    <SpeedTestContextProvider>
      <SpeedTest />
    </SpeedTestContextProvider>
  ),
};

function App() {
  const { vRoute } = useContext(AppContext);
  // const [vRoute, setVRoute] = useState("formikForm");
  // const context = useContext(AppContext);
  // console.log(context);
  // const { vRoute } = context;
  // const setVRoute = () => null;
  // if (vRoute === "home") return <Home />
  // if (vRoute === "dashboard") return <Dashboard />
  return (
    <>
      <div className="App">
        <NavBar />
        {views[vRoute]}
        {/* {vRoute === "home" ? <Home /> : null} */}
        {/* {vRoute === "home" && <Home />} */}
        {/* {vRoute === "dashboard" ? <Dashboard /> : null } */}
        {/* {vRoute === "dashboard" && <Dashboard />} */}
      </div>
    </>
  );
}

export default App;
