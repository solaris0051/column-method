import React from "react";
import Todo from "./components/Todo";


function App(props) {
  const todoList = props.todos.map((todo) => (
    <Todo
      id={todo.id}
      name={todo.name}
      placeholder={todo.placeholder}
      key={todo.id}
    />
  )
  );
  return (
    <div className="App">
      <h1> Column Method </h1>
      <p className="h1p"><span>メタ認知を活かすためのTips</span></p>
      <ul>
        <li><span>①-③を順に整列します。<br /></span>問題定義部 (①-③はほぼ同時に発生し区別がつきにくいため、この作業が大切です。状況が混み入っている場合などには、特によく整理します。) </li>
        <li><span>④-⑦で問題を解いていきます。<br /></span>問題解決部 / 低減部</li>
      </ul>
      <p className="h1p"><span>*必須</span></p>
      <form className="form" name="column-method" method="post">
        <input type="hidden" name="form-name" value="column-method" />

        {todoList}

        <button type="submit">送信</button>
      </form>
      <footer>
        This product is dedicated to Ms. Watt. Since Jan, 2023. ©Y.K.
      </footer>
    </div>
  );
}

export default App;