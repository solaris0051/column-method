import "./App.css";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <h1> Column Method </h1>
      メタ認知を活かすためのTips
      <ul>
        <li><u>①-③を順に整列します。</u>問題定義部 (状況の複雑さに応じて、よく整理します。)</li>
        <li><u>④-⑦で問題を解いていきます。</u>問題解決部 / 低減部</li>
      </ul>
      <span>*</span>必須
      <Form />
      <Footer />
    </div>
  );
}

export default App;
