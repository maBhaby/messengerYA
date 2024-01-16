import Block from "@/services/Block";
import { arrowIcon, pinIcon } from "@static/images";

interface IProps {
  imgPin: string
  imgArrow: string
}

export class ChatNewMessagePanel extends Block<IProps> {

  constructor() {
    super({
      imgPin: pinIcon,
      imgArrow: arrowIcon
    })
  }

  protected render() {
    const { imgArrow, imgPin } = this.props
    return (`
      <footer class="chat-new-message">
        <form class="chat-new-message__form" action="">
          {{{ Button colorTheme="transparent" text='
            <img 
              src="${ imgPin }" 
              alt="pin" 
              height="34" 
              width="32" 
            />
          ' }}}
          <div>
            {{{ MessageInput placeholder="Сообщение" name="message" }}}
          </div>
          {{{
            Button 
            colorTheme="blue" 
            className="chat-new-message__send_btn"
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
    `)
  }
}
