import React from "react";
import { Show, TextField, DateField, SimpleShowLayout } from "react-admin";

const ShowUsers = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout rowClick="show">
        <TextField source="id" disabled />
        <TextField source="role" />
        <TextField source="status" />
        <TextField source="email" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <DateField source="created_at" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ShowUsers;
