
import { router } from "@/lib/router";
import { userApi } from "@/api/user-api/user-api";
import { HTTP_CODES } from "@/consts";


export const privateRoute= async () => {
  try {
    const res = await userApi.getCurrentUser()
    if (res.status === HTTP_CODES.UNAUTHORIZED) {
      router.go('/login')
    }
    
  } catch (error) {
    router.go('/login')
  }
}
