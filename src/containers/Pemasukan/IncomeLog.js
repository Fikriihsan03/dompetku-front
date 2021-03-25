import { incomeData } from "./incomeData";
const IncomeLog = () => {
  const sortedActivities = incomeData
    .slice()
    .sort((a, b) => (b.date > a.date ? 1 : -1));
  console.log(sortedActivities.reverse());
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
          {sortedActivities.map((_, i) => {
            return (
              <tr>
                <td>{sortedActivities[i].date}</td>
                <td>{sortedActivities[i].income}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default IncomeLog;
