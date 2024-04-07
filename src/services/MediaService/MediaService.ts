import { ApiResponse, IApiService } from "@/services/Api";

import { MediaFile } from "./MediaService.types";

class MediaService {
  _apiService: IApiService;

  constructor(_apiService: IApiService) {
    this._apiService = _apiService;
  }

  //-------------------

  uploadFile = (file: File) => {
    const formdata = new FormData();
    formdata.append("image", file, file.name);

    return this._apiService.post<ApiResponse<MediaFile>>("/upload", formdata);
  };
}

export default MediaService;
