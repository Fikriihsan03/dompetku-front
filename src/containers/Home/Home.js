import React, { useState } from "react";
import classes from "./Home.module.css";
import NumberFormat from "react-number-format";
import FormCard from "../../components/FormCard/FormCard";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Home = () => {
  const dateFormatter = (date, type) => {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    const formattedDate = date
      .toISOString()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("-");
    if (type === "income") {
      setIncomeDate(formattedDate);
      setStartDate(date);
    } else {
      setSpendingDate(formattedDate);
      setStartDate(date);
    }
  };
  //-----------state---------
  const [showForm, setShowForm] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [incomeDate, setIncomeDate] = useState("");
  const [spendingDate, setSpendingDate] = useState("");
  const [spendingItem, setSpendingItem] = useState("");
  const [totalSpendingItem, setTotalSpendingItem] = useState("");
  const [totalPriceSpended, setTotalPriceSpended] = useState("");
  const [totalIncome, setTotalIncome] = useState("");
  //-----END-------

  let form = (
    <FormCard
      dateFormatter={dateFormatter}
      setSpendingItem={setSpendingItem}
      setTotalSpendingItem={setTotalSpendingItem}
      setTotalPriceSpended={setTotalPriceSpended}
      startDate={startDate}
      setStartDate={setStartDate}
      alignText={classes.AlignTextCenter}
      card={classes.Card}
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
                onChange={(e) => setTotalIncome(e.target.value)}
              />
            </li>
            <li className="list-group-item">
              <input type="submit" value="Submit" />
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
