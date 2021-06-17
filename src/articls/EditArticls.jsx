import React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  NumberInput,
  DateInput,
} from "react-admin";
import SelectInput from "@material-ui/core/Select/SelectInput";

const EditArticls = (props) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <ReferenceInput source="_id" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput> */}
      <TextInput source="name" />
      <TextInput multiline source="description" />
      <NumberInput source="price" />
    </SimpleForm>
  </Edit>
);
export default EditArticls;
// export const ArticlEdit = props => (
//     <Edit {...props}>
//         <SimpleForm>
//             <ReferenceInput source="_id" reference="s"><SelectInput optionText="id" /></ReferenceInput>
//             <TextInput source="description" />
//             <TextInput source="name" />
//             <NumberInput source="price" />
//             <ReferenceInput source="user_id" reference="users"><SelectInput optionText="id" /></ReferenceInput>
//             <NumberInput source="created_at" />
//             <TextInput source="id" />
//             <DateInput source="__v" />
//         </SimpleForm>
//     </Edit>
// );
