import { getApiClient } from "@/lib/ofetch";
import { $Fetch } from "ofetch";

class ExperimentsService {
    private static instance: ExperimentsService;
    api: $Fetch;

    private constructor() {
        this.api = getApiClient() as $Fetch;
    }

    public static getInstance(): ExperimentsService {
        if (!ExperimentsService.instance) {
            ExperimentsService.instance = new ExperimentsService();
        }

        return ExperimentsService.instance;
    }

    getExperiments = async (limit: number = 20, offset: number = 0) => {
        const response = await this.api("/experiments", {
            params: {
                limit,
                offset,
            },
        });
        return response?.experiments;
    };

    getExperiment = async (experimentId: string) => {
        const response = await this.api(`/experiments/${experimentId}`);
        return response;
    };
}

export const getExperimentsService = () => {
    return !process?.server && !!process?.client ? ExperimentsService.getInstance() : ({} as ExperimentsService);
};

export const experimentsService = getExperimentsService();
