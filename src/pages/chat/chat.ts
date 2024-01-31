import Block from '@/services/Block';
import { privateRoute } from '@/utils/privateRoute';

class ChatPage extends Block<object> {
  constructor() {
    super({});
  }

  protected render() {
    return `
      <main class="chat-layout">
        <div class="chat-page">
          <aside class="chat-page__chat_list">
            {{{ SearchPanel }}}
            {{{ ChatList }}}
          </aside>
          {{{ CurrentChat}}}
        </div>
      </main>
    `;
  }
}

export default privateRoute(ChatPage)
