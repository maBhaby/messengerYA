import { HTTPInstance } from "@/services/HTTP";
import { UserCreateModel } from "@/interfaces/registration";
import { LoginModel } from "@/interfaces/login";
import { toJSON } from "@/utils/common";
import { BaseAPI } from "../base-api";

class AuthApi extends BaseAPI {
  public async create(userValue: UserCreateModel) {
    const result = await HTTPInstance.post("/auth/signup", {
      data: toJSON(userValue),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    return result;
  }

  public async signIn(data: LoginModel): Promise<void> {
    await HTTPInstance.post("/auth/signin", {
      data: toJSON(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  }

  public async logout(): Promise<void> {
    await HTTPInstance.post("/auth/logout");
  }
}

export const authApi = new AuthApi();
