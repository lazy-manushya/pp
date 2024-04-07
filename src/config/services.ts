import { ApiService } from "@/services/Api";

import { PAY_PIPE_API_URL } from "@/config/api";
import Authentication from "@/services/Authentication";
import ContractsService from "@/services/ContractsService";
import MediaService from "@/services/MediaService";

export const api = new ApiService({ baseUrl: PAY_PIPE_API_URL });

export const authService = new Authentication(api);

export const contractService = new ContractsService(api);

export const mediaService = new MediaService(api);
