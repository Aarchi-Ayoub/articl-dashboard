import React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  fetchUtils,
  EditGuesser,
  ShowGuesser,
} from "react-admin";

import jsonServerProvider from "ra-data-json-server";

import authProvider from "./auth/authProvider";

import Dashboard from "./pages/Dashboard";

import ListUsers from "./users/ListUsers";
import EditUsers from "./users/EditUsers";

import ListArticls from "./articls/ListArticls";
import EditArticls from "./articls/EditArticls";

import { isAuthenticate } from "./auth/isAuth";

import UserIcon from "@material-ui/icons/People";
import BookIcon from "@material-ui/icons/Book";

const App = () => {
  const { token, user } = isAuthenticate();

  const httpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({
        Accept: "application/json",
      });
    }
    // options.headers.set("Access-Control-Expose-Headers", "Content-Range");
    // options.headers.set("X-Total-Count", "5");
    options.headers.set("Authorization", `Bearer ${token}`);

    // options.headers.set("Authorization", `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
  };
  const dataProvider = jsonServerProvider(
    "http://192.168.11.104:8443/api/v1",
    httpClient
  );

  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
      title={"Home page"}
    >
      <Resource
        name="users"
        list={ListUsers}
        icon={UserIcon}
        edit={EditUsers}
        show={ShowGuesser}
      />
      <Resource
        name="articls"
        list={ListArticls}
        icon={BookIcon}
        edit={EditArticls}
      />

      {/* <Resource name="commands" list={ListCommands} icon={AssignmentIcon} /> */}
    </Admin>
  );
};

export default App;
