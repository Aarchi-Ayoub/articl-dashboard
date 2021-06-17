import React from "react";
import {
  SimpleForm,
  TextInput,
  ReferenceInput,
  NumberInput,
  DateInput,
} from "react-admin";
import SelectInput from "@material-ui/core/Select/SelectInput";
import { Edit } from "@material-ui/icons";

const EditUser = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="status" />
        <ReferenceInput source="_id" reference="s">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput source="role" />
        <TextInput source="email" />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <NumberInput source="created_at" />
        <TextInput source="id" />
        <DateInput source="__v" />
      </SimpleForm>
    </Edit>
  );
};

export default EditUser;
