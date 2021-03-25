import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../containers/Home/Home";
import IncomeLog from "../containers/Pemasukan/IncomeLog";
import SpendingLog from "../containers/Pengeluaran/SpendingLog";
import Navbar from "./Navbar/Navbar";

const Routing = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/spending-log" component={SpendingLog} />
          <Route path="/income-log" component={IncomeLog} />
        </Switch>
      </div>
    </Router>
  );
};
export default Routing;
