import NumberFormat from "react-number-format";
import DatePicker from "react-datepicker";

const IncomeForm = ({
  incomeData,
  setIncomeData,
  dateFormatter,
  submitIncome,
  displayDate,
  card,
  dateText,
  alignText,
}) => {
  return (
    <div className={card} style={{ width: "18rem" }}>
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
              className={dateText}
              dateFormat="dd/MM/YYY"
              selected={displayDate}
              onChange={(date) =>
                setIncomeData({ ...incomeData, date: dateFormatter(date) })
              }
            />
          </li>
          <li className="list-group-item">
            <label htmlFor="total-income">Total Income : </label>
            <NumberFormat
              name="total-income"
              className={alignText}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix={"Rp."}
              value={incomeData.total_income}
              onChange={(e) =>
                setIncomeData({ ...incomeData, total_income: e.target.value })
              }
            />
          </li>
          <li className="list-group-item">
            <input type="submit" value="Submit" onClick={submitIncome} />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default IncomeForm;
