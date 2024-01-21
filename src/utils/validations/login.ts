export const validateLogin = (value: string) => {
  if (value.length === 0) return `Логин не может быть пустым`;
  if (value.length < 3) {
    return `Логин должен состоять минимум из 3 символов`;
  }
  if (value.length > 20) {
    return `Логин должен содержать не более 20 символов`;
  }
  if (!value.match(/^[a-z0-9_-]{3,}$/)) {
    return `Логин должен состоять из одного слова и может включать латинские символы в нижнем регистре, цифры, тире и подчеркивание`;
  }
  return ``;
};

/**
 * от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.
 * @param value
 */
export const validatePassword = (value: string) => {
  if (value.length === 0) return `Пароль не может быть пустым`;
  if (value.length < 6) {
    return `Пароль должен состоять минимум из 6 символов`;
  }
  if (value.length > 40) {
    return `Пароль должен содержать не более 40 символов`;
  }
  if (!value.match(/(?=.*[A-Z])/)) {
    return `Пароль должен состоять из заглавных букв`;
  }
  if (!value.match(/(?=.*[a-z])/)) {
    return `Пароль должен состоять из строчных букв`;
  }
  if (!value.match(/(?=.*[0-9])/)) {
    return `Пароль должен содержать номер`;
  }
  return ``;
};

/**
first_name, second_name — латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).
*/
export const validateName = (value: string) => {
  if (value.length === 0) return `Имя не может быть пустым`;
  if (value.length < 2) {
    return `Имя должно состоять минимум из 2 символов`;
  }
  if (value.length > 50) {
    return `Имя должно содержать не более 50 символов`;
  }
  if (!value.match(/^[A-Z]+/)) {
    return `Имя должно содержать первую заглавную букву`;
  }
  if (!value.match(/[a-z-]$/)) {
    return `Имя должно состоять только из букв и тире`;
  }
  return ``;
};

/**
 * email — латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.//  /^\S+@\S+\.\S+$/
 */
export const validateEmail = (value: string) => {
  if (value.length === 0) return `Электронная почта не может быть пустой`;

  if (!value.match(/^\S+@\S+\.\S+$/)) {
    return `Неверный адрес электронной почты`;
  }
  return ``;
};

/**
 * phone — от 10 до 15 символов, состоит из цифр, может начинается с плюса.
 */

export const validatePhone = (value: string) => {
  if (value.length === 0) return `Телефон не может быть пустым`;

  if (
    !value.match(
      /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
    )
  ) {
    return `Неверный телефон, пример +123-456-789`;
  }
  return ``;
};
/**
 * message — не должно быть пустым.
 */
export const validateMessage = (value: string) => {
  if (value.length === 0) return `Сообщение не может быть пустым`;
  return ``;
};
