import React, { useState } from "react";
import classes from "./Home.module.css";
import FormCard from "../../components/FormCard/SpendingForm";
import "react-datepicker/dist/react-datepicker.css";
import IncomeForm from "../../components/FormCard/IncomeForm";

const Home = () => {
  const dateFormatter = (date) => {
    const formattedDate = date.toISOString().slice(0, 10).split("-").join("-");
    setDisplayDate(date);
    return formattedDate;
  };
  const submitIncome = (e) => {
    e.preventDefault();
    if (Object.values(incomeData).some((props) => props === "")) {
      return alert("Please Fill The Input");
    }
    fetch("http://localhost:3002/income_log", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(incomeData),
    });
    setIncomeData({
      date: new Date().toISOString().slice(0, 10).split("-").join("-"),
      total_income: "",
    });
    return alert("Your Income Is Logged");
  };

  const submitSpending = (e) => {
    e.preventDefault();
    if (Object.values(spendingData).some((props) => props === "")) {
      return alert("Please Fill The Input");
    }
    fetch("http://localhost:3002/spending_log", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(spendingData),
    });
    setSpendingData({
      date: new Date().toISOString().slice(0, 10).split("-").join("-"),
      item_name: "",
      total_items: "",
      money_spended: "",
    });
    return alert("Your Spending Is Logged");
  };
  //-----------state---------
  const [showForm, setShowForm] = useState(false);
  const [displayDate, setDisplayDate] = useState(new Date());
  const [spendingData, setSpendingData] = useState({
    date: new Date().toISOString().slice(0, 10).split("-").join("-"),
    item_name: "",
    total_items: "",
    money_spended: "",
  });
  const [incomeData, setIncomeData] = useState({
    date: new Date().toISOString().slice(0, 10).split("-").join("-"),
    total_income: "",
  });
  //-----END-------
  let form = (
    <FormCard
      spendingData={spendingData}
      setSpendingData={setSpendingData}
      dateFormatter={dateFormatter}
      displayDate={displayDate}
      submit={submitSpending}
      alignText={classes.AlignTextCenter}
      card={classes.Card}
      dateText={classes.DateText}
    />
  );
  if (showForm) {
    form = (
      <IncomeForm
        submitIncome={submitIncome}
        setIncomeData={setIncomeData}
        dateFormatter={dateFormatter}
        incomeData={incomeData}
        displayDate={displayDate}
        alignText={classes.AlignTextCenter}
        card={classes.Card}
        dateText={classes.DateText}
      />
    );
  }

  return (
    <div className={classes.App}>
      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="btn btn-success"
      >
        Pemasukan
      </button>
      <button
        type="button"
        onClick={() => setShowForm(false)}
        className="btn btn-danger"
      >
        Pengeluaran
      </button>
      {form}
    </div>
  );
};

export default Home;
