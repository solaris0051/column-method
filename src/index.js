import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const TODO_DATA = [
  { id: "todo-1", name: "①状況", placeholder: "発生タイミングは、②③が発生する直前です。それを叙事的(機械的)に書きます。" },
  { id: "todo-2", name: "②気分", placeholder: "それぞれの強さを%表記します(寄与が大きいものに着目するとよいです。)。" },
  { id: "todo-3", name: "③自動思考", placeholder: "自動思考とは、経験などから生じた思考の型(スキーマ)から発生する思考です。" },
  { id: "todo-4", name: "④根拠", placeholder: "自分なりに、③の根拠を書いてみます。"},
  { id: "todo-5", name: "⑤反証", placeholder: "自分の経験に基づき、④に対する多くの反証を見つけるとよいです。XXにとらわれすぎないようにします(XX: 指標など。)。" },
  { id: "todo-6", name: "⑥適応的思考", placeholder: "反証を通して、見逃している事実などを発見します。思考の偏りに気付き、バランスの良い思考を導き出します。" },
  { id: "todo-7", name: "⑦気分の変化", placeholder: "それぞれの強さを%表記します。" },
  { id: "todo-8", name: "振り返り", placeholder: "振り返ってみると、さらに俯瞰ができます。" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App todos={TODO_DATA} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
