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
  const parsedTotalIncome = incomeData.map((ha, i) => {
    return Number(incomeData[i].money_income.split(".").splice(1, 2).join(""));
  });
  const result = parsedTotalIncome.reduce((sum, number) => {
    let result = sum + number;
    return result;
  }, 0);

  console.log(result);
  return (
    <>
      <h1>IncomeLog</h1>
      {/* <div className="row"> */}
      <table style={{ textAlign: "center" }} className="row">
        <thead style={{ border: "1px solid black", fontSize: "20px" }}>
          <tr className="row">
            <td className="col-sm-6 col-xs-6">Date</td>
            <td className="col-sm-6 col-xs-6">Total Income</td>
          </tr>
        </thead>
        <tbody>
          {incomeData.map((_, i) => {
            return (
              <tr key={[i]} className="row">
                <td className="col-sm-6 col-xs-6" style={{ marginTop: "10px" }}>
                  {incomeData[i].income_date}
                </td>
                <td className="col-sm-6 col-xs-6" style={{ marginTop: "10px" }}>
                  {incomeData[i].money_income}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* </div> */}
    </>
  );
};

export default IncomeLog;
