import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import SideBar from "./components/sidebar/SideBar";
import WorkersTable from "./components/workersTable/WorkersTable";
import NewWorker from "./components/newWorker/NewWorker";
import Header from "./components/header/Header";
import SignOut from "./components/sign-out/SginOut";
import SignInOption from "./store/SignInOption";
import SignIn from "./components/sign-in/SignIn";
import Settings from "./components/settings/Settings";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <SideBar />
      </>
    ),
    errorElement: <div>error 'WM' not found</div>,
    children: [
      {
        path: "/",
        element: <WorkersTable />,
        errorElement: <div>error 'table' not found</div>,
      },
      {
        path: "new-worker",
        element:
          SignInOption.isLogin !== null ? (
            <NewWorker />
          ) : (
            <Navigate to="/" replace />
          ),
        errorElement: <div>error 'add worker' page was not found</div>,
      },
      {
        path: "sign-in",
        element: <SignIn />,
        errorElement: <div>error 'sign-in' page was not found</div>,
      },
      {
        path: "sign-out",
        element: <SignOut />,
        errorElement: <div>error 'sign-out' page was not found</div>,
      },
      {
        path: "settings",
        element: <Settings />,
        errorElement: <div>error 'settings' page was not found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
