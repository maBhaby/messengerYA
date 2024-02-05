import { authApi } from "@/api/auth-api/auth-api"
import { chatApi } from "@/api/chat-api"
import { LoginModel } from "@/interfaces/login"
import { router } from "@/lib/router"

class LoginService {
  async signIn(data: LoginModel) {

    

    try {
      await authApi.signIn(data)
      await chatApi.request()
      router.go('/chat')
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }
}

export const loginService = new LoginService()
