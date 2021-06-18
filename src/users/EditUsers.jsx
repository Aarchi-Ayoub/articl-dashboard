import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  DateInput,
} from "react-admin";

const EditUsers = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <SelectInput
          source="role"
          choices={[
            { id: "admin", name: "Administarator" },
            { id: "user", name: "Customer" },
          ]}
        />
        <SelectInput
          source="status"
          choices={[
            { id: "active", name: "Active" },
            { id: "disabled", name: "Disable" },
            { id: "deleted", name: "Deleted" },
          ]}
        />

        <TextInput source="first_name" />
        <TextInput source="last_name" />
      </SimpleForm>
    </Edit>
  );
};

export default EditUsers;
