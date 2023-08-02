import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateUser } from "./components/CreateUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-user" element={<CreateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
