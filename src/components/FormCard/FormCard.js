import NumberFormat from "react-number-format";
import DatePicker from "react-datepicker";

const FormCard = ({
  spendingItem,
  setSpendingItem,
  totalSpendingItem,
  setTotalSpendingItem,
  moneySpended,
  setTotalMoneySpended,
  startDate,
  dateFormatter,
  alignText,
  card,
  submit,
  dateText,
}) => {
  return (
    <div className={card} style={{ width: "18rem" }}>
      <div className="card-header">
        <strong>Pengeluaran</strong>
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
              selected={startDate}
              onChange={(date) => dateFormatter(date, "spending")}
            />
          </li>
          <li className="list-group-item">
            <label htmlFor="item-name">Item Name : </label>
            <input
              type="text"
              name="item-name"
              className={alignText}
              value={spendingItem}
              onChange={(e) => setSpendingItem(e.target.value)}
            />
          </li>
          <li className="list-group-item">
            <label htmlFor="total-item">Total Item : </label>
            <input
              type="text"
              name="total-item"
              className={alignText}
              value={totalSpendingItem}
              onChange={(e) => setTotalSpendingItem(e.target.value)}
            />
          </li>
          <li className="list-group-item">
            <label htmlFor="total-price">Total Price : </label>
            <NumberFormat
              value={moneySpended}
              name="total-price"
              className={alignText}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix={"Rp."}
              onChange={(e) => setTotalMoneySpended(e.target.value)}
            />
          </li>
          <li className="list-group-item">
            <input type="submit" value="Submit" onClick={submit} />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default FormCard;
