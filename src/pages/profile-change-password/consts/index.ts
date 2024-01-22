import { validatePassword } from '@/utils/validations/login';

export const PASSWORD_FIELDS_VALUE = [
  {
    label: 'Старый пароль',
    type: 'password',
    name: 'oldPassword',
    value: 'pochta@yandex.ru',
    ref: 'oldPassword',
    validate: validatePassword,
  },
  {
    label: 'Новый пароль',
    type: 'password',
    name: 'newPassword',
    value: 'pochta@yandex.ru',
    ref: 'newPassword',
    validate: validatePassword,
  },
  {
    label: 'Повторите новый пароль',
    type: 'password',
    name: 'repeatNewPassword',
    value: 'pochta@yandex.ruasd',
    ref: 'repeatNewPassword',
    validate: validatePassword,
  },
];
