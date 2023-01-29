import { observer } from "mobx-react";
import React, { useState } from "react";
import Athelete from "./Athelete";

type Props = {
  athelete: Athelete;
};

const TradeForm = ({ athelete }: Props) => {
  const [teamName, setTeamName] = useState<string>("");

  return (
    <>
      <input
        type="text"
        placeholder="Team Name... "
        onChange={(e) => setTeamName(e.target.value)}
      />
      <span>
        <button type="button" onClick={() => athelete.tradePlayer(teamName)}>
          Trade
        </button>
      </span>
    </>
  );
};

export default observer(TradeForm);
