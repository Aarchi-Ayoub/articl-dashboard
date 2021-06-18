import React from "react";
import {
  Show,
  TextField,
  SimpleShowLayout,
  NumberField,
  ReferenceField,
} from "react-admin";

const ShowArticl = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="description" />
        <TextField source="name" />
        <NumberField source="price" />
        <ReferenceField label="Owner" source="user" reference="users">
          <TextField source="first_name" />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

export default ShowArticl;
