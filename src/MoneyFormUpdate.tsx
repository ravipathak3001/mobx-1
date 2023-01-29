import { action, computed, observable, toJS } from "mobx";
import { observer } from "mobx-react";
import React, { useState } from "react";
import Athelete from "./Athelete";
import { useTeamStore } from "./TeamStore";

type FormState = {
  name: string;
  age: number;
  salary: number;
};

const initialState: FormState = {
  name: "",
  age: 0,
  salary: 0,
};

const formState: FormState = observable({
  name: "",
  age: 0,
  salary: 0,
});

const MoneyFormUpdate = () => {
  const { totalYearlyCost, addPlayer } = useTeamStore();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
      <p>Total: {totalYearlyCost} Million</p>
      <input
        type="text"
        placeholder="Player Name..."
        style={{ height: "40px" }}
        value={formState.name}
        onChange={action((e) => (formState.name = e.target.value))}
      />
      <input
        type="number"
        placeholder="year"
        style={{ height: "40px" }}
        value={formState.age}
        onChange={action((e) => (formState.age = Number(e.target.value)))}
      />
      <input
        type="number"
        placeholder="yearly salary..."
        style={{ height: "40px" }}
        value={formState.salary}
        onChange={action((e) => (formState.salary = Number(e.target.value)))}
      />
      <button
        type="button"
        onClick={action((e) => {
          addPlayer(
            new Athelete(formState.name, formState.age, formState.salary)
          );
        //   formState = initialState;
        })}
      >
        calculate
      </button>
    </div>
  );
};

export default observer(MoneyFormUpdate);
