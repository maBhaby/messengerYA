import { authApi } from "@/api/auth-api/auth-api";
import { userApi } from "@/api/user-api/user-api";
import { LoginModel } from "@/interfaces/login";
import { router } from "@/lib/router";
import { apiHasError } from "@/utils/apiHasError";

class LoginService {
  public async signIn(data: LoginModel) {
    const response = await authApi.signIn(data);

    if (apiHasError(response)) {
      throw new Error("не смог ауф");
    }
    const userData = await userApi.getCurrentUser();
    window.store.set({ user: userData });

    router.go("/chat");
  }
}

export const loginService = new LoginService();
