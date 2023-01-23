import React from "react";

export default function Form() {
  return (
    <form name="column-method" method="post">
      <input type="hidden" name="form-name" value="column-method" />
      <p><span>メタ認知を活かすためのTips</span></p>
      <ul>
        <li><span>①-③を順に整列します。<br /></span>問題定義部 (状況が混み入っている場合などには、特によく整理します。) </li>
        <li><span>④-⑦で問題を解いていきます。<br /></span>問題解決部 / 低減部</li>
      </ul>
      <p><span>*</span>必須</p>
      <div>
        <label htmlFor="occasion">①状況 = Event</label><span>*</span> <br />
        <textarea id="occasion" name="occasion" cols="62" rows="4" placeholder="発生タイミングは、②③が発生する直前です。それを叙事的(機械的)に書きます。" required></textarea>
      </div>
      <div>
        <label htmlFor="feeling">②気分 = Feeling</label><span>*</span> <br />
        <textarea id="feeling" name="feeling" cols="62" rows="4" placeholder="それぞれの強さを%表記します(寄与が大きいものに着目するとよいです。)。" required></textarea>
      </div>
      <div>
        <label htmlFor="schematic-idea">③自動思考 = Idea</label><span>*</span> <br />
        <textarea id="schematic-idea" name="schematic-idea" cols="62" rows="4" placeholder="自動思考とは、経験などから生じた思考の型(スキーマ)から発生する思考です。" required></textarea>
      </div>
      <div>
        <label htmlFor="cause">④自動思考の根拠</label><span>*</span> <br />
        <textarea id="schematic-cause" name="schematic-cause" cols="62" rows="4" placeholder="自分なりの根拠を書いてみます。" required></textarea>
      </div>
      <div>
        <label htmlFor="anti-thesis">⑤反証</label><span>*</span> <br />
        <textarea id="anti-thesis" name="anti-thesis" cols="62" rows="4" placeholder="自分の経験に基づいた、多くの反証を見つけるとよいです。XXにとらわれすぎないようにします(XX: 指標など。)。" required></textarea>
      </div>
      <div>
        <label htmlFor="rational-idea">⑥適応的思考</label><span>*</span> <br />
        <textarea id="rational-idea" name="rational-idea" cols="62" rows="4" placeholder="反証から、思考の偏りに気付き、バランスの良い思考を導き出します。" required></textarea>
      </div>
      <div>
        <label htmlFor="change">⑦気分の変化</label><span>*</span> <br />
        <textarea id="change" name="change" cols="62" rows="4" placeholder="それぞれの強さを%表記します。" required></textarea>
      </div>
      <div>
        <label htmlFor="option">Option</label> <br />
        <textarea id="option" name="option" cols="62" rows="4" placeholder="振り返ってみると、さらに俯瞰ができます。"></textarea>
      </div>
      <div>
        <input type="submit" value="送信" />
      </div>
    </form>
  );
}