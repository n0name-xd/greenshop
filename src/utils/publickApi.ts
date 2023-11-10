import axios, { AxiosResponse } from "axios";

interface ILoginApi {
  userName: string;
  password: string;
}

export const loginApi = async ({
  userName,
  password,
}: ILoginApi): Promise<AxiosResponse<any, any>> => {
  const formData = new FormData();
  formData.append("userName", userName);
  formData.append("password", password);

  const response = await axios.post("/api/auth/login", formData);

  return response;
};
