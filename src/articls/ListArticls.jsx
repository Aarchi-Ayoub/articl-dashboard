import React from "react";
import { List, Datagrid, TextField, DateField, NumberField } from "react-admin";
const ListArticls = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="description" />
        <TextField source="name" />
        <NumberField source="price" />

        <TextField source="user.first_name" label="Owner" />
        <DateField source="created_at" />
      </Datagrid>
    </List>
  );
};

export default ListArticls;
