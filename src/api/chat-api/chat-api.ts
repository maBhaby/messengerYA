import { HTTPInstance } from "@/services/HTTP";
import { BaseAPI } from "../base-api";

class ChatApi extends BaseAPI {
  async request(): Promise<void> {
    await HTTPInstance.get("/chats");
  }
}

export const chatApi = new ChatApi();
