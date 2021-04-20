import { useEffect, useState } from "react";

const IncomeLog = () => {
  const [incomeData, setIncomeData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/income_log")
      .then((res) => res.json())
      .then((data) => {
        setIncomeData(data);
      });
  }, []);
  return (
    <>
      <h1>IncomeLog</h1>
      <table style={{ textAlign: "center", border: "2px solid black" }}>
        <thead>
          <tr>
            <td>Date</td>
            <td>Total Income</td>
          </tr>
        </thead>
        <tbody>
          {incomeData.map((_, i) => {
            return (
              <tr key={[i]}>
                <td>{incomeData[i].income_date}</td>
                <td>{incomeData[i].total_income}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default IncomeLog;
