import { useQuery } from "@tanstack/react-query";
import { analyze } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useAnalyze(location="") {
  const {
    data: analyzeData,
    isPending: analyzePending,
    error: analyzeMessageError,
    isError: analyzeError,
  } = useQuery({
    queryKey: [`Analyze`, location],
    queryFn: async () => {
      try {
        const { data } = await analyze(location);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    analyzeData,
    analyzePending,
    analyzeMessageError,
    analyzeError,
  };
}
