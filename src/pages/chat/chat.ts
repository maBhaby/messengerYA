import Block from '@/services/Block';

export class ChatPage extends Block<any> {
  protected render() {
    return `
      {{#> ChatLayout}}
        <div class="chat-page">
          <aside class="chat-page__chat_list">
            {{{ SearchPanel }}}
            {{{ ChatList }}}
          </aside>
          {{{ CurrentChat}}}
        </div>
      {{/ChatLayout}}
    `;
  }
}
