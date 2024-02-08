import { HTTPInstance } from "@/services/HTTP";
// import { UserModel } from "@/interfaces/User";
import { BaseAPI } from "../base-api";

class UserApi extends BaseAPI {
  async getCurrentUser() {
    const result = await HTTPInstance.get("/auth/user");
    // return JSON.parse(result.response) as UserModel;
    return result
  }
}

export const userApi = new UserApi();
