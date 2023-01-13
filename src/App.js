import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <h1> Column Method </h1>
      <p>メタ認知に気付き、活かすためのTips</p>
      <ul>
        <li>①-③を順にきれいに整列します。<span>問題定義部(しっかり状況を把握します。)</span></li>
        <li>④-⑦で問題を解いていきます。<span>問題解決部/低減部</span></li>
      </ul>
      <Form />
    </div>
  );
}

export default App;
