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

interface IRegistrationApi {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const registrationApi = async (data: IRegistrationApi) => {
  const formData = new FormData();

  Object.entries(data).forEach((el) => {
    formData.append(el[0], el[1]);
  });

  const response = await axios.post("/api/auth/register", formData);

  return response;
};
