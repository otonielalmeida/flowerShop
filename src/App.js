import "./App.css";
import ForwardCounter from "./components/ForwardCounter";
import BackwardCounter from "./components/BackwardCounter";

function App() {
  return (
    <div className="main">
      <div className="App">
        <h2 className="Title">Counter</h2>
      </div>

      <div className="Content">
        <ForwardCounter />
        <BackwardCounter />
      </div>
    </div>
  );
}

export default App;
