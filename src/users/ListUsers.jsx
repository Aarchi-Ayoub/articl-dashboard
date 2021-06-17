import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
const ListUsers = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <EmailField source="email" />
        <TextField source="role" />
        <TextField source="status" />
      </Datagrid>
    </List>
  );
};

export default ListUsers;
