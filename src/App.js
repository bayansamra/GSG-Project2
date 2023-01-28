import { ThemeProvider } from "styled-components";
import { lightTheme } from "./global/theme";
import Global from "./global/global";
import Login from "./pages/Login";
import Register from "./pages/Register"
import { Route ,Routes } from "react-router-dom";



function App() {
  return (
  <div>
    <ThemeProvider theme={lightTheme}>
      <Global/>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>

      </Routes>
    </ThemeProvider>
  </div>
  );
}

export default App;
