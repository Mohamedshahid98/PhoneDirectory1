import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomLayout from "./pages/layout";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <>
    <BrowserRouter> 
    <Routes>
      <Route element={<LoginForm/>} path={"/"} />
      <Route path={"/landingPage"} element={<CustomLayout/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
