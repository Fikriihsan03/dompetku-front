import { useEffect, useState } from "react";

const SpendingLog = () => {
  const [spendingData, setSpendingData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/spending_log")
      .then((res) => res.json())
      .then((data) => {
        setSpendingData(data);
      });
  }, []);
  return (
    <>
      <h1>SpendingLog</h1>
      <table style={{ textAlign: "center" }} className="row">
        <thead style={{ border: "1px solid black", fontSize: "20px" }}>
          <tr className="row">
            <td className="col-sm-3">Date</td>
            <td className="col-sm-3">Item Name</td>
            <td className="col-sm-3">Total Item</td>
            <td className="col-sm-3">Total Spending</td>
          </tr>
        </thead>
        <tbody>
          {spendingData.map((_, i) => {
            return (
              <tr key={[i]} className="row">
                <td className="col-sm-3">{spendingData[i].spending_date}</td>
                <td className="col-sm-3">{spendingData[i].item_name}</td>
                <td className="col-sm-3">{spendingData[i].total_items}</td>
                <td className="col-sm-3">{spendingData[i].money_spended}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SpendingLog;
