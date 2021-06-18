import React from "react";
import { Filter, ReferenceInput, SelectInput, TextInput } from "react-admin";
const FilterArticls = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Name" source="name" alwaysOn />
    </Filter>
  );
};

export default FilterArticls;
