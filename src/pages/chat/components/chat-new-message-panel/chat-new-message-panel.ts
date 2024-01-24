import Block, { RefType } from '@/services/Block';
import { Message } from '@/components';
import { arrowIcon, pinIcon } from '@static/images';
import { validateMessage } from '@/utils/validations/login';

interface IProps {
  imgPin: string;
  imgArrow: string;
  onSubmit: (e: Event) => void;
  validate: {
    message: (val: string) => void;
  };
}

interface IRefs extends RefType {
  messageInput: Message;
}

export class ChatNewMessagePanel extends Block<IProps, IRefs> {
  constructor() {
    super({
      imgPin: pinIcon,
      imgArrow: arrowIcon,
      validate: {
        message: validateMessage,
      },
      onSubmit: (event: Event) => {
        event.preventDefault();

        const valueMessage = this.refs.messageInput.value;

        if (valueMessage) {
          console.log(valueMessage);
        }
      },
    });
  }

  protected render() {
    return `
      <footer class="chat-new-message">
        <form class="chat-new-message__form" action="">
          {{{ Button colorTheme="transparent" text='
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18662 13.5L14.7628 5.92389L15.7056 6.8667L8.12943 14.4428L7.18662 13.5Z" fill="#999999"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70067 16.0141L17.2768 8.43793L18.2196 9.38074L10.6435 16.9569L9.70067 16.0141Z" fill="#999999"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6195 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#999999"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8708L25.1335 16.2946L26.0763 17.2374L18.5002 24.8136L17.5574 23.8708Z" fill="#999999"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10831 23.8919C5.50482 21.2884 5.51424 17.0579 8.12936 14.4428L7.18655 13.5C4.0484 16.6381 4.0371 21.7148 7.16129 24.839C10.2855 27.9632 15.3621 27.9518 18.5003 24.8137L17.5574 23.8709Z" fill="#999999"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#999999"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70092 16.0144C7.95751 17.7578 7.95123 20.5782 9.68689 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41894 20.1518 9.42334 18.1776 10.6437 16.9572L9.70092 16.0144Z" fill="#999999"/>
          </svg>
          ' }}}
          <div>
            {{{ 
              MessageInput 
              placeholder="Сообщение" 
              name="message" 
              ref="messageInput" 
              validate=validate.message
            }}}
          </div>
          {{{
            Button 
            colorTheme="blue" 
            className="chat-new-message__send_btn"
            onClick=onSubmit
            text='
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>Artboard-35</title><g id="Left-2" data-name="Left"><polygon points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001" style="fill:#fff"/></g></svg>
            '
          }}}
        </form>
      </footer>
    `;
  }
}
