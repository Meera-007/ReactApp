import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat";
// import EventHandling from "./components/EventHandling";
// import Gallery from "./components/Gallery";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import ManageUser from "./components/ManageUser";
// import NotFound from "./components/NotFound";
// import Register from "./components/Register";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const mytheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#133c68",
      },
    },
  });

  const mytheme2 = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#133c68",
      },
    },
  });

  const mytheme3 = createTheme({
    palette: {
      primary: {
        main: "#133c68",
      },
    },
  });

  return (
    <div>
      <Chat />
    </div>
  );
}

export default App;