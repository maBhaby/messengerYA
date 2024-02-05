import { authApi } from "@/api/auth-api/auth-api";
import { UserCreateModel } from "@/interfaces/registration";
import { router } from "@/lib/router";

class RegistrationService {
  signin(data: UserCreateModel) {
    // validate
    try {
      authApi.create(data);
      router.go("/chat");
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}

export const registrationService = new RegistrationService();
