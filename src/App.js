import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignInForm } from "./components/SignInForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route
          path="home"
          element={
            <div className="container">
              <h1>Home</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
