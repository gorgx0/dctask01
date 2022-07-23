import { Sklep as TSklep } from "../api/sklep/Sklep";

export const SKLEP_TITLE_FIELD = "nazwa";

export const SklepTitle = (record: TSklep): string => {
  return record.nazwa || record.id;
};
