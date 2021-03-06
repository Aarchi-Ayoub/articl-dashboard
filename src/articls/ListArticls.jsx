import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  EditButton,
  DeleteButton,
  ShowButton,
  EmailField,
} from "react-admin";
const ListArticls = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="description" />
        <TextField source="name" />
        <NumberField source="price" />

        <EmailField source="user.email" label="Owner" />
        <DateField source="created_at" />

        <EditButton label="Edit" basePath="/articls" />
        <DeleteButton label="Delete" basePath="/articls" />
        <ShowButton label="Show" basePath="/articls" />
      </Datagrid>
    </List>
  );
};

export default ListArticls;
