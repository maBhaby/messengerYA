import { navigate } from "@/services/navigate";

export const handleRedirectToChat = (e: Event) => {
  e.preventDefault();
  navigate("chat");
};

export const handleLogout = (e: Event) => {
  e.preventDefault();
  navigate("login");
};

export const handleRedirectToProfileEdit = (e: Event) => {
  e.preventDefault();
  navigate("profile-edit");
};

export const handleRedirectToChangePassword = (e: Event) => {
  e.preventDefault();
  navigate("change-password");
};
