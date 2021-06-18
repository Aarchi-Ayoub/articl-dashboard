import React from "react";
import { Filter, ReferenceInput, SelectInput, TextInput } from "react-admin";
const FilterUsers = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Role" source="role" alwaysOn />
      <ReferenceInput label="Name" source="id" reference="users" allowEmpty>
        <SelectInput optionText="email" />
      </ReferenceInput>
    </Filter>
  );
};

export default FilterUsers;
