import Block from '@/services/Block';

interface IProps {
  linkToChat: string;
  unreadMessages?: number;
  title: string;
  time: string;
  message: string;
}

export class ChatItem extends Block<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  protected render() {
    const { linkToChat, unreadMessages, time, title, message } = this.props;
    return `
      <a data-link='${linkToChat}' class='chat-item'>
        <div class='chat-item__left'>
          <div class='chat-item__thumbnail'></div>
        </div>
        <div class='chat-item__core'>
          <div class='chat-item__core_top'>
            <span class='chat-item__core_title'>${title}</span>
            <span class='chat-item__core_time'>${time}</span>
          </div>
          <div class='chat-item__core_bottom'>
            <span class='chat-item__core_message'>${message}</span>
            ${
              unreadMessages !== undefined
                ? `<span class='chat-item__core_unread_message'>${unreadMessages}</span>`
                : ''
            }
          </div>
        </div>
      </a>
    `;
  }
}
