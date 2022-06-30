import { AxiosResponse } from "axios";

import { IUser } from "../models/User";
import api from "./api";

export const userService = {
  async getUsers(): Promise<AxiosResponse<IUser[]>> {
    const response = await api.get("/users");
    return response;
  }
}
