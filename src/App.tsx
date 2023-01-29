import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Roster from "./Roster";
import MoneyForm from "./MoneyForm";
import { TeamStoreProvider } from "./TeamStore";
import Athelete from "./Athelete";
import RosterUpdate from "./RosterUpdate";
import MoneyFormUpdate from "./MoneyFormUpdate";
import TeamInfo from "./TeamInfo";

const sachinTendulkar = new Athelete("Sachin Tendulker", 47, 0);
const msDhoni = new Athelete("M.S Dhoni", 35, 0);

function getPlayerFromBackEnd(): Athelete[] {
  return [sachinTendulkar, msDhoni];
}

function App() {
  const players = getPlayerFromBackEnd();
  return (
    <div className="App">
      <header className="App-header">
        <TeamStoreProvider players={players}>
          <TeamInfo />
          <RosterUpdate />
          <MoneyFormUpdate />
        </TeamStoreProvider>
        {/* <Roster />
        <MoneyForm /> */}
      </header>
    </div>
  );
}

export default App;
