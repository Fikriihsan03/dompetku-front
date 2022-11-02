import React, { useState } from "react";
import classes from "./Home.module.css";
import NumberFormat from "react-number-format";
import FormCard from "../../components/FormCard/FormCard";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Home = () => {
  const dateFormatter = (date, type) => {
    const formattedDate = date.toISOString().slice(0, 10).split("-").join("-");
    setDisplayDate(date);
    return formattedDate;
  };
  const submitIncome = (e) => {
    e.preventDefault();
    if (incomeDate === "" || moneyIncome === "") {
      return alert("please fill the input");
    }
    fetch("http://localhost:3002/income_log", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: incomeDate,
        total_income: moneyIncome,
      }),
    });
    setMoneyIncome("");
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
    return alert("Your Spending Is Logged")
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
  const [incomeDate, setIncomeDate] = useState("");
  const [moneyIncome, setMoneyIncome] = useState("");
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
                selected={displayDate}
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
