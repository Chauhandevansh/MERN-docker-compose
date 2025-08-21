import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const API_URL = import.meta.env.VITE_API_URL;



const App = () => {
  return (
    <div className="w-full p-6">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App;
