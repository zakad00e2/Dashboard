import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App"; // ✅ FIXED: Added "./" and ".jsx"
import Dashboard from "./components/page/dashboard/Dashboard";
import Team from "./components/page/team/Team";
import Contacts from "./components/page/contacts/Contacts";
import Invoices from "./components/page/invoices/Invoices";
import Form from "./components/page/form/Form";
import Calendar from "./components/page/calender/Calender";
import FAQ from "./components/page/faq/Faq";
import BarChart from "./components/page/barChart/BarChart";
import PieChart from "./components/page/pieChart/PieChart";
import LineChart from "./components/page/lineChart/LineChart";
import Geography from "./components/page/geography/Geography";
// import Geography from "./page/geography/Geography";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
