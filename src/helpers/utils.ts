import { DATA_SOURCE } from "../db/client";

export const convertToType = (id: string) => {
  if (DATA_SOURCE === "postgres") {
    return Number(id);
  } else {
    return id;
  }
};
