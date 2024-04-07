export const PAY_PIPE_API_URL = [
  process.env.NEXT_PUBLIC_PAY_PIPE_API_URL!,
  "api",
  process.env.NEXT_PUBLIC_API_ENV!,
].join("/");
export const LOCAL_STORE_AUTH_DATA_KEY = "PAYPIPE";
