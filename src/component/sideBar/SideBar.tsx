import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/store";
import { nanoid } from "nanoid";
const { Sider } = Layout;
type propsType = {};
export const SideBar: React.FC<propsType> = () => {
  const notes = useSelector((state: AppStateType) => state.notesReducer.notes);
  const notesList = notes.map((note) => {
    return (
      <Menu.Item key={nanoid()}>
        <NavLink to={note.title} className={note.title}>
          {note.title}
        </NavLink>
      </Menu.Item>
    );
  });
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="2">
          <NavLink to="/create">Create New Note</NavLink>
        </Menu.Item>
        {notesList}
      </Menu>
    </Sider>
  );
};
