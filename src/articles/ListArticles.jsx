import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
const ListArticles = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="_id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <EmailField source="email" />
        <TextField source="status" />
        <TextField source="role" />
        <TextField source="created_at" />
      </Datagrid>
    </List>
  );
};

export default ListArticles;
