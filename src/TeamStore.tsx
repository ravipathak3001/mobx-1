import { makeAutoObservable } from "mobx";
import React, { useContext, useRef } from "react";
import Athelete from "./Athelete";

export default class TeamStore {
  constructor(players: Athelete[]) {
    this.players = players;
    makeAutoObservable(this);
  }

  state = "New York";
  setState = (state: string) => {
    this.state = state;
  };

  mascot = "";
  setMascot = (mascot: string) => {
    this.mascot = mascot;
  };

  players: Athelete[] = [];

  get teamName(): string {
    return `${this.state} ${this.mascot}`;
  }

  get totalYearlyCost(): number {
    return this.players.reduce(
      (totalSalary, currentAthelete) => totalSalary + currentAthelete.salary,
      0
    );
  }

  addPlayer = (player: Athelete) => {
    this.players.push(player);
  };
}

const TeamStoreContext = React.createContext<TeamStore>(
  null as unknown as TeamStore
);

export const useTeamStore = () => useContext(TeamStoreContext);

type Props = {
  children: React.ReactNode;
  players: Athelete[];
};

export function TeamStoreProvider({ children, players }: Props) {
  const store = useRef(new TeamStore(players));

  return (
    <TeamStoreContext.Provider value={store.current}>
      {children}
    </TeamStoreContext.Provider>
  );
}
