import NumberFormat from "react-number-format";
import DatePicker from "react-datepicker";

const FormCard = ({
  setSpendingItem,
  setTotalSpendingItem,
  setTotalPriceSpended,
  startDate,
  dateFormatter,
  alignText,
  card,
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
              onChange={(e) => setSpendingItem(e.target.value)}
            />
          </li>
          <li className="list-group-item">
            <label htmlFor="total-item">Total Item : </label>
            <input
              type="text"
              name="total-item"
              className={alignText}
              onChange={(e) => setTotalSpendingItem(e.target.value)}
            />
          </li>
          <li className="list-group-item">
            <label htmlFor="total-price">Total Price : </label>
            <NumberFormat
              name="total-price"
              className={alignText}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix={"Rp."}
              onChange={(e) => setTotalPriceSpended(e.target.value)}
            />
          </li>
          <li className="list-group-item">
            <input type="submit" value="Submit" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default FormCard;
