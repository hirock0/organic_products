import { pathaoApi } from "@/utils/pathaoApi/pathaoApi";

interface TokenResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}


  

export const refreshToken = async (refresh_token: string) => {
  const payload = {
    client_id: "7N1aMJQbWm",
    client_secret: "wRcaibZkUdSNz2EI9ZyuXLlNrnAv0TdPUPXMnD39",
    grant_type: "refresh_token",
    refresh_token,
  };

  const { data } = await pathaoApi.post<TokenResponse>("/aladdin/api/v1/issue-token", payload);
  localStorage.setItem("pathao_token", data.access_token);
  return data;
};
