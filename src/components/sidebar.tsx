import {
  DollarCircleOutlined,
  FileTextOutlined,
  FundOutlined,
  UserOutlined,
} from "@ant-design/icons";
import studenSrc from "../assets/student.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {/* <div className="avatar"></div>
          <h2 className="username">John Doe</h2>
          <p className="year">3rd Year</p> */}
        <img src={studenSrc} alt="" />
      </div>
      <div className="menu-items">
        <p className="menu-item">
          <UserOutlined className="icon" /> Dashboard
        </p>
        <p className="menu-item">
          <DollarCircleOutlined className="icon" /> Payment Info
        </p>
        <p className="menu-item">
          <FileTextOutlined className="icon" /> Registration
        </p>
        <p className="menu-item">
          <FundOutlined className="icon" /> Courses
        </p>
        <p className="menu-item">
          <FundOutlined className="icon" /> Drop Semester
        </p>
        <p className="menu-item">
          <FundOutlined className="icon" /> Result
        </p>
        <p className="menu-item">
          <FileTextOutlined className="icon" /> Notice
        </p>
        <p className="menu-item">
          <FileTextOutlined className="icon" /> Schedule
        </p>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
