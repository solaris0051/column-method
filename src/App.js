import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <h1> Column Method </h1>
      メタ認知を活かすためのTips
      <ul>
        <li>①-③を順に整列します。<span>問題定義部 (状況の複雑さに応じて、よく整理します。)</span></li>
        <li>④-⑦で問題を解いていきます。<span>問題解決部 / 低減部</span></li>
      </ul>
      <span>*</span>必須
      <Form />
    </div>
  );
}

export default App;
