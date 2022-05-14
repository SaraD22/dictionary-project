import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            alt="logo"
            // eslint-disable-next-line
            className="App-logo img-fluid"
          ></img>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Sara Duarte</small>
        </footer>
      </div>
    </div>
  );
}
