import { authApi } from "@/api/auth-api"
import { router } from "@/lib/router"

export class ProfileService {
  public handleUserLogout = async () => {
    try {
      await authApi.logout()
      window.store.set({user: null})

      router.go('/login')
    } catch {
      throw new Error('ERROR')
    }
  }
}

export const profileService = new ProfileService()
