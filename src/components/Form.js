import React from "react";
import Textarea from "./Textarea";
import Button from "./Button";

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
        <label htmlFor="①状況">①状況 = Event<span>*</span></label>
        <Textarea id="①状況" name="①状況" cols="50" rows="4" placeholder="発生タイミングは、②③が発生する直前です。それを叙事的(機械的)に書きます。" required />
        <label htmlFor="②気分">②気分 = Feeling<span>*</span></label>
        <Textarea id="②気分" name="②気分" cols="50" rows="4" placeholder="それぞれの強さを%表記します(寄与が大きいものに着目するとよいです。)。" required />
        <label htmlFor="③自動思考">③自動思考 = Idea<span>*</span></label>
        <Textarea id="③自動思考" name="③自動思考" cols="50" rows="4" placeholder="自動思考とは、経験などから生じた思考の型(スキーマ)から発生する思考です。" required />
        <label htmlFor="④根拠">④根拠<span>*</span></label>
        <Textarea id="④根拠" name="④根拠" cols="50" rows="4" placeholder="自分なりの根拠を書いてみます。" required />
        <label htmlFor="⑤反証">⑤反証<span>*</span></label>
        <Textarea id="⑤反証" name="⑤反証" cols="50" rows="4" placeholder="自分の経験に基づいた、多くの反証を見つけるとよいです。XXにとらわれすぎないようにします(XX: 指標など。)。" required />
        <label htmlFor="⑥適応的思考">⑥適応的思考<span>*</span></label>
        <Textarea id="⑥適応的思考" name="⑥適応的思考" cols="50" rows="4" placeholder="反証から、思考の偏りに気付き、バランスの良い思考を導き出します。" required />
        <label htmlFor="⑦気分の変化">⑦気分の変化<span>*</span></label>
        <Textarea id="⑦気分の変化" name="⑦気分の変化" cols="50" rows="4" placeholder="それぞれの強さを%表記します。" required />
        <label htmlFor="振り返り">振り返り</label>
        <Textarea id="振り返り" name="振り返り" cols="50" rows="4" placeholder="振り返ってみると、さらに俯瞰ができます。" required />
        <Button type="submit">送信 </Button>
    </form>
  );
}