import { observer } from "mobx-react";
import React from "react";
import Athelete from "./Athelete";
import TradeForm from "./TradeForm";

const sachinTendulkar = new Athelete("Sachin Tendulker", 47, 0);
const msDhoni = new Athelete("M.S Dhoni", 35, 0);
const Roster = () => {
  return (
    <table>
      <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Team</td>
        <td>Trade Form</td>
        <td>Birthday ?</td>
      </tr>
      {[sachinTendulkar, msDhoni].map((athelete) => {
        return (
          <tr key={athelete.name}>
            <td>{athelete.name}</td>
            <td>{athelete.age}</td>
            <td>{athelete.teamHistory}</td>
            <td>
              <TradeForm athelete={athelete} />
            </td>
            <td>{athelete.teamHistory}</td>
            <td>
              <button onClick={() => athelete.wishHappyBirthday()}>
                Happy Birthday 🎊
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default observer(Roster);
