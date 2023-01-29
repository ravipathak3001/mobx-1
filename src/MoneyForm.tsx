import { action, computed, observable, toJS } from "mobx";
import { observer } from "mobx-react";
import React, { useState } from "react";

type FormState = {
//   total: number;
  years: number;
  salary: number;
};

const formState: FormState = observable({
//   total: 0,
  years: 0,
  salary: 0,
});

const MoneyForm = () => {
  //   const calculateTotal = action((formState: FormState) => {
  //     formState.total = formState.years * formState.salary;
  //   });

  const totalValue = computed(() => formState.salary * formState.years);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
      {/* <p>Total: {formState.total}</p> */}
      <>{toJS(totalValue)}</>
      <input
        type="number"
        placeholder="year"
        style={{ height: "40px" }}
        onChange={action((e) => (formState.years = Number(e.target.value)))}
      />
      <input
        type="number"
        placeholder="yearly salary..."
        style={{ height: "40px" }}
        onChange={action((e) => (formState.salary = Number(e.target.value)))}
      />
      {/* <button type="button" onClick={() => calculateTotal(formState)}>
        calculate
      </button> */}
    </div>
  );
};

export default observer(MoneyForm);
