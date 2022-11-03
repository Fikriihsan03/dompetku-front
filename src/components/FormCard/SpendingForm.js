import NumberFormat from "react-number-format";
import DatePicker from "react-datepicker";

const FormCard = ({
  spendingData,
  setSpendingData,
  displayDate,
  dateFormatter,
  alignText,
  card,
  submit,
  dateText,
}) => {
  let { item_name, total_item, money_spended } = spendingData;
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
              selected={displayDate}
              onChange={(date) =>
                setSpendingData({ ...spendingData, date: dateFormatter(date) })
              }
            />
          </li>
          <li className="list-group-item">
            <label htmlFor="item-name">Item Name : </label>
            <input
              type="text"
              name="item-name"
              className={alignText}
              value={item_name}
              onChange={(e) =>
                setSpendingData({ ...spendingData, item_name: e.target.value })
              }
            />
          </li>
          <li className="list-group-item">
            <label htmlFor="total-item">Total Item : </label>
            <input
              type="text"
              name="total-item"
              className={alignText}
              value={total_item}
              onChange={(e) =>
                setSpendingData({
                  ...spendingData,
                  total_items: e.target.value,
                })
              }
            />
          </li>
          <li className="list-group-item">
            <label htmlFor="total-price">Total Price : </label>
            <NumberFormat
              value={money_spended}
              name="total-price"
              className={alignText}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix={"Rp."}
              onChange={(e) =>
                setSpendingData({
                  ...spendingData,
                  money_spended: e.target.value,
                })
              }
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
