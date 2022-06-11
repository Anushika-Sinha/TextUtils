import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleColorMode = () => {
    let radioMode = document.getElementsByName("inlineRadioOptions");
    let color = 0;
    for (let radio of radioMode) {
      if (radio.checked) {
        console.log(radio);
        if (radio.value === "option1") {
          color = 0;
          console.log(radio.value);
        } else if (radio.value === "option2") {
          color = 1;
          console.log(radio.value);
        } else if (radio.value === "option3") {
          color = 2;
          console.log(radio.value);
        }
      }
    }
    if (color === 0) {
      document.body.style.backgroundColor = "#1e1e45";
      showAlert("Blue mode has been enabled", "success");
    } else if (color === 1) {
      document.body.style.backgroundColor = "#2c4230";
      showAlert("Green mode has been enabled", "success");
    } else {
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  const radioShowhide = () => {
    var x = document.getElementById("hide");
    if (mode === "light") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      radioShowhide();
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      radioShowhide();
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="React One"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
          toggleColorMode={toggleColorMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text below to analyze"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
