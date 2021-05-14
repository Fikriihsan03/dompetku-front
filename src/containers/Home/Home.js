import React, { useState } from "react";
import classes from "./Home.module.css";
import NumberFormat from "react-number-format";
import FormCard from "../../components/FormCard/FormCard";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Home = () => {
  const dateFormatter = (date, type) => {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    const formattedDate = date.toISOString().slice(0, 10).split("-").join("-");
    if (type === "income") {
      setIncomeDate(formattedDate);
      setStartDate(date);
    } else {
      setSpendingDate(formattedDate);
      setStartDate(date);
    }
  };
  const submitIncome = (e) => {
    e.preventDefault();
    console.log(incomeDate, moneyIncome);
    if (incomeDate === "" || moneyIncome === "") {
      return alert("please fill the input");
    }
    fetch("http://localhost:3002/income_log", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: incomeDate,
        money_income: moneyIncome,
      }),
    });
    setMoneyIncome("");
  };
  const submitSpending = (e) => {
    e.preventDefault();
    if (
      spendingDate === "" ||
      moneySpended === "" ||
      spendingItem === "" ||
      totalSpendingItem === ""
    ) {
      return alert("please fill the input");
    }
    fetch("http://localhost:3002/spending_log", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: spendingDate,
        money_spended: moneySpended,
        item_name: spendingItem,
        total_items: totalSpendingItem,
      }),
    });
    setSpendingDate("");
    setTotalMoneySpended("");
    setSpendingItem("");
    setTotalSpendingItem("");
  };
  //-----------state---------
  const [showForm, setShowForm] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalSpending, setTotalSpending] = useState(0);
  const [incomeDate, setIncomeDate] = useState("");
  const [spendingDate, setSpendingDate] = useState("");
  const [spendingItem, setSpendingItem] = useState("");
  const [totalSpendingItem, setTotalSpendingItem] = useState("");
  const [moneySpended, setTotalMoneySpended] = useState("");
  const [moneyIncome, setMoneyIncome] = useState("");
  //-----END-------
  let form = (
    <FormCard
      dateFormatter={dateFormatter}
      spendingItem={spendingItem}
      setSpendingItem={setSpendingItem}
      totalSpendingItem={totalSpendingItem}
      setTotalSpendingItem={setTotalSpendingItem}
      moneySpended={moneySpended}
      setTotalMoneySpended={setTotalMoneySpended}
      startDate={startDate}
      setStartDate={setStartDate}
      submit={submitSpending}
      alignText={classes.AlignTextCenter}
      card={classes.Card}
      dateText={classes.DateText}
    />
  );
  if (showForm) {
    form = (
      <div className={classes.Card} style={{ width: "18rem" }}>
        <div className="card-header">
          <strong>Pemasukan</strong>
        </div>
        <form>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <label htmlFor="tanggal">Tanggal: </label>
              <DatePicker
                name="tanggal"
                className={classes.DateText}
                dateFormat="dd/MM/YYY"
                selected={startDate}
                onChange={(date) => dateFormatter(date, "income")}
              />
            </li>
            <li className="list-group-item">
              <label htmlFor="total-income">Total Income : </label>
              <NumberFormat
                name="total-income"
                className={classes.AlignTextCenter}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"Rp."}
                value={moneyIncome}
                onChange={(e) => setMoneyIncome(e.target.value)}
              />
            </li>
            <li className="list-group-item">
              <input type="submit" value="Submit" onClick={submitIncome} />
            </li>
          </ul>
        </form>
      </div>
    );
  }

  return (
    <div className={classes.App}>
      <h1>Anda ingin mencatat apa Wahai User ?</h1>
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
