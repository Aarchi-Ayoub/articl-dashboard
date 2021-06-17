import React from "react";
import { Filter, ReferenceInput, SelectInput, TextInput } from "react-admin";
const FilterUsers = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="role" alwaysOn />
      <ReferenceInput label="Name" source="id" reference="users" allowEmpty>
        <SelectInput optionText="first_name" />
      </ReferenceInput>
    </Filter>
  );
};

export default FilterUsers;
