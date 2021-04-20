import { useEffect, useState } from "react";

const IncomeLog = () => {
  // const sortedActivities = incomeData
  //   .slice()
  //   .sort((a, b) => (b.date > a.date ? 1 : -1));
  // const sortedActivities = incomeData.sort(function (a, b) {
  //   var aa = a.date.split("/").reverse().join(),
  //     bb = b.date.split("/").reverse().join();
  //   return aa < bb ? -1 : aa > bb ? 1 : 0;
  // });
  // console.log(sortedActivities.reverse());
  const [incomeData, setIncomeData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/income_log")
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
            <td>Tanggal</td>
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
