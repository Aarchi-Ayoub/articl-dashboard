import React from "react";
import {
  Create,
  TextField,
  TextInput,
  NumberInput,
  SimpleForm,
} from "react-admin";
const ListUsers = (props) => {
  return (
    <Create {...props} title="Create article">
      <SimpleForm>
        <TextInput source="description" />
        <TextInput source="name" />
        <NumberInput source="price" />
      </SimpleForm>
    </Create>
  );
};

export default ListUsers;
