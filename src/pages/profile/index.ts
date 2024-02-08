import Handlebars from "handlebars";

import { USER_VALUE } from "./consts";

export { default as ProfilePage } from "./profile.hbs?raw";
export { default as ProfilePageClass } from "./profile.view";

// TODO - вынести хелпер
Handlebars.registerHelper("profileValue", () => USER_VALUE);
