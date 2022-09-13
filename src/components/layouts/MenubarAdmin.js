// rafce
import React from "react";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const MenubarAdmin = () => {
  return (
    <nav>
      <ul className="nav flex-column">
        <li className="nav-item mt-1">
          <Link to="/admin/index">
            {" "}
            <button className="btn btn-outline-primary">Dashboard</button>
          </Link>
        </li>

        <li className="nav-item mt-1">
          {/* <a href=""></a> */}
          <Link to="/admin/manage-admin">
            <button className="btn btn-outline-primary">Manage User</button>
          </Link>
        </li>

        <li className="nav-item mt-1">
          {/* <a href=""></a> */}
          <Link to="/admin/create-category">
            {" "}
            <button className="btn btn-outline-primary">Category</button>
          </Link>
        </li>

        <li className="nav-item mt-1">
          {/* <a href=""></a> */}
          <Link to="/admin/create-product">
            <button className="btn btn-outline-primary">Product</button>
          </Link>
        </li>

        <li className="nav-item mt-1">
          {/* <a href=""></a> */}
          <Link to="/admin/orders">
            {" "}
            <button className="btn btn-outline-primary">Manage Order</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenubarAdmin;
