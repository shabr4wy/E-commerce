/** @format */
import Header from "../components/Header";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
