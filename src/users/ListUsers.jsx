import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  SimpleList,
  DateField,
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";
import FilterUsers from "./FilterUsers";
const ListUsers = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    //filters={<FilterUsers />}
    <List {...props} title="Users List">
      {/* {isSmall ? (
        <SimpleList
          primaryText={(record) => record.first_name + " " + record.last_name}
          secondaryText={(record) => record.email}
          tertiaryText={(record) =>
            new Date(record.created_at).toLocaleDateString()
          }
        />
      ) : ( */}
      {/* <List {...props}> */}
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <EmailField source="email" />
        <TextField source="role" />
        <TextField source="status" />
        <DateField source="created_at" />
      </Datagrid>
      {/* )}{" "} */}
    </List>
  );
};

export default ListUsers;
