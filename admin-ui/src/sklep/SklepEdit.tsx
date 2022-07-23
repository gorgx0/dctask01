import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SklepEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="location" source="location" />
        <TextInput label="nazwa" source="nazwa" />
      </SimpleForm>
    </Edit>
  );
};
