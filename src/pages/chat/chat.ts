import Block from '@/services/Block';

export class ChatPage extends Block<object> {
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
