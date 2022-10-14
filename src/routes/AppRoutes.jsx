import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FetchData from "../components/FetchData";
import Performance from "../components/Performance";
import SpeedTestContextProvider from "../contexts/SpeedTestContextProvider";
import ClassicForm from "../views/ClassicForm/ClassicForm";
import Dashboard from "../views/Dashboard/Dashboard";
import Login from "../views/Dashboard/views/Login";
import Registro from "../views/Dashboard/views/Registro";
import Usuarios from "../views/Dashboard/views/Usuarios";
import FormikForm from "../views/FormikForm/FormikForm";
import Home from "../views/Home/Home";
import SpeedTest from "../views/SpeedTest/SpeedTest";
import TodoList from "../views/TodoList/TodoList";
import UserProtectedRoute from "./UserProtectedRoute";

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

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} exact />
      <Route path="home" element={<Navigate to="/" />} />
      <Route
        path="/bienvenido"
        element={
          <div>
            <h2>Bienvenid@</h2>
          </div>
        }
      />

      <Route path="escuela/:id" element={<></>} />

      <Route path="dashboard" element={<Dashboard />}>
        <Route path="top" element={<h1>Top</h1>} />
        <Route path="detalles" element={<h1>Detalles</h1>} />
        <Route path="usuarios" element={<Usuarios />} />
        <Route path="usuarios/:id" element={<h2>Detalle usuario</h2>} />
        <Route path="configuracion" element={<h1>Configuración</h1>} />
        <Route path="registro" element={<Registro />} />
        <Route path="login" element={<Login />} />

        <Route
          path="perfil"
          element={
            <UserProtectedRoute>
              <h3>Tu perfil</h3>
            </UserProtectedRoute>
          }
        />
      </Route>

      <Route path="speed-test" element={views.speedTest} />
      <Route path="todos" element={<TodoList />} />
      <Route path="performance" element={<Performance />} />
      <Route path="fetch-info" element={<FetchData />} />
      <Route path="*" element={<h1>Error 404 - No encontrado</h1>} />
    </Routes>
  );
};

export default AppRoutes;
