import { React, useState } from "react";
import { Link } from "react-router-dom";
import {InfoCircleOutlined, } from "@ant-design/icons";
import { Menu } from "antd";
import Logout from "./components/Logout";

const items = [
  {
    label: <Link to="/home">Home</Link>,
    key: "home",
    icon: <InfoCircleOutlined />,
  },
  {
    label: <Link to="/about">About</Link>,
    key: "about",
    icon: <InfoCircleOutlined />,
  },
  {
    label: <Logout/>,
    key: "logout",
  },
  // {
  //   label: "Submenu",
  //   key: "SubMenu",
  //   icon: <SettingOutlined />,
  //   children: [
  //     {
  //       type: "group",
  //       label: "Item 1",
  //       children: [
  //         {
  //           label: "Option 1",
  //           key: "setting:1",
  //         },
  //         {
  //           label: "Option 2",
  //           key: "setting:2",
  //         },
  //       ],
  //     },
  //     {
  //       type: "group",
  //       label: "Item 2",
  //       children: [
  //         {
  //           label: "Option 3",
  //           key: "setting:3",
  //         },
  //         {
  //           label: "Option 4",
  //           key: "setting:4",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default function Navigation() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      theme="light"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
