import React from "react";

export default function Form() {
  return (
    <form name="column-method" method="post">
      <fieldset>
        <legend>Column Method</legend>
        <input type="hidden" name="form-name" value="column-method" />
        <div>
          <label htmlFor="occasion">①状況 = Event</label> <br />
          <textarea id="occasion" name="occasion" cols="50" rows="2" required></textarea>
        </div>
        <div>
          <label htmlFor="feels">②気分 = Feels</label> <br />
          それぞれの強さを%表記(寄与の大きいものに着目) <br />
          <textarea id="feels" name="feels" cols="50" rows="2" required></textarea>
        </div>
        <div>
          <label htmlFor="schematic-idea">③自動思考 = Idea</label> <br />
          <textarea id="schematic-idea" name="schematic-idea" cols="50" rows="2" required></textarea>
        </div>
        <div>
          <label htmlFor="cause">④自動思考の根拠</label> <br />
          <textarea id="cause" name="message" cols="50" rows="2" required></textarea>
        </div>
        <div>
          <label htmlFor="anti-these">⑤反証</label> <br />
          自己の経験に基づくものがよい。XXにとらわれすぎない(XX: 指標など) <br />
          <textarea id="anti-these" name="anti-these" cols="50" rows="2" required></textarea>
        </div>
        <div>
          <label htmlFor="rational-idea">⑥適応的思考</label> <br />
          <textarea id="rational-idea" name="rational-idea" cols="50" rows="2" required></textarea>
        </div>
        <div>
          <label htmlFor="change">⑦気分の変化</label> <br />
          それぞれの強さを%表記 <br />
          <textarea id="change" name="change" cols="50" rows="2" required></textarea>
        </div>
        <div>
          <input type="submit" value="送信" />
        </div>
      </fieldset>
    </form>
  );
}