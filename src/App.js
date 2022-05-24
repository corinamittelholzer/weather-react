import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zürich" />

        <div className="Footer mt-3 mb-3 p-1">
          <footer>
            <a
              href="https://github.com/corinamittelholzer/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Corina Mittelholzer
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
