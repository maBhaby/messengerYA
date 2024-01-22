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
    const { imgArrow, imgPin } = this.props;
    return `
      <footer class="chat-new-message">
        <form class="chat-new-message__form" action="">
          {{{ Button colorTheme="transparent" text='
            <img 
              src="${imgPin}" 
              alt="pin" 
              height="34" 
              width="32" 
            />
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
              <img 
                src="${imgArrow}" 
                alt="отправить новое сообщение" 
                height="15" 
                width="30" 
              />
            '
          }}}
        </form>
      </footer>
    `;
  }
}
