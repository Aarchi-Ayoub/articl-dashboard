import React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  fetchUtils,
  EditGuesser,
} from "react-admin";

import authProvider from "./auth/authProvider";

import Dashboard from "./pages/Dashboard";
import ListUsers from "./users/ListUsers";
import EditUser from "./users/EditUser";

import { isAuthenticate } from "./auth/isAuth";

import UserIcon from "@material-ui/icons/People";
import jsonServerProvider from "ra-data-json-server";

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
    return fetchUtils.fetchJson(url, options);
  };

  console.log(httpClient);

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
      <Resource name="users" list={ListUsers} icon={UserIcon} edit={EditUser} />
      {/* <Resource name="articles" list={ListArticles} icon={BookIcon} />

      <Resource name="commands" list={ListCommands} icon={AssignmentIcon} /> */}
    </Admin>
  );
};

export default App;
