import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Main from "./components/Main/Main";
import { Flowbite } from "flowbite-react";
import AirtimeCash from "./components/CashAirtime/AirtimeCash";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import HelpSupport from "./components/HelpSupport/HelpSupport";
import Auth from "./components/auth/Auth";
import Welcome from "./components/Landing/Welcome";
import Profile from "./components/Profile/Profile";

const customTheme = {
  button: {
    size: {
      middle:
        "text-xs px-2 py-1 md:text-sm md:px-4 md:py-1.5 xl:text-base xl:px-6 xl:py-2 2xl:text-xl",
    },
  },
  pagination: {
    pages: {
      selector: {
        active:
          "bg-cyan-50 text-white hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      },
    },
  },
  textInput: {
    field: {
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400 animate-spin",
      },
    },
  },
};

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
            <Route exact path="/auth" element={<Welcome />}>
                <Route exact path="/auth/login" element={<Auth />} />
              </Route>
              <Route exact path="/" element={<Main />}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/dashboard" element={<Home />} />
                <Route exact path="/dashboard/cash-airtime" element={<AirtimeCash />} />
                <Route exact path="/dashboard/transaction-history" element={<TransactionHistory />} />
                <Route exact path="/dashboard/support" element={<HelpSupport />} />
                <Route exact path="/dashboard/profile" element={<Profile />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </Flowbite>
  );
}

export default App;
