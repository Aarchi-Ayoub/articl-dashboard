import React from "react";
import { Admin, fetchUtils, Resource } from "react-admin";

import jsonServerProvider from 'ra-data-json-server';

import authProvider from "./auth/authProvider";
import { isAutenticate } from "./auth/isAuth";

import Dashboard from "./pages/Dashboard";
import ListUsers from "./users/ListUsers";

const App = () => {
  const {token, user} = isAutenticate();
  
  const httpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set("Authorization" ,   `Bearer ${token}`);
    options.headers.set("Authorization" ,   `Bearer ${token}`);
   
    return fetchUtils.fetchJson(url, options);
  };
  
  const dataProvider = jsonServerProvider("http://localhost:8000/api/v1",httpClient);
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
