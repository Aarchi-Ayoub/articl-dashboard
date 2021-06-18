import React from "react";
import { Admin, Resource, fetchUtils, Layout, ListGuesser } from "react-admin";

import jsonServerProvider from "ra-data-json-server";

import authProvider from "./auth/authProvider";

import Dashboard from "./pages/Dashboard";

import ListUsers from "./users/ListUsers";
import EditUsers from "./users/EditUsers";
import ShowUsers from "./users/ShowUser";

import ListArticls from "./articls/ListArticls";
import EditArticls from "./articls/EditArticls";
import ShowArticl from "./articls/ShowArticl";
import CreateArticl from "./articls/CreateArticl";

import { isAuthenticate } from "./auth/isAuth";

import UserIcon from "@material-ui/icons/People";
import BookIcon from "@material-ui/icons/Book";
import ListIcon from "@material-ui/icons/List";

import TreeMenu from "@bb-tech/ra-treemenu";
import ListOrders from "./orders/ListCommands";

const App = () => {
  const httpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({
        Accept: "application/json",
      });
    }
    const { token } = JSON.parse(localStorage.getItem("auth"));
    options.headers.set("Authorization", `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
  };
  const mydataProvider = jsonServerProvider(
    "http://192.168.11.104:8443/api/v1",
    httpClient
  );
  const adminChoice = () => {
    if (JSON.parse(localStorage.getItem("auth")).user.role == "admin")
      console.log("admin");
  };
  return (
    <Admin
      layout={(props) => <Layout {...props} menu={TreeMenu} />}
      dashboard={Dashboard}
      dataProvider={mydataProvider}
      authProvider={authProvider}
      title={"Home page"}
    >
      {
        /* 
        <Resource
          name="cutemors"
          options={{ label: "Cutemors", isMenuParent: true }}
        />
      <Resource
        name="users"
        list={ListUsers}
        icon={UserIcon}
        edit={EditUsers}
        show={ShowUsers}
        options={{ label: "Users", menuParent: "cutemors" }}
      />
      <Resource
        name="/users/admins"
        options={{ label: "Admins", menuParent: "cutemors" }}
        list={ListUsers}
        icon={UserIcon}
        edit={EditUsers}
        show={ShowUsers}
      /> */ adminChoice()
      }
      <Resource
        name="articls"
        list={ListArticls}
        icon={BookIcon}
        edit={EditArticls}
        show={ShowArticl}
        create={CreateArticl}
      />

      <Resource name="orders" list={ListOrders} icon={ListIcon} />
    </Admin>
  );
};

export default App;
