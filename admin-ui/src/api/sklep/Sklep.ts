import { JsonValue } from "type-fest";

export type Sklep = {
  address: JsonValue;
  createdAt: Date;
  id: string;
  location: string | null;
  nazwa: string;
  updatedAt: Date;
};
