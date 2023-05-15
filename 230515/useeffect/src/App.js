import logo from "./logo.svg";
import "./App.css";
import "./";
import Counter from "./TryUseEffect";
import Time from "./Quiz2";
import Counter2 from "./TryUseRef";
import TryUseRefDom from "./TryUseRefDom";
import TryUseMemo from "./TryUseMemo";

function App() {
  return (
    <div className="App">
      {/* <Counter2 /> */}
      {/* <Time /> */}
      {/* <TryUseRefDom /> */}
      <TryUseMemo />
    </div>
  );
}

export default App;
