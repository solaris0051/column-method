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
      <br />
      <div>
        <label htmlFor="occasion">①状況 = Event<span>*</span></label>
        <textarea id="occasion" name="occasion" cols="50" rows="4" placeholder="発生タイミングは、②③が発生する直前です。それを叙事的(機械的)に書きます。" required></textarea>
      </div>
      <br />
      <div>
        <label htmlFor="feeling">②気分 = Feeling<span>*</span></label>
        <textarea id="feeling" name="feeling" cols="50" rows="4" placeholder="それぞれの強さを%表記します(寄与が大きいものに着目するとよいです。)。" required></textarea>
      </div>
      <br />
      <div>
        <label htmlFor="schematic-idea">③自動思考 = Idea<span>*</span></label>
        <textarea id="schematic-idea" name="schematic-idea" cols="50" rows="4" placeholder="自動思考とは、経験などから生じた思考の型(スキーマ)から発生する思考です。" required></textarea>
      </div>
      <br />
      <div>
        <label htmlFor="schematic-cause">④自動思考の根拠<span>*</span></label>
        <textarea id="schematic-cause" name="schematic-cause" cols="50" rows="4" placeholder="自分なりの根拠を書いてみます。" required></textarea>
      </div>
      <br />
      <div>
        <label htmlFor="anti-thesis">⑤反証<span>*</span></label>
        <textarea id="anti-thesis" name="anti-thesis" cols="50" rows="4" placeholder="自分の経験に基づいた、多くの反証を見つけるとよいです。XXにとらわれすぎないようにします(XX: 指標など。)。" required></textarea>
      </div>
      <br />
      <div>
        <label htmlFor="rational-idea">⑥適応的思考<span>*</span></label>
        <textarea id="rational-idea" name="rational-idea" cols="50" rows="4" placeholder="反証から、思考の偏りに気付き、バランスの良い思考を導き出します。" required></textarea>
      </div>
      <br />
      <div>
        <label htmlFor="change">⑦気分の変化<span>*</span></label>
        <textarea id="change" name="change" cols="50" rows="4" placeholder="それぞれの強さを%表記します。" required></textarea>
      </div>
      <br />
      <div>
        <label htmlFor="option">Option</label>
        <textarea id="option" name="option" cols="50" rows="4" placeholder="振り返ってみると、さらに俯瞰ができます。"></textarea>
      </div>
      <br />
      <div>
        <input type="submit" value="送信" />
      </div>
    </form>
  );
}