export { default as ChatPage } from './chat.hbs?raw'

import Handlebars from 'handlebars'

Handlebars.registerHelper('chatList', () => {
  return [
    {
      title: 'Андрей',
      time: '10:49',
      message: 'Изображение',
      unreadMessages: 4,
      linkToChat: '/test'
    },
    {
      title: 'Киноклуб',
      time: 'Пт',
      message: 'Круто',
      linkToChat: '/rap'
    },
  ]
})