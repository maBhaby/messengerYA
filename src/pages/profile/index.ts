import Handlebars from "handlebars";

import { USER_VALUE } from "./consts";

export { default as ProfilePage } from "./profile.hbs?raw";
export { ProfilePage as ProfilePageClass } from "./profile";

// TODO - вынести хелпер
Handlebars.registerHelper("profileValue", () => USER_VALUE);
