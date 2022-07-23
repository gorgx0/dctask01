import { InputJsonValue } from "../../types";

export type SklepCreateInput = {
  address?: InputJsonValue;
  location?: string | null;
  nazwa: string;
};
