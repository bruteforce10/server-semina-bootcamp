import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import PageSignin from "./pages/signin";

function Home() {
  return <h1>Home</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<PageSignin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
