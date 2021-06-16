import React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from "react-admin";

const ListUsers = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="_id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <EmailField source="email" />
        <TextField source="role" />
        <UrlField source="status" />
        <TextField source="created_at" />
      </Datagrid>
    </List>
  );
};

export default ListUsers;