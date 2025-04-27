import { useQuery } from "@apollo/client";

export const useDataFetch = (query) => {
  const { loading, error, data } = useQuery(query);
  return { loading, error, data };
};
