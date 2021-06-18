import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ShowButton,
  EmailField,
} from "react-admin";
const ListOrders = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="status" />
        <EmailField source="user.email" label="Buyer" />
        <DateField source="Commande_at" />

        <EditButton label="Edit" basePath="/articls" />
        <DeleteButton label="Delete" basePath="/articls" />
        <ShowButton label="Show" basePath="/articls" />
      </Datagrid>
    </List>
  );
};

export default ListOrders;
