import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SklepWhereInput = {
  address?: JsonFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  nazwa?: StringFilter;
};
