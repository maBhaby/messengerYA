import Handlebars from "handlebars";
import { PASSWORD_FIELDS_VALUE } from "./consts";

export { default as ProfileChangePassword } from "./profile-change-password.hbs?raw";

export { ProfileChangePassword as ProfileChangePasswordClass } from "./profile-change-password";

Handlebars.registerHelper("passwordValue", () => PASSWORD_FIELDS_VALUE);
