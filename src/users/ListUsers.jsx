import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  EditButton,
  ShowButton,
  DeleteButton,
} from "react-admin";
const ListUsers = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <EmailField source="email" />
        <TextField source="role" />
        <TextField source="status" />
        <DateField source="created_at" />

        <EditButton label="Edit" basePath="/users" />
        <DeleteButton label="Delete" basePath="/users" />
        <ShowButton label="Show" basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default ListUsers;
