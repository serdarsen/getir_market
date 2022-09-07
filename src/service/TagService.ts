import BaseService from "./BaseService";

export const findTags = async (): Promise<string[]> => {
  const response = await BaseService.get("tags");

  const { data } = response || {};

  return data;
};
