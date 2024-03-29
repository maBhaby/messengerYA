import Block from '@/services/Block';

interface IProps {
  chatName: string;
}

export class ChatHeader extends Block<IProps> {
  constructor() {
    super({
      chatName: 'Вадим',
    });
  }

  protected render() {
    const { chatName } = this.props;
    return `
      <header class="chat-header">
        <div class="chat-header__left">
          <div class="chat-header__thumbnail"></div>
          <h3 class="chat-header__title">${chatName}</h3>
        </div>
        <div>
          {{{ Button 
            size="xs" 
            colorTheme="transparent" 
            className="chat-header__button"
            text='
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="3" 
                height="16" 
                viewBox="0 0 3 16" 
                fill="none"
              >
                <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E" />
                <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E" />
                <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E" />
              </svg>
            '
          }}}
        </div>
      </header>
    `;
  }
}
