import { canonImage } from '@static/images';
import Handlebars from 'handlebars';

export { default as ChatPage } from './chat.hbs?raw';

Handlebars.registerHelper('chatList', () => [
  {
    title: 'Андрей',
    time: '10:49',
    message: 'Изображение',
    unreadMessages: 4,
    linkToChat: '/test',
  },
  {
    title: 'Киноклуб',
    time: 'Пт',
    message: 'Круто',
    linkToChat: '/rap',
  },
]);

Handlebars.registerHelper('messagesList', () => [
  {
    date: '10 июня',
    messages: [
      {
        type: 'chat',
        time: '12:00',
        message:
          'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
      },
      {
        type: 'me',
        time: '12:20',
        message: 'ниче',
        status: 'readed',
      },
    ],
  },
  {
    date: '19 июня',
    messages: [
      {
        type: 'chat',
        time: '12:00',
        image: canonImage,
      },
      {
        type: 'me',
        time: '12:20',
        message: 'Чее?!',
        status: 'sended',
      },
    ],
  },
]);
