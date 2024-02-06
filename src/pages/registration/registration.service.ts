import { router } from "@/lib/router";

import { authApi } from "@/api/auth-api/auth-api";
import { userApi } from "@/api/user-api/user-api";

import { UserCreateModel } from "@/interfaces/registration";

import { apiHasError } from "@/utils/apiHasError";

class RegistrationService {
  public async create(data: UserCreateModel) {
    const res = await authApi.create(data);
    // debugger

    if (apiHasError(res.response)) {
      throw new Error("не смог create");
    }

    const userData = await userApi.getCurrentUser();
    window.store.set({ user: userData });

    router.go("/chat");

    // validate
    // try {
    //   authApi.create(data);
    //   router.go("/chat");
    // } catch (error) {
    //   throw new Error(`Error: ${error}`);
    // }
  }
}

export const registrationService = new RegistrationService();
