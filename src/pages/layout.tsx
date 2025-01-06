import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Avatar, Drawer } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState, useEffect } from "react";
import logo from "../assets/doubtlyLogo.svg";
import StudentDashboard from "./studentDashboard";

const CustomLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Responsive handling: Detect if the screen width is small
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const userName = "John Doe"; // Replace with dynamic user name
  const profilePictureUrl = "https://via.placeholder.com/40"; // Replace with actual URL

  const renderMenu = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 bg-gray-800 text-white font-bold text-lg">
        <img src={logo} alt="" />
      </div>
      {/* Navigation Menu */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "Projects",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "Files",
          },
        ]}
        className="flex-grow"
      />

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-gray-700 flex items-center gap-3 bg-gray-800">
        {!(isMobile || collapsed) && (<Avatar src={profilePictureUrl} size="large" />)}
        <div className="text-white">
          {!(isMobile || collapsed) && (<p className="text-sm font-semibold">{userName}</p>)}
          <LogoutOutlined
            className="text-gray-400 mt-1 cursor-pointer"
            onClick={() => {
              console.log("User logged out");
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <Layout className="h-screen">
      {/* Desktop Sider */}
      {!isMobile && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="bg-gray-900"
        >
          {renderMenu()}
        </Sider>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          placement="left"
          closable={true}
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={240}
          bodyStyle={{
            padding: 0,
          }}
          zIndex={1000}
        >
          {renderMenu()}
        </Drawer>
      )}

      <Layout>
        <Header className="bg-white flex items-center px-4 shadow-md">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
              if (isMobile) {
                setDrawerVisible(true);
              } else {
                setCollapsed(!collapsed);
              }
            }}
            className="text-gray-600"
          />
        </Header>
        <Content className="p-6 bg-gray-100 flex-grow">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <StudentDashboard />
          </div>

        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;

