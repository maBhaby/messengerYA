import { Store } from "@/services/Store"
import { AppState } from "@/interfaces/common"

declare global {
  interface Window {
    store: Store<AppState>;
  }

  type Nullable<T> = T | null;

}
