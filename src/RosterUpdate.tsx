import { observer } from "mobx-react";
import React from "react";
import Athelete from "./Athelete";
import { useTeamStore } from "./TeamStore";
import TradeForm from "./TradeForm";

const RosterUpdate = () => {
  const { players } = useTeamStore();
  return (
    <table>
      <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Team</td>
        <td>Trade Form</td>
        <td>Birthday ?</td>
      </tr>
      {players.map((athelete) => {
        return (
          <tr key={athelete.name}>
            <td>{athelete.name}</td>
            <td>{athelete.age}</td>
            <td>{athelete.teamHistory}</td>
            <td>
              <TradeForm athelete={athelete} />
            </td>
            <td>{athelete.salary}</td>
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

export default observer(RosterUpdate);
