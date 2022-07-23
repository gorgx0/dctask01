import { SklepWhereInput } from "./SklepWhereInput";
import { SklepOrderByInput } from "./SklepOrderByInput";

export type SklepFindManyArgs = {
  where?: SklepWhereInput;
  orderBy?: Array<SklepOrderByInput>;
  skip?: number;
  take?: number;
};
