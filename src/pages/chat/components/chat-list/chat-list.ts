import Block from '@/services/Block';

export class ChatList extends Block<object> {
  constructor() {
    super({});
  }

  protected render() {
    return `
      <nav class="chat-list">
        <ul class="chat-list__list">
          {{#each (chatList)}}
          <li class="chat-list__list_item">
            {{{ ChatItem 
              linkToChat=this.linkToChat 
              title=this.title  
              time=this.time
              message=this.message
              unreadMessages=this.unreadMessages
            }}}
          </li>
          {{/each}}
        </ul>
      </nav>
    `;
  }
}
