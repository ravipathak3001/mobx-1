import { observer } from "mobx-react";
import React from "react";
import { useTeamStore } from "./TeamStore";

const TeamInfo = () => {
  const { teamName, setMascot } = useTeamStore();
  return (
    <>
      <h1>Team: {teamName}</h1>
      <input
        type="text"
        placeholder="change mascot"
        onChange={(e) => setMascot(e.target.value)}
      />
    </>
  );
};

export default observer(TeamInfo);
