import Sidebar from "../components/sidebar";
import Dashboard from "./dashboard";

const CustomLayout = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default CustomLayout;
