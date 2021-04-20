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
      <table style={{ textAlign: "center", border: "2px solid black" }}>
        <thead>
          <tr>
            <td>Date</td>
            <td>Item Name</td>
            <td>Total Item</td>
            <td>Total Spending</td>
          </tr>
        </thead>
        <tbody>
          {spendingData.map((_, i) => {
            return (
              <tr key={[i]}>
                <td>{spendingData[i].spending_date}</td>
                <td>{spendingData[i].item_name}</td>
                <td>{spendingData[i].total_items}</td>
                <td>{spendingData[i].total_spendings}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SpendingLog;
