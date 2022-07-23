import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SklepCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="location" source="location" />
        <TextInput label="nazwa" source="nazwa" />
      </SimpleForm>
    </Create>
  );
};
