import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import authProvider from "./auth/authProvider";
import Dashboard from "./pages/Dashboard";
import ListUsers from "./users/ListUsers";
const App = () => {
  const dataProvider = simpleRestProvider("http://192.168.11.104:8443/api/v1");
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource name="users" list={ListUsers} />
    </Admin>
  );
};

export default App;
