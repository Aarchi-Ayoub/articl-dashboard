import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

const EditArticls = (props) => {
  console.log(props);
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="description" />
        <NumberInput source="price" />
      </SimpleForm>
    </Edit>
  );
};
export default EditArticls;
