import { HTTPInstance } from "@/services/HTTP";
import { BaseAPI } from "../base-api";

class AuthApi extends BaseAPI {
  public create(userValue: any): void {
    HTTPInstance.post('/auth/signup', {
      data: userValue
    })
  }

  public signIn(data: any) {
    HTTPInstance.post('/auth/signin', data)
  }
  
}

export const authApi = new AuthApi()