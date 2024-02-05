import {
  validateEmail,
  validateLogin,
  validateName,
  validatePhone,
} from "@/utils/validations/login";

export const USER_VALUE = [
  {
    label: "Почта",
    type: "text",
    name: "email",
    value: "pochta@yandex.ru",
    validate: validateEmail,
    ref: "email",
  },
  {
    label: "Логин",
    type: "text",
    name: "login",
    value: "ivanivanov",
    validate: validateLogin,
    ref: "login",
  },
  {
    label: "Имя",
    type: "text",
    name: "first_name",
    value: "Иван",
    validate: validateName,
    ref: "first_name",
  },
  {
    label: "Фамилия",
    type: "text",
    name: "second_name",
    value: "Иванов",
    validate: validateName,
    ref: "second_name",
  },
  {
    label: "Имя в чате",
    type: "text",
    name: "display_name",
    value: "Иван",
    validate: validateName,
    ref: "display_name",
  },
  {
    label: "Телефон",
    type: "text",
    name: "phone",
    value: "+7 (909) 967 30 30",
    validate: validatePhone,
    ref: "phone",
  },
];
