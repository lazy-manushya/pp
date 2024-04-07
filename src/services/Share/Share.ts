import { ShareParams } from "./Share.types";

class Share {
  static isShareSupported = () => {
    return true;
    return navigator.canShare;
  };

  static share = (params: ShareParams) => {
    if (!this.isShareSupported()) return;

    navigator.share(params);
  };
}

export default Share;
