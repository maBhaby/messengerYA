import Handlebars from 'handlebars'

export { default as ProfilePage } from './profile.hbs?raw'

Handlebars.registerHelper('profileValue', () => {
  return [
    {
      label: 'Почта',
      type: 'text',
      value: 'pochta@yandex.ru',
      disabled: true
    },
    {
      label: 'Логин',
      type: 'text',
      value: 'ivanivanov',
      disabled: true
    },
    {
      label: 'Имя',
      type: 'text',
      value: 'Иван',
      disabled: true
    },
    {
      label: 'Фамилия',
      type: 'text',
      value: 'Иванов',
      disabled: true
    },
    {
      label: 'Имя в чате',
      type: 'text',
      value: 'Иван',
      disabled: true
    },
    {
      label: 'Телефон',
      type: 'text',
      value: '+7 (909) 967 30 30',
      disabled: true
    },
  ]
})

