import { experimentsService } from "@/services/experiments";

export const useGetExperiment = async (experimentId: string) => {
    const result = await useAsyncData(
        `/api/experiment/${experimentId}`,
        () => experimentsService?.getExperiment(experimentId),
        {
            server: false,
            lazy: true,
        },
    );
    return result;
};

interface UseGetExperimentsProps {
    limit?: number;
    offset?: number;
}

export const useGetExperiments = async ({ limit = 30, offset = 0 }: UseGetExperimentsProps = {}) => {
    const result = await useAsyncData(`/api/experiments`, () => experimentsService?.getExperiments(), {
        server: false,
        lazy: true,
    });
    return result;
};
