import { APIError } from "@/interfaces/common";

export function apiHasError(response: any): response is APIError {
  // const

  return response?.reason;
}
